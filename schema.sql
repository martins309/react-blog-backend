CREATE TABLE favorites (
    id serial PRIMARY KEY, 
    name text NOT NULL, 
    distance integer, 
    stars integer, 
    category text, 
    fav_dish text, 
    takeout boolean, 
    last_ate timestamp);