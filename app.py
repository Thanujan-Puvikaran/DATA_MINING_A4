from conf import SOURCE
import requests
import json
import io


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
            e["lat"] = e["fields"]["coordonnees_finales"][0]
            e["long"] = e["fields"]["coordonnees_finales"][1]
            
            
        with io.open("data_library.json", "w") as file:
            file.write(json.dumps(data))
    """
    with open("response_university.json", "r") as f:
        file= f.readlines()
        for el in file:
            data = json.loads(el)
        with io.open("data_university.json", "w", encoding="utf-8") as file:
            s = json.dumps(data).replace("\u00e9","é").replace("\u00e8", "è")
            print(s)
            file.write(s)
    """
    
    with open("response_university.json", "r") as f:
        file= f.readlines()
        for el in file:
            data = json.loads(el)
        with io.open("data_university.json", "w") as file:
            file.write(json.dumps(data))
            
    
    with open("response_secondary.json", "r") as f:
        file= f.readlines()
        for el in file:
            data = json.loads(el)
        with io.open("data_secondary.json", "w") as file:
            file.write(json.dumps(data))
        
preprocessing()
            
    
    
    
