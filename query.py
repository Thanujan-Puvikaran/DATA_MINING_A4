from pyfuseki import FusekiUpdate,FusekiQuery
import haversine as hs
from operator import itemgetter

fuseki_query = FusekiQuery("http://localhost:3030", "projet")

def getValueFromJson(query_result):
    results = query_result._convertJSON()
    lst = list()
    for result in results["results"]["bindings"]:
        if len(results["head"]["vars"]) > 1:
            tmp = list()
            for var in results["head"]["vars"]:
                tmp.append(result[var]["value"])
            lst.append(tmp)
        else:
            lst.append(result[results["head"]["vars"][0]]["value"])
    return lst

def getRegions(): 

    querSecond = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    SELECT DISTINCT ?region 
    WHERE {
        ?a rdf:type projet:Secondaire .
        ?a projet:fields [projet:region ?region] .
    }
    """
    qresSecond = getValueFromJson(fuseki_query.run_sparql(querSecond))

    querUni = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT ?region 
    WHERE {
        ?a rdf:type projet:Superieur .
        ?a projet:region ?region.
    }
    """
    qresUni = getValueFromJson(fuseki_query.run_sparql(querUni))

    regions = set(qresSecond+qresUni)
    return list(regions)

def getDepartements(region): 

    querSecond = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    SELECT DISTINCT ?departement 
    WHERE {
        ?a rdf:type projet:Secondaire .
        ?a projet:fields [projet:departement ?departement] .
        ?a projet:fields [projet:region "%s"^^<xsd:string> ] .
    }
    """%region
    qresSecond = getValueFromJson(fuseki_query.run_sparql(querSecond))


    querUni = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    SELECT DISTINCT ?departement 
    WHERE {
        ?a rdf:type projet:Superieur .
        ?a projet:departement ?departement .
        ?a projet:region "%s"^^<xsd:string> .    
    }
    """%region
    qresUni = getValueFromJson(fuseki_query.run_sparql(querUni))

    departements = set(qresSecond+qresUni)

    return list(departements)

def getVille(departement): 

    querSecond = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>    
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT ?ville 
    WHERE {
        ?a rdf:type projet:Secondaire .
        ?a projet:fields [projet:departement "%s"^^<xsd:string>] .
        ?a projet:fields [projet:ville ?ville  ] .
    }
    """%departement
    qresSecond = getValueFromJson(fuseki_query.run_sparql(querSecond))

    querUni = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>    
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT ?ville 
    WHERE {
        ?a rdf:type projet:Superieur .
        ?a projet:departement "%s"^^<xsd:string> .
        ?a projet:ville ?ville .    
    }
    """%departement
    qresUni =  getValueFromJson(fuseki_query.run_sparql(querUni))

    villes = set(qresSecond+qresUni)

    return list(villes)

def getNatureEcole(ville): 
    querSecond = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>    
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT ?nature 
    WHERE {
        ?a rdf:type projet:Secondaire .
        ?a projet:fields [projet:ville "%s"^^<xsd:string>] .
        ?a projet:fields [projet:nature ?nature  ] .
    }
    """%ville
    qresSecond = getValueFromJson(fuseki_query.run_sparql(querSecond))

    querUni = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>    
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT ?nature 
    WHERE {
        ?a rdf:type projet:Superieur .
        ?a projet:ville "%s"^^<xsd:string> .
        ?a projet:nature ?nature .    
    }
    """%ville

    qresUni = getValueFromJson(fuseki_query.run_sparql(querUni))

    villes = set(qresSecond+qresUni)

    return list(villes)

def getEcoles(ville,nature): 
    ecoles = []

    querSecond = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>    
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT ?nom 
    WHERE {
        ?a rdf:type projet:Secondaire .
        ?a projet:fields [projet:nature "%s"^^<xsd:string>] .
        ?a projet:fields [projet:ville "%s"^^<xsd:string> ] .
        ?a projet:fields [projet:nom ?nom ] .
    }   
    """%(nature,ville)
    qresSecond = getValueFromJson(fuseki_query.run_sparql(querSecond))

    for x in qresSecond :
        ecoles.append(nature + " | " + x )
    querUni = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>    
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT ?nom 
    WHERE {
        ?a rdf:type projet:Superieur .
        ?a projet:nature "%s"^^<xsd:string> .
        ?a projet:ville "%s"^^<xsd:string>  .
        ?a projet:nom ?nom  .
    }   
    """%(nature,ville)

    qresUni = getValueFromJson(fuseki_query.run_sparql(querUni))

    for x in qresUni :
        ecoles.append(nature + " | " + x )
        
    return ecoles

def getCoordonneesEcole(ecole,ville): 

    nom = ecole.split(" | ")[1]

    querSecond = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>    
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT ?latitude ?longitude 
    WHERE {
        ?a rdf:type projet:Secondaire .
        ?a projet:fields [projet:nom "%s"^^<xsd:string> ] .
        ?a projet:fields [projet:ville "%s"^^<xsd:string> ] .
        ?a projet:fields [projet:longitude ?longitude] .
        ?a projet:fields [projet:latitude ?latitude] .
    }   
    """%(nom,ville)

    qresSecond = getValueFromJson(fuseki_query.run_sparql(querSecond))
    querUni = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>    
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT ?latitude ?longitude  
    WHERE {
        ?a rdf:type projet:Superieur .
        ?a projet:longitude ?longitude .
        ?a projet:latitude ?latitude .
        ?a projet:nom "%s"^^<xsd:string>  .
        ?a projet:ville "%s"^^<xsd:string>  .
    }   
    """%(nom,ville)

    qresUni = getValueFromJson(fuseki_query.run_sparql(querUni))

    if len(qresSecond) != 0 :
        return qresSecond[0]
    else : 
        return qresUni[0]

def getCordonneesBiblio():

    querBib = """
    PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>    
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT ?latitude ?longitude  
    WHERE {
        ?a rdf:type projet:Bibliotheque .
        ?a projet:longitude ?longitude .
        ?a projet:latitude ?latitude .
    }   
    """

    coords = []
    qresBib = getValueFromJson(fuseki_query.run_sparql(querBib))   
    return qresBib


def calculDistance(coordEcole, coordsBib, nbBib):
    for coords in coordsBib:
        coords.append(hs.haversine([float(i) for i in coordEcole],[float(i) for i in coords]))
    return sorted(coordsBib, key = itemgetter(2))[:nbBib]

def getBibInfo(coords):
    biblios = []
    for coord in coords:
        querBib = """
        PREFIX projet: <http://www.semanticweb.org/ontologies/projet_webdataming#>    
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

        SELECT DISTINCT ?nom ?adresse ?ville   
        WHERE {
            ?a rdf:type projet:Bibliotheque .
            ?a projet:latitude "%s"^^<xsd:float> .
            ?a projet:longitude "%s"^^<xsd:float> .
            ?a projet:fields [projet:nom ?nom] .
            ?a projet:fields [projet:adresse ?adresse] .
            ?a projet:fields [projet:ville ?ville] .
            ?a projet:fields [projet:codepostal ?codepostal] .
        }   
        """%(coord[0],coord[1])

        qresBib = getValueFromJson(fuseki_query.run_sparql(querBib))

        for x in qresBib:
            x.append(coord[0])
            x.append(coord[1])
            x.append(coord[2])

        biblios.append(qresBib[0])

    return biblios


def getBiblios(coordsBibs,coordEcole):
    bibsProches = calculDistance(coordEcole,coordsBibs,5)
    bibsInfos = getBibInfo(bibsProches)
    return bibsInfos