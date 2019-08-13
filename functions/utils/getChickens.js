const seedrandom = require("seedrandom")

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
  { id: "lindsay", name: "lindsay" },
  { id: "riley", name: "riley" },
  { id: "rabidcarrot", name: "rabidcarrot" },
  { id: "gstamp", name: "gstamp" },
  { id: "lucas", name: "lucas" },
  { id: "khayman", name: "khayman" },
  { id: "asellitt", name: "asellitt" },
  { id: "kelle", name: "kelle" },
  { id: "damien.adermann", name: "damien.adermann" },
  { id: "claire.grooby", name: "claire.grooby" },
  { id: "prasanna", name: "prasanna" },
  { id: "stacey", name: "stacey" },
  { id: "bakes", name: "bakes" },
  { id: "riana.ferreira", name: "riana.ferreira" },
  { id: "mario", name: "mario" },
  { id: "oliver.diestel", name: "oliver.diestel" },
  { id: "daniel.budden", name: "daniel.budden" },
  { id: "bordo", name: "bordo" },
  { id: "ben.vilnis", name: "ben.vilnis" },
  { id: "grant.tibbey", name: "grant.tibbey" },
  { id: "stevehodgkiss", name: "stevehodgkiss" },
  { id: "Ali Graham", name: "Ali Graham" },
  { id: "amanda", name: "amanda" },
  { id: "tanya.fonina", name: "tanya.fonina" }
]

function getChickens(day) {
  const seed = daysSinceEpoch(day)
  const rng = seedrandom(seed)

  return potentialChickens
    .map(x => [rng(), x])
    .sort(([a, _a], [b, _b]) => (a > b ? 1 : -1))
    .map(([_, x]) => x)
    .reverse()
    .slice(0, 5)
}

module.exports = getChickens
