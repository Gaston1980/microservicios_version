//const Film = require("../data")
const {response} = require("../utils")
const axios = require('axios');


module.exports = async (req,res) => {
    const result = await axios.get("http://database:8004/Film")
    console.log(result.data)
    response(res,200,result.data)
    }