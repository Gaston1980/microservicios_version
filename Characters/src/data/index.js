const characters = require("./characters.json")//me lo convierte en objeto

module.exports = {
    list: async () => {
        return characters;
    },
    create: async () => {
    throw Error("No se pudo crear. Aun no existe Base de Datos")//completar cuando haya DB
    } 
}