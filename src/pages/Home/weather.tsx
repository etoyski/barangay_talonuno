const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode',
  params: {zip: '94111'},
  headers: {
    'X-RapidAPI-Key': '144c2c4729mshf9d8eac19730591p1ce751jsn00f27a0c1e16',
    'X-RapidAPI-Host': 'us-weather-by-zip-code.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default options;