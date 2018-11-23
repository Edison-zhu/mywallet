let web3 = require("../utils/myUtils").getweb3();

module.exports = {
    airdropHtml: async (ctx) => {
        await ctx.render("airdrop.html")
    }
}