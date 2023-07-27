# Documentation de l'API

Cette API fournit des points d'accès pour gérer les salons, les joueurs et les cartes d'une application de jeu.

## Pour commencer

Pour démarrer avec cette API, vous devez avoir Node.js et MongoDB installés sur votre système. Après avoir cloné le dépôt, installez les dépendances requises avec npm :

npm install

Ensuite, créez un fichier .env à la racine du projet et définissez les variables d'environnement suivantes :

MONGODB_URI=your_mongodb_connection_string
PORT=3000

Remplacez `your_mongodb_connection_string` par la chaîne de connexion de votre base de données MongoDB.

Maintenant, vous pouvez démarrer le serveur en utilisant la commande suivante :

npm start


L'API fonctionnera sur http://localhost:3000 par défaut.

## Routes

### Salons

- **GET /salons** : Obtenir la liste de tous les salons avec leurs joueurs associés.

- **GET /salons/:id** : Obtenir un salon spécifique par son ID.

- **POST /salons** : Créer un nouveau salon avec des joueurs provenant de la collection 'Joueur'.

- **PUT /salons/:id** : Mettre à jour un salon spécifique avec de nouveaux joueurs.

- **DELETE /salons/:id** : Supprimer un salon spécifique par son ID.

- **DELETE /salons** : Supprimer tous les salons.

### Joueurs

- **GET /joueurs** : Obtenir la liste de tous les joueurs.

- **GET /joueurs/:id** : Obtenir un joueur spécifique par son ID.

- **POST /joueurs** : Créer un nouveau joueur.

- **PUT /joueurs/:id** : Mettre à jour les informations d'un joueur spécifique.

- **DELETE /joueurs/:id** : Supprimer un joueur spécifique par son ID.

- **DELETE /joueurs** : Supprimer tous les joueurs.

### Cartes

- **GET /cartes** : Obtenir la liste de toutes les cartes.

- **GET /cartes/:id** : Obtenir une carte spécifique par son ID.

- **POST /cartes** : Créer une nouvelle carte.

- **PUT /cartes/:id** : Mettre à jour les informations d'une carte spécifique.

- **DELETE /cartes/:id** : Supprimer une carte spécifique par son ID.

- **GET /cartes/domaine-entreprise/:domaineEntreprise** : Obtenir une liste de cartes en fonction de leur 'domaineEntreprise'.

- **DELETE /cartes/domaine-entreprise/:domaineEntreprise** : Supprimer des cartes en fonction de leur 'domaineEntreprise'.

- **GET /cartes/liste/domaine-entreprise** : Obtenir une liste de tous les 'domaineEntreprise' distincts.

- **GET /cartes/random/domaine-entreprise** : Obtenir une liste de cartes en fonction d'un 'domaineEntreprise' aléatoire.

## Format des réponses de l'API

L'API renvoie des réponses au format JSON.

## Authentification

Cette API ne nécessite pas d'authentification pour les routes. Cependant, il est recommandé d'ajouter des mécanismes d'authentification pour une utilisation en production.

## Erreurs

En cas d'erreur, l'API répondra avec un code d'erreur approprié et une réponse JSON contenant un champ 'error' avec un message d'erreur descriptif.




