module.exports = {
    getweb3: () => {
         var Web3 = require("web3")
         var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/9d3389b641bb4385a0a1e6daedb963c2'));

         var a = web3.version;
        console.log('调用工具类',a)
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