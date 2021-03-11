const express = require('express'), 
    router = express.Router(),
    favoritesModel = require('../models/favoritesModel'),
    slugify = require('slugify');

router.get('/', async (req, res) => {
    const favoritesData = await favoritesModel.getAll();

    res.json(favoritesData).status(200)
});

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const food = await favoritesModel.getBySlug(slug);

    if (food) {
        res.json(food).status(200);
    }else {
res.status(404).send(`There is no food with that slug ${slug}`)

    }
});


router.post('/', async (req, res) => {
    const {food_name, food_category} = req.body;
    const slug = slugify(food_name, {
        replacement: '_',
        lower: true,
        strict: true
    });
    const response = await favoritesModel.addEntry(food_name, slug, food_category);
    console.log("post data response is: ", response);
    if(response.rowCount >= 1 ) {
        res.redirect('/favorites')
    } else {
        res.sendStatus(500);
    }
});

router.post('/delete', async (req, res) => {
    const { food_id } = req.body;
    const food = new favoritesModel(food_id);
    const response = await food.delteEntry();
    if (response.rowCount >= 1) {
        res.redirect('/favorites')
    }else {
        res.sendStatus(500);
    }
});

module.exports = router;


