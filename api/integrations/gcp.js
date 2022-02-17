const axios = require('axios')

const getDistance = async (destination, origin) => {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination}&origins=${origin}&key=${process.env.MAP_API_KEY}`
    axios.get(url)
      .then(resp => {
        let data = resp.data.rows[0].elements[0].distance.text
        const dist = data.split(" ")
        return dist[0]
      })
      .catch(err => {
          console.error(err);
      }); 
  }
  
  module.exports = getDistance