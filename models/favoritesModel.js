const db = require('./con');

class FAVORITESModel {
    constructor(id, name, category, fav_dish) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.fav_dish = fav_dish;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM favorites;`)
    }









}

