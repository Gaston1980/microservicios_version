const {response} = require("../utils")
const axios = require('axios');

module.exports = async (req,res) => {
    const updates = req.body
    console.log(updates)
    const result = await axios.put("http://database:8004/Planet",updates)
    console.log(result.data)
    response(res,200,result.data)
    }