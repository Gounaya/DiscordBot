const Discord = require('discord.js');  // Call discord app 
const fetch = require('node-fetch');
const snekfetch = require('snekfetch');
const aj_api = 'https://www.asos.com/api/product/search/v2/categories/5775?brand=14269&channel=desktop-web&country=FR&currency=EUR&keyStoreDataversion=j42uv2x-26&lang=fr-FR&limit=72&offset=0&rowlength=4&store=FR';
const api = 'https://jsonplaceholder.typicode.com/posts';
var fs = require('fs');


module.exports.run = async (bot, message, args) => {
    var list_data = [];
    var list_data_history_data = [];
    var new_in = [];

    snekfetch.get(aj_api)
        .then(
            r => {

                let data_size = r.body.products.length;

                fs.writeFile('history.json', JSON.stringify(r.body.products, null, 2), (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    };
                    console.log("File has been created");
                });

                //switch data from json to a table
                for (let i = 0; i < data_size; i++) {

                    let item_data = {
                        id: r.body.products[i].id,
                        name: r.body.products[i].name,
                        url: 'https://www.asos.com/fr/' + r.body.products[i].url,
                        price: r.body.products[i].price.current.text,
                        imageUrl: r.body.products[i].imageUrl,
                        productCode: r.body.products[i].productCode,
                    }
                    list_data_history_data.push(r.body.products[i].productCode);
                    list_data.push(item_data);

                    console.log(list_data[i].price);
                    console.log("-----------------------");
                    console.log(r.body.products[i]);
                    console.log("-----------------------");

                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#0xF1C40F')  //0099ff
                        .setTitle(list_data[i].name)
                        .setURL(list_data[i].url)
                        .setThumbnail('https://i.imgur.com/5wXoCeQ.png')
                        .addField("Price: ", list_data[i].price)
                        //.setThumbnail(list_data[i].imageUrl)
                        .setAuthor('ASOS Tracker', 'https://static-pepper.dealabs.com/merchants/avatar_web_square_94/avatar/64_3.jpg', 'https://www.asos.com/fr/homme/')
                        .setTimestamp()
                        .setFooter('created by @Osmedge', 'https://pbs.twimg.com/media/D0HLKHKXcAE6Uqe?format=jpg&name=large');
                    message.channel.send(exampleEmbed);
                }

               

                //return list_data;

            }
        ).catch((error) => {
            console.log(error);
        });

};

module.exports.help = {
    name: 'json'
};

