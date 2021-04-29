const router = require('express').Router();
const { Character, Game, User } = require('../models');

// Get all characters for the homepage

router.get('/', async (req, res) => {
    try {
        const dbCharacterData = await Character.findAll({
            include: [
                {
                    model: User,
                    all: true,
                    nested: true
                }
            ]
        });

        const dbGameData = await Game.findAll({
            include: [
                {
                    model: User,
                    all: true,
                    nested: true
                }
            ]
        })

        const characters = dbCharacterData.map((character) => character.get({plain: true}));
        const games = dbGameData.map((game) => game.get({plain: true}));

        res.render('homepage', {
            characters,
            games
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/game/:id', async (req, res) => {
    try {
        const dbGameData = await Game.findByPk(req.params.id, {
            include: [
                {
                    model: Game,
                    attributes: [ 'id', 'title', 'genre', 'description', 'game_id', 'user_id' ]
                }
            ]
        });

        const game = dbGameData.get({ plain: true });
        res.render('game', {game});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/character/:id', async (req, res) => {
    try {
        const characterData = await Character.findByPk(req.params.id);

        const character = characterData.get({plain:true});

        res.render('character', {character});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;