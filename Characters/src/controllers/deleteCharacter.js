const {response} = require("../utils")
const axios = require('axios');

module.exports = async (req,res) => {
    const {_id} = req.params;
    console.log("ID:",_id)
    const result = await axios.delete(`http://database:8004/Character/${_id}`)
    console.log(result.data)
    response(res,200,result.data)
    }