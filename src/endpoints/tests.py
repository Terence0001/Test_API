from django.test import TestCase
from .models import Jeu


class JeuTestCase(TestCase):
    def setUp(self):
        # Crée deux objets Jeu pour les utiliser dans les tests
        Jeu.objects.create(nombre_joueur=4, nom_jeu="Monopoly", age="8-99")
        Jeu.objects.create(nombre_joueur=2, nom_jeu="Scrabble", age="10-99")

    def test_jeu_str(self):
        # Vérifie que la méthode __str__() du modèle Jeu retourne le nom du jeu correctement
        jeu1 = Jeu.objects.get(nom_jeu="Monopoly")
        jeu2 = Jeu.objects.get(nom_jeu="Scrabble")
        self.assertEqual(str(jeu1), "Monopoly")
        self.assertEqual(str(jeu2), "Scrabble")

    def test_jeu_nombre_joueur(self):
        # Vérifie que le nombre de joueurs d'un jeu est correct
        jeu1 = Jeu.objects.get(nom_jeu="Monopoly")
        jeu2 = Jeu.objects.get(nom_jeu="Scrabble")
        self.assertEqual(jeu1.nombre_joueur, 4)
        self.assertEqual(jeu2.nombre_joueur, 2)

    def test_jeu_age(self):
        # Vérifie que l'âge d'un jeu est correct
        jeu1 = Jeu.objects.get(nom_jeu="Monopoly")
        jeu2 = Jeu.objects.get(nom_jeu="Scrabble")
        self.assertEqual(jeu1.age, "8-99")
        self.assertEqual(jeu2.age, "10-99")
