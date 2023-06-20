from rest_framework import serializers
from .models import Jeu

class JeuSerializer(serializers.ModelSerializer):
    class Meta:
        # Spécification du modèle associé au sérialiseur
        model = Jeu
        fields = '__all__'
