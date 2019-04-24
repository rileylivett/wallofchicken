function random(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const SECONDS_IN_A_DAY = 1000 * 60 * 60 * 24
const AU_TIMEZONE_OFFSET_MILLISECONDS = -10 * 60 * 60 * 1000

function getNextDayOfWeek(day) {
  const date = new Date()
  date.setDate(date.getDate() + ((7 + day - date.getDay()) % 7))
  return date.getTime()
}

function daysSinceEpoch(day) {
  const now = day ? getNextDayOfWeek(day) : Date.now()
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

function getChickens(day) {
  let seed = daysSinceEpoch(day)
  return potentialChickens
    .map(x => [random(seed++), x])
    .sort(([a, _a], [b, _b]) => (a > b ? 1 : -1))
    .map(([_, x]) => x)
    .reverse()
    .slice(0, 5)
}

module.exports = getChickens
