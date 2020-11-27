This is a NodeJS RestApi Generator written in nodeJs 

## Table of Contents
* [TODOS](#todos)
* [Installation](#install)
* [Generated Endpoints](#endpoints)

<a name="todos"></a>
## TODOS
* Remove hardcode code in generator
* Use dynamic inputs to generate files (through a cli or a frontend)
* Include authentication
* Include support to other databases
* Include support to other ORMs
* Include support to TypeScript
* Include support to other web frameworks
* Include documentation

<a name="install"></a>
## Installation

For now, it generates a mock "product" CRUD using sequelize, PostgresSQL, and Express 

```sh
npm install && node index
```

<a name="endpoints"></a>
## Endpoints
GET http://localhost:3001/products

Result Body
```json
[
    {
        "id": 36,
        "name": "Product",
        "quantity": 50,
        "price": "10.10"
    }
]
```
GET http://localhost:3001/products/36

Result Body
```json
{
    "id": 36,
    "name": "Product",
    "quantity": 50,
    "price": "10.10"
}
```

POST http://localhost:3001/products

Request Body
```json
{
    "name" : "Product 2",
    "quantity" : 50,
    "price" : 10.1
}
```

Response Body
```json
{
    "id": 37,
    "name": "Product 2",
    "quantity": 50,
    "price": "10.10"
}
```

PUT http://localhost:3001/products/37

Request Body
```json
{
    "name" : "Product 2 updated",
    "quantity" : 100,
    "price" : 10.1
}
```

Response Body
```json
[
    1,
    [
        {
            "id": 37,
            "name": "Product 2 updated",
            "quantity": 100,
            "price": "10.10"
        }
    ]
]
```

DELETE http://localhost:3001/products/37

Response Body
```json
{
    "message": "Product succesfully removed!"
}
```
