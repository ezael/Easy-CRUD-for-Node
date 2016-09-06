# Easy-CRUD-for-Node
Ceci est un example de code Node JS avec un CRUD fonctionnel. Il peut être facilement modifié pour s'adapter à vos besoins.
La base de données utilisée est MongoDB.

## Environnement
Vous devez avoir Node.JS, MongoDB et NPM installés sur votre serveur
- https://www.npmjs.com/
- https://nodejs.org
- https://www.mongodb.com

## Fichier server.js
Le fichier server.js est votre fichier principal. C'est lui qui va créer monter l'API.
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
