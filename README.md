# Coders Camp 2021 | Project 3 | Node.Js - Server Side Javascript

&nbsp;

## Application Demo

Here you an check demo of our Application: [Scrooge App](https://expenses-app-frontend-63b9u.ondigitalocean.app/).

&nbsp;

## Table of contents

- [Project Team](#project-team)
- [Application](#application)
- [Routes](#routes)
- [Technologies](#technologies)
- [Setup](#setup)
- [Deployment](#deployment)
- [Status](#status)

&nbsp;

## Project Team

The Project was created as a part of [CodersCamp](https://CodersCamp.pl) initiative by participants of the course, supervised by a mentor.
We encourage you to familiarize yourself with team members' profiles and their portfolio:

**Mentor**: [Michał Ciborowski](https://github.com/Cidebur)

**Participants of Coders Camp course:**

- [Barbara Korytkowska](https://github.com/korytba)
- [Magda Zaniewska-Ciecierska](https://github.com/FrontendMagdalena)
- [Michał Kowalczyk](https://github.com/michakow)
- [Roman Pavlenko](https://github.com/rpavlenko)
- [Zuzanna Wypych](https://github.com/zwypych)

&nbsp;

As a part of the project team members have been assigned to additional roles:
&nbsp;

| Name                | Role in the Project |
| ------------------- | ------------------- |
| Barbara Korytkowska | Product Owner       |
| Zuzanna Wypych      | Project Manager     |
| Roman Pavlenko      | Tech Lead           |
| Michał Ciborowski   | Client              |

&nbsp;

## Application

### About Project

"Scrooge" is a budget Web application developed with the idea to help potential users make the best decisions with their money. Main purpose of this project is to setup backend for Application created in previous project.

&nbsp;

## Routes

### Users

Model:

|   Parameter   | Required |             Type              |
| :-----------: | :------: | :---------------------------: |
|     email     | required |            string             |
|   password    | required |            string             |
| categoriesID  | optional | mongoose.SchemaTypes.ObjectId |
|   isActive    | required |            boolean            |
|   CreatedAt   | required |             date              |
| ModificatedAt | optional |             date              |

`/api/v1/users`

|           Route           | Method | Authentication token needed? |
| :-----------------------: | :----: | :--------------------------: |
|       /users/login        |  POST  |                              |
|      /users/register      |  POST  |                              |
|       /users/verify       |  POST  |                              |
|          /users/          | PATCH  |                              |
|   /users/reset-password   |  POST  |                              |
| /users/reset-password/:id |  POST  |                              |

### Categories

Model:

| Parameter | Required |                        Type                         |
| :-------: | :------: | :-------------------------------------------------: |
|   user    | required | mongoose.Schema.Types.ObjectId<br>(Ref to the User) |
|   name    | required |                       string                        |
|   limit   | optional |                       number                        |

`/api/v1/categories`
`/api/v1/categories/:id`

|      Route      | Method | Authentication token needed? |
| :-------------: | :----: | :--------------------------: |
|  /categories/   |  GET   |             yes              |
| /categories/:id |  GET   |             yes              |
|  /categories/   |  POST  |             yes              |
| /categories/:id | DELETE |             yes              |
| /categories/:id | PATCH  |             yes              |

### Transactions

Model:

| Parameter | Required |                        Type                         |
| :-------: | :------: | :-------------------------------------------------: |
|  userID   | required | mongoose.Schema.Types.ObjectId<br>(Ref to the User) |
| category  | required |                       string                        |
|   title   | required |                       string                        |
|  amount   | required |                       number                        |
|   type    | required |                       string                        |
|   date    | required |                        date                         |

`/api/v1/users`
`/api/v1/users/:id`

|      Route      | Method | Authentication token needed? |
| :-------------: | :----: | :--------------------------: |
|  /categories/   |  GET   |             yes              |
| /categories/:id |  GET   |             yes              |
|  /categories/   |  POST  |             yes              |
|  /categories/   | DELETE |             yes              |
| /categories/:id | PATCH  |             yes              |

### Balance

`/api/v1/balance`

|   Route   | Method | Authentication token needed? |
| :-------: | :----: | :--------------------------: |
| /balance/ |  GET   |             yes              |

## Technologies

**Technologies used in Project**:

- Node.js: Express, mongoose, nodemon, cors, jsonwebtoken, bcrypt, nodemailer
- React: Create React App, Router, Hooks, PropTypes
- Axios
- MongoDB Atlas
- Postman / Advanced REST client (Google Chrome tool)
- Prettier
- Eslint

## Setup

To run this project, install it locally on your machine using npm:

```
$ cd ../
$ npm install
$ npm start
```

Application will launch on [http://localhost:3000](http://localhost:3000/) in your browser.
