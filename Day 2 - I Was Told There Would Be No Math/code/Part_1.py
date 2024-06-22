import re

def dim(filepath):
    with open(filepath, 'r') as file:
        dimensions = [list(map(int, re.findall(r'\d+', line))) for line in file]
    return dimensions

def calcul(taille):
    emballage = 0
    for s in taille:
        l, w, h = s
        formule = 2*l*w + 2*w*h + 2*h*l
        ajout = min(l*w, w*h, h*l)
        emballage += formule + ajout
    return emballage

dimensions = dim('Day 2 - I Was Told There Would Be No Math/code/dim.txt')
print(calcul(dimensions))