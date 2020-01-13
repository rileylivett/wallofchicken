const getChickens = require("./utils/getChickens")

const TODAY = undefined

exports.handler = function(event, context, callback) {
  const { team } = event.queryStringParameters
  const chickens = getChickens(TODAY, team)
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
