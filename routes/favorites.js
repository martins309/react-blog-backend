const express = require('express'), 
    router = express.Router(),
    favoritesModel = require('../models/favoritesModel');
    // slugify = require('slugify');

router.get('/', async (req, res) => {
    const favoritesData = await favoritesModel.getAll();
    

    res.json(favoritesData).status(200)
    
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const food = await favoritesModel.getById(id);

    if (food) {
        res.json(food).status(200);
    }else {
res.status(404).send(`There is no food with that id ${id}`)

    }
});


// router.post('/', async (req, res) => {
//     const {food_name, food_category} = req.body;
//     const slug = slugify(food_name, {
//         replacement: '_',
//         lower: true,
//         strict: true
//     });
// });


module.exports = router;


