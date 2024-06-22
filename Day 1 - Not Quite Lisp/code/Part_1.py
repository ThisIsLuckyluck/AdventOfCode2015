with open('Day 1 - Not Quite Lisp/code/instruction.txt', 'r') as file:
    instruction = file.read()
def etage_livraison(instruction):
    etage = 0
    
    for char in instruction:
        if char == '(':
            etage += 1
        elif char == ')':
            etage -= 1
    
    print(f"Le père Noël doit livrer à l'étage {etage}")
    
etage_livraison(instruction)