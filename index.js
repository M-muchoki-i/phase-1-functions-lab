// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation -42)
}

function distanceFromHqInFeet(pickupLocation){
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}
function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(endBlock - startBlock) * 264;
}
function calculatesFarePrice(startBlock, endBlock) {
  const feet = distanceTravelledInFeet(startBlock, endBlock);

  if (feet <= 400) return 0;
  if (feet <= 2000) return (feet - 400) * 0.02;
  if (feet <= 2500) return 25;
  return "cannot travel that far";
}
