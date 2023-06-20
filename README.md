# Test_API
Développement du backend de l'application avec mise en place du CRUD des jeux.
Nous développerons de manière itérative chacun des EndPoint, de la manière suivante :  Développement du EndPoint Test du end point avec PostMan (ou service similaire) Création du Test Unitaire relatif au end point


# Voici l'url pour accéder à l'interface de l'API
http://127.0.0.1:8000/api/jeux/


# Navigation
Allez à la racine du projet avec :

`cd src`


# Installation des packages
Exécuter la commande suivante :

`pip install -r requirements.txt`


# Création de la base de donnée
`py manage.py makemigrations endpoints`
            +
`py manage.py migrate endpoints`


# Remplir la base de donnée
`py manage.py shell < endpoints/utils.py`


# Lancer tout les tests unitaires
`py manage.py test endpoints`


# Réalisation des test
Lancer uniquement des tests pour une classe précise dans le fichier test.py

`python manage.py test endpoints.tests.NomDeClasse`

# Lancer le serveur de développement 
`py manage.py runserver`


# Arrêter le serveur de développement 
ctrl + c

