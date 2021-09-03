'use strict';

const request = require('request');

const BASE_URL = 'https://matheusmunizera.github.io/swAPI/api/';
//
function makeRequest(url){

  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error || response.statusCode > 399) {
        return reject(new Error(response.statusCode));
      }

      let jsonBody;

      try {
        jsonBody = JSON.parse(body);
      } catch {
        return reject(new Error('JSON parse error'));
      }

      return resolve(jsonBody);
    })
  
  });
  
}




module.exports = {

  getCharacters (id) {
    return makeRequest(`characters/${id}.json`  );
  },
  getVehicle (id) {
    return makeRequest(`vehicles/${id}.json`  );
  },
  getFilm (id) {
    return makeRequest(`films/${id}.json`  );
  },
  getSeries (id) {
    return makeRequest(`series/${id}.json`  );
  },
  getSpecies (id) {
    return makeRequest(`species/${id}.json`  );
  },
  getPlanets (id) {
    return makeRequest(`planets/${id}.json`  );
  }
};