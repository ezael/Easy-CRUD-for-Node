# Easy-CRUD-for-Node
Ceci est un example de code Node JS avec un CRUD fonctionnel. Il peut être facilement modifié pour s'adapter à vos besoins.
La base de données utilisée est MongoDB.

## Environnement
Vous devez avoir Node.JS, MongoDB et NPM installés sur votre serveur
- https://www.npmjs.com/
- https://nodejs.org
- https://www.mongodb.com

## Fichier server.js
Le fichier server.js est votre fichier principal. C'est lui qui va monter l'API.
Au sein de ce fichier, vous povuez modifier les lignes suivantes pour 'ladapter à vos besoins :
```
ligne 9 mongoose.connect('mongodb://localhost/mabasededonnee');
```
Remplacer `mabasededonnee` par le nom que vous souhaitez donner à votre base dans MongoDB. Si cette base n'existe pas lors de votre 1er call à l'API, le serveur va automatiquement la créer pour vous.
```
ligne 14 var Client        = require('./models/client');
```
Pour cet exemple, nous partons du principe que nous allons travailler sur un modèle de type `Client`. De là, découle certaines pratiques et contraintes :
- le nom de votre modèle commence par un majuscule, au singulier. Ici : `Client`
- le nom de votre fichier contenant votre modèle doit être en minuscules, au singulier, ici : `./models/client.js`
- l'ODM installé sur le serveur NODE va automatiquement créer une table découlant du nom de votre modèle, sans majuscule mais au pluriel, ici : `clients`
- par soucis de cohérence, votre l'url de votre api pour CE modèle doit être identique au nom de votre modèle, au pluriel et sans majuscules, ici : `/clients`

Vous pouvez modifier la ligne 14 pour remplacer Client et client par le nom de votre modèle. Attention à bien mettre une majuscule sur le nom de la variable javascript, et à bien laisser le nom de fichier dans le require en minuscules, sans l'extension .js !

Si votre APi doit gérer plusieurs modèles, copier la ligne 14 et ajouter les.
```
ligne 19 var port = process.env.PORT || 8088;
```
Ici vous pouvez changer le port sur lequel va répondre votre API.
```
ligne 33 router.route('/clients')
```
remplacez ici `clients` par le nom de votre modele, en minuscules et au pluriel.
```
ligne 37 var resultat = new Client();
```
A la ligne 37, vous remplacez `Client` par le nom de votre modèle, avec une majuscule et au singulier. Ensuite, à partir de la liste 38, vous devez avoir un ensemble de ligne composés des noms de chmpa de votre table, identiques aux noms des champs que vous avez inscrit dans le fichier de modele de votre dossier `./models`.

par exemple, si votre modèle contient deux champs, nommés nom et email, vos lignes 38 et 39 seront :
```
ligne 38 resultat.nom   = req.body.nom;
ligne 39 resultat.email = req.body.email;
```
