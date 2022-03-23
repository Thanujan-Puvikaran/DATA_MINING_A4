import pandas as pd

departements = pd.read_csv("departements-france.csv")

departements_map = dict()

for index, row in departements.iterrows():
    departements_map.update({row['code_departement']:row['code_departement'] + " - " + row['nom_departement']})