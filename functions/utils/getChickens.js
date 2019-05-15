function random(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24
const AU_TIMEZONE_OFFSET_MILLISECONDS = -10 * 60 * 60 * 1000

function daysSinceEpoch(day) {
  const now = new Date()
  const daysSinceEpoch = Math.floor(
    (now.getTime() - AU_TIMEZONE_OFFSET_MILLISECONDS) / MILLISECONDS_IN_A_DAY
  )
  const epochDayOfTheWeek = (daysSinceEpoch - 3) % 7
  const movement = day ? (7 + day - epochDayOfTheWeek) % 7 : 0
  return daysSinceEpoch + movement
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
