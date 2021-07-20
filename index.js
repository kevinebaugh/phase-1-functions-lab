const hqBlock = 42
const blockLengthInFeet = 264
const pricePerFootInCents = 2

function distanceFromHqInBlocks(block) {
  return Math.abs(hqBlock - block)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * blockLengthInFeet
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(
    (block1 - block2) * blockLengthInFeet
  )
}

function calculatesFarePrice(block1, block2) {
  let fareDistance = distanceTravelledInFeet(block1, block2)
  if (fareDistance <= 400) {
    return 0
  } else if (fareDistance > 400 && fareDistance <= 2000) {
    return ((fareDistance - 400) * pricePerFootInCents) / 100
  } else if (fareDistance > 2000 && fareDistance < 2500){
    return 25
  } else {
    return 'cannot travel that far'
  }
}
