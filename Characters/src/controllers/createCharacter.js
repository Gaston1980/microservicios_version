//const Character = require("../data")
const {response} = require("../utils")
const axios = require('axios');
/*
module.exports = async(req,res) => {
    const newCharacter = await Character.create()
    response(res,201,newCharacter)
}*/

module.exports = async (req,res) => {
    const character = req.body
    const result = await axios.post("http://database:8004/Character",character)
    console.log(result.data)
    response(res,201,result.data)
    }