const BOOKS = require('../models/books.model');
const cheerio = require('cheerio');
const fetch = require('node-fetch');

module.exports = { 
    books_status: (req, res) => {
        res.json({ success: true })
    },   
    booksPostUrl: async (req , res) => {
        try {
          
            const URL_BASE = 'http://books.toscrape.com';
            const string_catalogue = '/catalogue/page-1.html';
            const url_catalogue = `${URL_BASE}${string_catalogue}`;

            const response = await fetch(url_catalogue);

            console.log('URL Running...', url_catalogue);

            const body = await response.text();
            const $ = cheerio.load(body);
            const items = [];    
        
            $('article').map((i, el) => {      
            
                const photo = $(el).find('.image_container a img').attr('src');
                const img = photo.slice(2);
                const link = $(el).find('h3 a').attr('href');
                const link_catalogue = `${URL_BASE}${link}`;
                const link_image = `${URL_BASE}${img}`;
                
                items.push({
                link_image,
                link_catalogue
                });
                
            });

            // test save for get
            // const books = {
            //     'link_image': 'http://books.toscrape.com/media/cache/1b/5f/1b5ff86f3c75e51e24c573d3f8bffd8f.jpg',
            //     'link_catalogue': 'http://books.toscrape.coma-spys-devotion-the-regency-spies-of-london-1_3/index.html'
            // }

            await BOOKS.create(items)
            .then(getBody => {
                res.status(200).json({ 
                    message: 'Saved get with successfully!',
                    booksGetAll: getBody
                })
            }); 

            // method to scroll through all pages
            // for (let i = 1; i < 10; i++) {
       
            //     const URL_BASE = 'http://books.toscrape.com';
            //     const string_catalogue = '/catalogue/page-'+ `${i}` +'.html';
            //     const url_catalogue = `${URL_BASE}${string_catalogue}`;
        
            //     const response = await fetch(url_catalogue);
            //     console.log('URL Running...', url_catalogue);
        
            //     const body = await response.text();
            //     const $ = cheerio.load(body);
            //     const items = [];    
            
            //     $('article').map((i, el) => {      
              
            //       const photo = $(el).find('.image_container a img').attr('src');
            //       const img = photo.slice(2);
            //       const link = $(el).find('h3 a').attr('href');
            //       const link_catalogue = `${URL_BASE}${link}`;
            //       const link_image = `${URL_BASE}${img}`;
                  
            //       items.push({
            //         link_image,
            //         link_catalogue
            //       });
                  
            //     });
        
            //     await BOOKS.create(items)
            //     .then(getBody => {
            //         res.status(200).json({ 
            //             message: 'Saved get with successfully!',
            //             booksGetAll: getBody
            //         })
            //     });        
            // }          
              
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    booksGetUrl: async (req , res) => {
        try {
            const books = await BOOKS.find();

            res.status(200).json({
                message: 'Consulting books with successfully!',
                books: books
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}