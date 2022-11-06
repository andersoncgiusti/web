const PILOTS = require('../models/pilots.model');
const cheerio = require('cheerio');
const fetch = require('node-fetch');

module.exports = {
    pilots_status: (req, res) => {
        res.json({ success: true })
    },  
    pilotsPostUrl: async (req , res) => {

        const url = 'https://www.formula1.com/en/drivers.html';

        try {
            const response = await fetch(url);
            console.log('URL Running...' + url);
      
            const body = await response.text();
            const $ = cheerio.load(body);

            const items = [];    

            $('.listing-items--wrapper > .row > .col-12').map((i, el) => {   

                const photo = $(el).find('.listing-item--photo img').attr('data-src');
                const link_image = $(el).find('.listing-item--link').attr('href');
                const URL_BASE = 'https://www.formula1.com';
                const link = `${URL_BASE}${link_image}`;            

                items.push({
                    photo,
                    link
                });            
            });

            // test save for get
            // const pilots = {
            //     "photo": "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
            //     "link": "https://www.formula1.com/en/drivers/max-verstappen.html"
            // }

            await PILOTS.create(items)
            .then(getBody => {
                res.status(200).json({ 
                    message: 'Saved get with successfully!',
                    pilotsGetAll: getBody
                })
            }); 

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },  
    pilotsGetUrl: async (req , res) => {
        try {
            const pilots = await PILOTS.find();

            res.status(200).json({
                message: 'Consulting pilots with successfully!',
                pilots: pilots
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}