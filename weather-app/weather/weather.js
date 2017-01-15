const request = require('request');

var getWeather = (lat, lng, callback) => {
  request.get({
    url: `https://api.darksky.net/forecast/c146faa2bcb370c6987d39f4ca4afb42/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server');
    } else if (response.statusCode === 404) {
      callback('Unable for fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports = {
  getWeather,
}
