from conf import SOURCE
import requests
import json


def get_resources():
    response_library = requests.get(SOURCE.URL_LIBRARY).json()
    response_university = requests.get(SOURCE.URL_UNIVERSITY).json()
    response_secondary = requests.get(SOURCE.URL_SECONDARY).json()
    with open("response_library.json", "a") as file:
        file.write(json.dumps(response_library))
        
    with open("response_university.json", "a") as file:
        file.write(json.dumps(response_university))

    with open("response_secondary.json", "a") as file:
        file.write(json.dumps(response_secondary))
    return response_library, response_university, response_secondary

def cleanup():
    with open("response_library.json", "r") as f:
        file= f.readlines()
    for el in file:
        # el = json.loads(el)
        print(el)
        break
        # for key, value in el.items():
        #     print(key)
get_resources()