module.exports = {
    getweb3: () => {
        var Web3 = require("web3")
        var web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

       // console.log(web3.eth.accounts)
        console.log('调用工具类')
        return web3
    },

    success: (data) => {
        responseData = {
            code:0,
            status:"success",
            data:data
        }
        return responseData
    },

    fail: (msg) => {
        responseData = {
            code:1,
            status:"fail",
            msg:msg
        }
        return responseData

    }


}