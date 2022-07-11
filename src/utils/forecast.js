const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e92e9cc02ac9f8ceb98a9bfb628aeefb&query=' + latitude + ',' + longitude + '&units=m';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out.' + 'The wind speed is about ' + body.current.wind_speed + ' m/s.' + ' Humidity: ' + body.current.humidity + ' % '  +
             ' and visibility is about: ' + body.current.visibility)
            console.log(body.current)


        }


    })
}

module.exports = forecast;