with open('Day 1 - Not Quite Lisp/code/instruction.txt', 'r') as file:
    instruction = file.read()

def position_caracter(instruction):
    etage = 0
    nb_caractere = 0
    while etage != -1 and nb_caractere < len(instruction):
        char = instruction[nb_caractere]
        if char == '(':
            etage += 1
        elif char == ')':
            etage -= 1
        nb_caractere += 1
    print(nb_caractere)

position_caracter(instruction)