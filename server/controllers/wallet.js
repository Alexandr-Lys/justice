const Wallet = require('../models/Wallet')
const errorHandler = require('../utils/errorHandler')

module.exports.getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.find({
      user: req.params.id,
    })
    res.status(200).json(wallet)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async (req, res) => {
  const currency = await Wallet.findOne({
    currencyName: req.body.currencyName,
    user: req.params.id,
  })
  try {
    if(currency){
      let amountValue
      if(req.body.operation === 1) {
        amountValue = req.body.amount + currency.amount
      } else {
        amountValue = currency.amount - req.body.amount
      }
      const updated = {
        amount: amountValue,
        currencyName: req.body.currencyName,
        user: req.body.userId,
      }
      const wallet = await Wallet.findOneAndUpdate(
        { user: req.params.id, currencyName: req.body.currencyName },
        {$set: updated},
        {new: true}
      )
      res.status(200).json(wallet)
    } else {
      const wallet = await new Wallet({
        amount: req.body.amount,
        currencyName: req.body.currencyName,
        user: req.body.userId,
      }).save()
      res.status(201).json(wallet)
    }
  } catch (e) {
    errorHandler(res, e)
  }
}
