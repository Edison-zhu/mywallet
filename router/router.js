let router = require("koa-router")()
let newAccountController = require("../controllers/newAccount")
let trasactionConytoller = require("../controllers/transaction")
let accountController = require("../controllers/account")
let tokenController = require("../controllers/token")


// router.get("/", async (ctx) => {
//     //重定向
//     ctx.response.redirect("/account/new.html")
// })



//获取首页信息
router.get("/",trasactionConytoller.homeHtml)
//获取创建钱包账户的页面
router.get("/account/new.html", newAccountController.newAccountHtml)
//提交创建钱包账户的表单
router.post("/account/new", newAccountController.newAccount)

//获取转账的页面
router.get("/transaction.html", trasactionConytoller.transactionHtml)
//发送转账交易
router.post("/transaction/send", trasactionConytoller.sendTransaction)

//通过私钥解锁账户
router.post("/unlock/private", accountController.unlockAccountWithPrivate)
//通过keystore解锁账户
router.post("/unlock/keystore", accountController.unlockAccountWithKeystore)
//通过助记词解锁账户
router.post("/unlock/mnemonic", accountController.unlockAccountWithMnemonic)

//Token转账
router.post("/token/send", tokenController.sendTokenTransaction)

//获取查询交易页面
router.get("/queryTransaction.html",trasactionConytoller.queryTransactionHtml)
router.post("/queryTransaction",trasactionConytoller.queryTransaction)

//获取代币空投页面
router.get("/airdrop.html",trasactionConytoller.airdropHtml)

module.exports = router