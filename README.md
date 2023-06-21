# Test_API
Développement du backend de l'application avec mise en place du CRUD des jeux.
Nous développerons de manière itérative chacun des EndPoint, de la manière suivante :  Développement du EndPoint Test du end point avec PostMan (ou service similaire) Création du Test Unitaire relatif au end point




# Tout d'abord ouvrez votre terminal et suivez les étapes suivantes:
# Création d'un environnement virtuel
```{sh}
`py venv -m .env`
```


# Lancement de l'environnement virtuel
```{sh}
`.env\Scripts\activate`
```

# Navigation
Allez à la racine du projet avec :
```{sh}
`cd src`
```

# Installation des packages
Exécuter la commande suivante :
```{sh}
`pip install -r requirements.txt`
```

# Création de la base de donnée
```{sh}
py manage.py makemigrations endpoints
py manage.py migrate endpoints
```


# Remplir la base de donnée
```{sh}
`py manage.py shell < endpoints/utils.py`
```

# Lancer tout les tests unitaires
```{sh}
`py manage.py test endpoints`
```

# Réalisation des test
Lancer uniquement des tests pour une classe précise dans le fichier test.py
```{sh}
`python manage.py test endpoints.tests.NomDeClasse`
```
Lancer un test avec un arrêt à la première erreur
```{sh}
`py manage.py test --failfast endpoints`
```

# Lancer le serveur de développement si besoin
```{sh}
`py manage.py runserver`
```
# Voici l'url pour accéder à l'interface de l'API
http://127.0.0.1:8000/api/jeux/

# Arrêter le serveur de développement 
ctrl + c

