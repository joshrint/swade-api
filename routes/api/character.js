const express = require('express');
const router = express.Router();

const Character = require('../../models/CharacterSchema');

router.get('/test', (req, res) => res.send('Character Route Testing'));

router.get('/', (req, res) => {
    Character.find()
        .then(characters => res.json(characters))
        .catch(err => res.status(404).json({ nocharsfound: 'No Characters found'}));
});

router.get('/:id', (req, res) =>{
    Character.findOne({name: req.params.id})
    .then(character => res.json(character))
    .catch(err => res.status(404).json({ nocharfound: 'No Character found'}));
});


module.exports = router;