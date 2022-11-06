# web

> Project from collecting tags of links.
## Executing
```sh
# Clone repository
git clone 

# Access file
cd web

# Copy the .env.example file and put the correct environment variables in the .env
cp .env.example .env

# Instale as dependências
npm install

# Run project 
npm start or node server.js

# Run project test
npm test 
```

## Components
```sh
# Database
MongoDB

# Librarys used
- @types/jest
- cheerio
- dotenv
- express
- jest
- mongoose
- node-fetch
- supertest

```
# Project comportament

Endpoint generic: http://localhost:3000/

| Method | Description |
| --- | --- |
| `/api/status/status()` | Test the status from project |
| `/api/status/status_test()` | To test in unit test |
| `/api/books/books_status()` | Test the status from route |
| `/api/books/booksPostUrl()` | Get the link: http://books.toscrape.com/catalogue/page-1.html and save it to the database |
| `/api/books/booksGetUrl()` | Search all data saved in the database |
| `/api/pilots/pilots_status()` | Test the status from route |
| `/api/pilots/pilotsPostUrl()` | Get the link: https://www.formula1.com/en/drivers.html and save it to the database |
| `/api/pilots/pilotsGetUrl()` | Search all data saved in the database |
```
```
### Architecture

#### Server.js
> Node.js server, used the routes, converted the data to Json and made connection with db.

#### .env
> Managed the MongoDb configuration environment variable.

#### 📂 SRC

#### 📂 Routes
> Created the routes only with the responsibility of the HTTP methods.

#### 📂 Controllers
> Created the logic and saved the db information.

#### 📂 Model
> Modeled the data schema for the bank.

#### 📂 Test
> Unit test.
```
```
<br>

```
 📁 web
   |
   |-  📁 src
   |    |   |
   |    |- 📁 controllers
   |         |- 📄 books.controller.js
   |         |- 📄 pilots.controler.js
   |         |- 📄 status.controler.js
   |
   |    |- 📁 models
   |         |- 📄 books.model.js
   |         |- 📄 pilots.model.js
   |
   |    |- 📁 routes
   |         |- 📄 books.router.js 
   |         |- 📄 pilots.router.js 
   |         |- 📄 status.router.js 
   |       |- 📄 app.js 
   |-  📁 test
   |     |- 📄 books.test.js
   |     |- 📄 pilots.test.js
   |     |- 📄 server.test.js
   |     |- 📄 status.test.js
   |
   |- 📄 .dockerignore
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 Dockerfile
   |- 📄 jest.config.js
   |- 📄 package
   |- 📄 server.js
   ```