from django.db import models

class Jeu(models.Model):
    nombre_joueur = models.IntegerField()
    nom_jeu = models.CharField(max_length=255)
    age = models.CharField(max_length=20)

    def __str__(self):
        return self.nom_jeu