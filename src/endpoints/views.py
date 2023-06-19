from django.shortcuts import render
from rest_framework import viewsets
from .models import Jeu
from .serializers import JeuSerializer

class JeuViewSet(viewsets.ModelViewSet):
    queryset = Jeu.objects.all()
    serializer_class = JeuSerializer