const getChickens = require("./utils/getChickens")

exports.handler = function(event, context, callback) {
  const chickens = getChickens()
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(
      {
        chickens: chickens.map(chicken => chicken.name),
        chickenIds: chickens.map(chicken => chicken.id)
      },
      null,
      2
    )
  })
}
