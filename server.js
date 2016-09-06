var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

/**
* nom de la base de données
*/
mongoose.connect('mongodb://localhost/mabasededonnee');

/**
* Liste des modeles utilisés par le serveur node sur Mongo DB
*/
var Client        = require('./models/client');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8088;        // port d'ecoute

var router = express.Router(); 

// middleware si besoin d'ajouter un traitement global sur toutes les routes
router.use(function(req, res, next) {
    //console.log('Travail en cours...');
    next(); // on poursuit sur les autres routes.
});

/**
* DEBUT API
* MODELE : Client
*/
router.route('/clients')
    // ***** creation d'un enregistrement POST *****
    .post(function(req, res) {

        var resultat          = new Client();
        resultat.name         = req.body.name;
        resultat.description  = req.body.description;

        // save the bear and check for errors
        resultat.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'ok' });
        });

    })

    //***** recuperation de tous les enregistrements GET *****
    .get(function(req, res) {
        Client.find(function(err, resultats) {
            if (err)
                res.send(err);

            res.json(resultats);
        });
    });

router.route('/clients/:_id')

    //***** recuperation d'un seul enregistrement GET + _id *****
    .get(function(req, res) {
        Client.findById(req.params._id, function(err, resultat) {
            if (err)
                res.send(err);
            res.json(resultat);
        });
    })

    //***** modification d'un enregistrement PUT + _id *****
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Client.findById(req.params._id, function(err, resultat) {

            if (err)
                res.send(err);

            // update des champs
            resultat.name         = req.body.name;
            resultat.description  = req.body.description;

            // save the bear
            resultat.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'ok' });
            });

        });
    })

    //***** effacement d'un enregistrement DELETE + _id *****
    .delete(function(req, res) {
        Client.remove({
            _id: req.params._id
        }, function(err, resultat) {
            if (err)
                res.send(err);

            res.json({ message: 'ok' });
        });
    });
/**
* FIN API
* MODELE : Client
*/

router.get('/', function(req, res) {
    res.json({ message: 'bienvenue sur l\'API!' });   
});

app.use('/api', router);

app.listen(port);
console.log('Ecoute sur le port ' + port);
