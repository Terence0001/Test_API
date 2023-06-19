from random import randint
from endpoints.models import Jeu

def remplir_table_jeu():
    noms_jeux = ["Monopoly", "Scrabble", "Puissance 4", "Uno", "Risk", "Cluedo", "Trivial Pursuit", "Dixit", "Catan", "Time's Up"]
    intervalles_age = ["5-6", "6-10", "8-12", "10-99", "12-16", "16+", "18+", "7-99", "6-8", "8-10"]

    for _ in range(10):
        jeu = Jeu(
            nombre_joueur=randint(2, 6),
            nom_jeu=noms_jeux[randint(0, len(noms_jeux)-1)],
            age=intervalles_age[randint(0, len(intervalles_age)-1)]
        )
        jeu.save()

remplir_table_jeu()