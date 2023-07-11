const planets = require("./planets.json")//me lo convierte en objeto

module.exports = {
    list : async () => {
        return planets;
    }
}