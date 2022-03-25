import json
from rdflib import Graph, parser

def convert(name:str):
    with open(f"data_{name}.json", "r") as f:
        data = json.load(f)

    with open(f"Ontology/jsonld_{name}.json", "r") as f:
        context = json.load(f)

    print(name)
    g = Graph()
    format="turtle"
    g.parse(data = json.dumps(data), format = "json-ld", context = context)
    obj = g.serialize(format=format)
    with open("%s.%s"%(name,format),"w",encoding="utf-8") as f:
        f.write(obj)

convert("library")
convert("university")
convert("secondary")