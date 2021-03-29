const CustomError = require('../extensions/custom-error')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(sampleActivity) {
  let a
  if (
    typeof sampleActivity === 'string' &&
    typeof +sampleActivity === 'number' &&
    sampleActivity > 0
  ) {
    a = Math.ceil(
      (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / 0.693,
    )
    if (a > 0) {
      return a
    } else {
      return false
    }
  } else {
    return false
  }
}
