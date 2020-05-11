var unirest = require('unirest');

unirest.post('https://www.my-api.tk/vkn.php')

    .header('Accept', 'application/json')
    .send({ 
        "vkn": "1010774892",
        "vd": "KÜÇÜKÇEKMECE VD." 
    })

    .end(function (response) {
        console.log(response.body);
    }
);