# ecommerce-api

## Description

My task was to build the back end for an e-commerce site. I had to configure a working Express.js API to use Sequelize to interact with a MySQL database.

## Getting started

``` install npm```

``` npm run seed```

## What we did

- install MYSQL2, sequelize and dotenv packages.
- Create database with MySQL shell commands in the schema.sql file in the db folder.
- Used environment variables to store sensitive data like MySQL username, password, and database name.
- Executed association methods on Sequelize models to create relationships between them. 
- Created the API Routes to perform RESTful CRUD Operations on category, product and tag models. 
- Seeded the Database after creating the models and routes. 
- Created the code needed in server.js to sync Sequelize to the Database on Server Start. 
- On opening API GET routes in Insomnia for categories, products, or tags the data for each of these routes is displayed in a formatted JSON
- On testing API POST, PUT, and DELETE routes in Insomnia, I was able to successfully create, update, and delete data in my database. 

## Links

[video link](https://drive.google.com/file/d/1RQzi_Zj3HTQ0ERbcvQHhbKz68F-2FXXi/view)


