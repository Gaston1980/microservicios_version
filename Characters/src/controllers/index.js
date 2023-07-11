const {catchedAsync} = require("../utils");

module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacter: catchedAsync(require("./createCharacter")),
    getCharacter: catchedAsync(require("./getCharacter")),
    deleteCharacter: catchedAsync(require("./deleteCharacter")),
    updateCharacter: catchedAsync(require("./updateCharacter"))
}