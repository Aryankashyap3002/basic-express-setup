# basic-express-setup

This is a base Node.js project template, which anyone can use as it has been prepared by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

src → Inside the src folder, all the actual source code regarding the project will reside. This will not include any kind of tests. (You might want to make a separate tests folder.)

Let's take a look inside the src folder:

config → In this folder, anything and everything regarding any configurations or setup of a library or module will be done.

For example: Setting up dotenv so that we can use environment variables anywhere in a cleaner fashion, this is done in the server-config.js.
Another example can be setting up a logging library that can help you prepare meaningful logs, so the configuration for this library should also be done here.
routes → In the routes folder, we register a route and the corresponding middleware and controllers to it.

middlewares → They are just going to intercept the incoming requests where we can write our validators, authenticators, etc.

controllers → They are kind of the last middleware, as after them, you call your business layer to execute the business logic.

In controllers, we just receive the incoming requests and data, then pass it to the business layer, and once the business layer returns an output, we structure the API response in controllers and send the output.

repositories → This folder contains all the logic used to interact with the database by writing queries. All the raw queries or ORM queries will go here.

services → Contains the business logic and interacts with repositories for data from the database.

utils → Contains helper methods, error classes, etc.
 
Setup the project
Download this template from GitHub and open it in your favorite text editor.
In the root directory, create a .env file and add the following env variables:
    PORT=<port number of your choice>

    Inside the src/config folder, create a file named config.json and write the following code:
    {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

- If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
- If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.
