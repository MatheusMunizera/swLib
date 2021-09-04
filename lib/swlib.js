const got = require('got');


const BASE_URL = 'https://matheusmunizera.github.io/swAPI/api/';



 const makeRequest = async (url) => {
  const response = await got(url).json()
  return response
 }






module.exports = {

  async getAllCharacters() {
    return await makeRequest(`${BASE_URL}allCharacters.json`)
  },
  getAllVehicles() {
    return makeRequest(`${BASE_URL}allVehicles.json`);
  },
  getAllSpecies() {
    return makeRequest(`${BASE_URL}allSpecies.json`);
  },
  getAllFilms() {
    return makeRequest(`${BASE_URL}allFilms.json`);
  },
  getAllSeries() {
    return makeRequest(`${BASE_URL}allSeries.json`);
  },
  getAllPlanets() {
    return makeRequest(`${BASE_URL}allPlanets.json`);
  },


  /// Get 
  getCharacter(id) {
    return makeRequest(`${BASE_URL}characters/${id}.json`)
  },
  getVehicle(id) {
    return makeRequest(`${BASE_URL}vehicles/${id}.json`);
  },
  getFilm(id) {
    return makeRequest(`${BASE_URL}films/${id}.json`);
  },
  getSerie(id) {
    return makeRequest(`${BASE_URL}series/${id}.json`);
  },
  getSpecie(id) {
    return makeRequest(`${BASE_URL}species/${id}.json`);
  },
  getPlanet(id) {
    return makeRequest(`${BASE_URL}planets/${id}.json`);
  }
};