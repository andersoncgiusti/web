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

# Instale as dependĂȘncias
npm install

# Run project 
npm start or node server.js

# Run project test
npm test 
```
 #### Create account MongoDB free
```sh
https://www.mongodb.com/
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
## Project comportament

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

## Example of response 
#### Method GET /api/status/status()
```sh
{
    "author": "Anderson Giusti"
}
```
#### Method GET /api/books/booksGetUrl()
```sh
{
    "message": "Consulting books with successfully!",
    "books": [
        {
            "_id": "636935bca457f6f4a80a63ee",
            "link_image": "http://books.toscrape.com/media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg",
            "link_catalogue": "http://books.toscrape.coma-light-in-the-attic_1000/index.html",
            "created_at": "2022-11-07T16:43:40.096Z",
            "__v": 0
        },
    ]
}
```
#### Method GET /api/books/books_status()
```sh
{
    "success": true
}
```
#### Method GET /api/pilots/pilotsGetUrl()
```sh
{
    "message": "Consulting pilots with successfully!",
    "pilots": [
        {
            "_id": "636935a6a457f6f4a80a63c2",
            "photo": "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
            "link": "https://www.formula1.com/en/drivers/max-verstappen.html",
            "created_at": "2022-11-07T16:43:18.308Z",
            "__v": 0
        },
    ]
}
```
#### Method GET /api/books/pilots_status()
```sh
{
    "success": true
}
```
## Architecture

#### server.js
> Node.js server, used the routes, converted the data to Json and made connection with db.

#### .env
> Managed the MongoDb configuration environment variable.

#### đ src

#### đ routes
> Created the routes only with the responsibility of the HTTP methods.

#### đ controllers
> Created the logic and saved the db information.

#### đ model
> Modeled the data schema for the bank.

#### đ test
> Unit test.

<br>

```
 đ web
   |
   |-  đ src
   |    |   |
   |    |- đ controllers
   |         |- đ books.controller.js
   |         |- đ pilots.controler.js
   |         |- đ status.controler.js
   |
   |    |- đ models
   |         |- đ books.model.js
   |         |- đ pilots.model.js
   |
   |    |- đ routes
   |         |- đ books.router.js 
   |         |- đ pilots.router.js 
   |         |- đ status.router.js 
   |       |- đ app.js 
   |-  đ test
   |     |- đ books.test.js
   |     |- đ pilots.test.js
   |     |- đ server.test.js
   |     |- đ status.test.js
   |
   |- đ .dockerignore
   |- đ .env
   |- đ .env.example
   |- đ .gitignore
   |- đ Dockerfile
   |- đ jest.config.js
   |- đ package
   |- đ server.js
   ```
 ## Cloud
 #### Create account IBM Cloud free
```sh
https://cloud.ibm.com/login 
```
## Kubernets
```sh
With plan lite in IBM Cloud, create cluster free for 30 days
```
## Container Registry
#### Create a container registry following docs
```sh
https://cloud.ibm.com/registry/start
```
## Configure Cluster via CLI
```sh
ibmcloud login -a cloud.ibm.com -r eu-de -g Default
```
```sh
ibmcloud ks cluster config --cluster cdkg45mf0fj1ue2md1d0
```
```sh
kubectl config current-context
```
## Resources installed link whith image
```sh
https://drive.google.com/file/d/1BmMPf2zim1oBbigiyChXKX4KlEAg1gt2/view
```
```sh
https://drive.google.com/file/d/1xywLhRlwi6zhy8F-KpPnxHDyUTcIMCuu/view?usp=share_link
```
## Build project
#### Generate image installing all packages and dependencies: example
```sh
docker built -t br.icr.io/<my_namespace>/<my_repository>:<my_tag> .
```
#### Sending image to repository: example
```sh
docker push br.icr.io/<my_namespace>/<my_repository>:<my_tag>
```
#### Project runnig in cluster
```sh
https://drive.google.com/file/d/1W_t8NoMHIBJmlXMjb5CZufQzukBs9CM7/view?usp=share_link
```