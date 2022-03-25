from conf import SOURCE
import requests
import json
import io
import pandas as pd





def init_departements_map():
    departements = pd.read_csv("departements-france.csv")
    
    departements_map = dict()
    
    for index, row in departements.iterrows():
        departements_map.update({row['code_departement']:row['code_departement'] + " - " + row['nom_departement']})
    
    departements_map.update({"975":"Saint-Pierre-et-Miquelon"})
    return departements_map






def get_resources():
    response_library = requests.get(SOURCE.URL_LIBRARY).json()
    response_university = requests.get(SOURCE.URL_UNIVERSITY).json()
    response_secondary = requests.get(SOURCE.URL_SECONDARY).json()
    with io.open("response_library.json", "w") as file:
        file.write(json.dumps(response_library).replace("\u00e9","é").replace("\u00e8", "è"))
    
    with io.open("response_university.json", "w") as file:
        file.write(json.dumps(response_university).encode().decode('unicode_escape'))

    with open("response_secondary.json", "w") as file:
        file.write(json.dumps(response_secondary))

    return response_library, response_university, response_secondary


def cleanup():
    with open("response_library.json", "r") as f:
        file= f.readlines()
    for el in file:
        el = json.loads(el)
        print(el)
        break
        # for key, value in el.items():
        #     print(key)


def preprocessing():
    with open("response_library.json", "r") as f:
        file= f.readlines()
    for el in file:
        el = json.loads(el)
        
        data = list()
        
        for e in el:
            if "coordonnees_finales" in e["fields"].keys():
                data.append(e)
                
        for e in data:
            e["class"] = "Bibliotheque"
            if e["fields"]["dept"] == "69M":
                e["fields"]["dept"] = "69"
            if e["fields"]["dept"] in departements_map.keys():
                e["fields"]["dept"] = departements_map[e["fields"]["dept"]]
            else :
                print(e["fields"]["dept"], e["fields"]["adresse_ville"])
                
                
            e["lat"] = e["fields"]["coordonnees_finales"][0]
            e["long"] = e["fields"]["coordonnees_finales"][1]
            
            
        with io.open("data_library.json", "w") as file:
            file.write(json.dumps(data))
            
    
    
    with open("response_secondary.json", "r") as f:
        file= f.readlines()
    for el in file:
        el = json.loads(el)
        for e in el:
            e["class"] = "Secondaire"
            if e["fields"]["code_departement"] in departements_map.keys():
                e["fields"]["code_departement"] = departements_map[e["fields"]["code_departement"]]
            elif e["fields"]["code_departement"][1:] in departements_map.keys():
                e["fields"]["code_departement"] = departements_map[e["fields"]["code_departement"][1:]]
            else :
                print(e["fields"]["code_departement"], e["fields"]["libelle_commune"])
        with io.open("data_secondary.json", "w") as file:
            file.write(json.dumps(el))
            
            

    with open("response_university.json", "r") as f:
        file= f.readlines()
    for el in file:
        el = json.loads(el)
        
        for e in el:
            e["class"] = "Superieur"
        with io.open("data_university.json", "w") as file:
            file.write(json.dumps(el))
            
        
    
departements_map = init_departements_map()
        
preprocessing()

            
    
    
    
