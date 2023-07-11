const films = require("./films.json")//me lo convierte en objeto

module.exports = {
    list : async () => {
        return films;
    }
}