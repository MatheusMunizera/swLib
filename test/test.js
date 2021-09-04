const swlib = require('../lib/swlib');


//ByID
swlib.getCharacter(1).then((res)=> console.log(`Teste 1 -  Characeter: ${res.name}`))
swlib.getVehicle(1).then((res)=> console.log(`Teste 2 - Vehicle:  ${res.name}`))
swlib.getFilm(1).then((res)=> console.log(`Teste 3 - Film: ${res.name}`))
swlib.getSpecie(1).then((res)=> console.log(`Teste 4 - Specie: ${res.name}`))
swlib.getSerie(1).then((res)=> console.log(`Teste 5 - Serie: ${res.name}`))
swlib.getPlanet(1).then((res)=> console.log(`Teste 6 - Planet: ${res.name}`))


//All
 swlib.getAllCharacters().then(data => console.log(`Teste 7 - AllCharacters: ${data[0].name}`))
 swlib.getAllFilms().then(data => console.log(`Teste 8 - AllgetAllFilms: ${data[0].name}`))
 swlib.getAllSeries().then(data => console.log(`Teste 9 - AllgetAllSeries: ${data[0].name}`))
 swlib.getAllSpecies().then(data => console.log(`Teste 10 - AllgetAllSpecies: ${data[0].name}`))
 swlib.getAllVehicles().then(data => console.log(`Teste 11 - AllgetAllVehicles: ${data[0].name}`))
 swlib.getAllPlanets().then(data => console.log(`Teste 12 - AllPlanets: ${data[0].name}`))






  

  

 



