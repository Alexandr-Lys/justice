const History = require('../models/History')
const errorHandler = require('../utils/errorHandler')

const randomStatus = () => {
  const random = Number((Math.random()*100).toFixed(0))
  if(random<30){
    return 'Отклонено'
  }else if(random<60){
    return 'В обработке'
  }else{
    return 'Успешно'
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const history = await History.find({
      user: req.params.id,
    })
    res.status(200).json(history)
  } catch (e) {
    errorHandler(res, e)
  }
}
module.exports.create = async (req, res) => {
  try {
    const history = await new History({
      give: req.body.give,
      get: req.body.get,
      time: req.body.time,
      giveCurrency: req.body.giveCurrency,
      getCurrency: req.body.getCurrency,
      status: randomStatus(),
      user: req.body.userId,
    }).save()
    res.status(201).json(history)
  } catch (e) {
    errorHandler(res, e)
  }
}
