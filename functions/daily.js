function random(seed) {
  var x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function daysSinceEpoch() {
  const secondsInADay = 1000 * 60 * 60 * 24
  const now = new Date()
  return Math.floor(
    (now.valueOf() - minutesToMilliseconds(now.getTimezoneOffset())) / secondsInADay
  )
}

function minutesToMilliseconds(minutes) {
  return minutes * 1000 * 60
}

const potentialChickens = [
  "lindsay",
  "riley",
  "rabidcarrot",
  "gstamp",
  "lucas",
  "khayman",
  "asellitt",
  "kelle",
  "damien.adermann",
  "claire.grooby",
  "prasanna",
  "stacey",
  "bakes",
  "riana.ferreira",
  "mario",
  "oliver.diestel",
  "daniel.budden",
  "bordo",
  "ben.vilnis",
  "grant.tibbey",
  "stevehodgkiss",
  "Ali Graham",
  "amanda",
  "tanya.fonina"
]

exports.handler = function(event, context, callback) {
  var seed = daysSinceEpoch()

  const chickens = potentialChickens
    .map(x => [random(seed++), x])
    .sort(([a, _a], [b, _b]) => (a > b ? 1 : -1))
    .map(([_, x]) => x)
    .slice(0, 5)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ chickens }, null, 2)
  })
}
