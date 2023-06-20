from django.test import TestCase
from endpoints.models import Jeu
from rest_framework import status
from random import randint


class JeuTestCase(TestCase):
    def setUp(self):
        # Crée deux objets Jeu pour les utiliser dans les tests
        # jeux = Jeu.objects.all()
        self.jeu1 = Jeu.objects.get(nom_jeu="Monopoly")
        self.jeu2 = Jeu.objects.get(nom_jeu="Scrabble")

    def test_jeu_str(self):
        # Vérifie que la méthode __str__() du modèle Jeu retourne le nom du jeu correctement
        self.assertEqual(str(self.jeu1), "Monopoly")
        self.assertEqual(str(self.jeu2), "Scrabble")

    def test_jeu_nombre_joueur(self):
        # Vérifie que le nombre de joueurs d'un jeu est correct
        jeu1 = Jeu.objects.get(nom_jeu="Monopoly")
        jeu2 = Jeu.objects.get(nom_jeu="Scrabble")
        print("_______________________________")
        print(jeu1.id)
        self.assertEqual(jeu1.nombre_joueur, 4)
        self.assertEqual(jeu2.nombre_joueur, 2)

    def test_jeu_age(self):
        # Vérifie que l'âge d'un jeu est correct
        jeu1 = Jeu.objects.get(nom_jeu="Monopoly")
        jeu2 = Jeu.objects.get(nom_jeu="Scrabble")
        self.assertEqual(jeu1.age, "8-99")
        self.assertEqual(jeu2.age, "10-99")




class JeuxAPITest(TestCase):
    def setUp(self):
        noms_jeux = ["Monopoly", "Scrabble", "Puissance 4", "Uno", "Risk", "Cluedo", "Trivial Pursuit", "Dixit", "Catan", "Time's Up"]
        intervalles_age = ["5-6", "6-10", "8-12", "10-99", "12-16", "16+", "18+", "7-99", "6-8", "8-10"]

        for _ in range(10):
            jeu = Jeu(
                nombre_joueur=randint(2, 6),
                nom_jeu=noms_jeux[_],
                age=intervalles_age[randint(0, len(intervalles_age)-1)]
            )
            jeu.save()
    
    def test_create_jeu(self):
        nb_data = Jeu.objects.count()
        url = f'/api/jeux/'
        data = {
            'nombre_joueur': 3,
            'nom_jeu': 'Uno',
            'age': '6+'
        }
        response = self.client.post(url, data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Jeu.objects.count(), nb_data + 1)



    def test_retrieve_jeu(self):
        jeu = Jeu.objects.filter(nom_jeu="Uno").first()
        # print(jeu) # Le print s'exécute avant même l'execution de tests
        url = f'/api/jeux/{jeu.id}/'
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['nom_jeu'], jeu.nom_jeu)


    def test_update_jeu(self):
        jeu = Jeu.objects.filter(nom_jeu="Uno").first()
        url = f'/api/jeux/{jeu.id}/'
        data = {
            'nombre_joueur': 6,
            'nom_jeu': 'Monopoly Deal',
            'age': '8+'
        }
        # print("UPDATE")
        # print(jeu)
        response = self.client.put(url, data)

        # self.assertEqual(response.status_code, status.HTTP_200_OK)
        updated_jeu = Jeu.objects.get(pk=jeu.id)
        # self.assertEqual(updated_jeu.nom_jeu, 'Monopoly Deal')
        # self.assertEqual(updated_jeu.age, '8+')

    def test_delete_jeu(self):
        nb_data2 = Jeu.objects.count()
        url = f'/api/jeux/{1}/'
        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Jeu.objects.count(), nb_data2 - 1)

    def test_list_jeux(self):
        url = f'/api/jeux/'
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)



