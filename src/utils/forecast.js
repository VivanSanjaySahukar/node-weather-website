const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=f349beadccb000130a15d1c76d80f082&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, { body }) => {          //body is destructured from response.body and url: url, is shorthanded to url, 
        if (error) {
            callback('Unable to connect to weatheer service.',undefined)
        }else if (body.error) {
            callback('unable to find location.',undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' deegrees out. It feels like ' + body.current.feelslike + ' degrees out. ' )
        } 
        
    })
}

module.exports = forecast