function random(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const SECONDS_IN_A_DAY = 1000 * 60 * 60 * 24
const AU_TIMEZONE_OFFSET_MILLISECONDS = -10 * 60 * 60 * 1000

function daysSinceEpoch() {
  const now = Date.now()
  return Math.floor((now - AU_TIMEZONE_OFFSET_MILLISECONDS) / SECONDS_IN_A_DAY)
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
  const now = new Date()

  let seed = daysSinceEpoch()

  const chickens = potentialChickens
    .map(x => [random(seed++), x])
    .sort(([a, _a], [b, _b]) => (a > b ? 1 : -1))
    .map(([_, x]) => x)
    .reverse()
    .slice(0, 5)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ chickens }, null, 2)
  })
}
