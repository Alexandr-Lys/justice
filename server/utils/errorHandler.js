module.exports = (res, error) => {
  console.log(res)
  res.status(500).json({
    success: false,
    message: error.message ? error.message : error
  })
}
