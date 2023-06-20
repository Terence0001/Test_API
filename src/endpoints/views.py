from .models import Jeu
from rest_framework import viewsets
from .serializers import JeuSerializer

class JeuViewSet(viewsets.ModelViewSet):
    queryset = Jeu.objects.all() # Ensemble de requêtes pour récupérer tous les objets Jeu de la base de données
    serializer_class = JeuSerializer # Sérialiseur utilisé pour convertir les objets Jeu en JSON et vice versa
