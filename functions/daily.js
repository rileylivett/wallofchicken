const getChickens = require("./utils/getChickens")

exports.handler = function(event, context, callback) {
  const chickens = getChickens()
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ chickens }, null, 2)
  })
}
