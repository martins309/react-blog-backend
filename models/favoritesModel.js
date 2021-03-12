const { response } = require('express');
const db = require('./con');

class FAVORITESModel {
    constructor(id, name, category, slug, fav_dish) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.slug = slug;
        this.fav_dish = fav_dish;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM favorites;`)
        return response;
    }

    static async getById(id) {
        const response = await db.one(`SELECT * FROM favorites WHERE id = '${id}';`);
        return response;
    }


}

module.exports = FAVORITESModel;
