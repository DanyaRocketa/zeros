module.exports = function getZerosCount(number) {
  let fiveIterations = Math.floor(number/5);
  let answer = fiveIterations;
  let additionalFives = 0;
  if(fiveIterations >= 5){
    while(Math.floor(fiveIterations/5) > 0){
      additionalFives += Math.floor(fiveIterations / 5);
      fiveIterations = Math.floor(fiveIterations / 5);
    }
  }
  answer += additionalFives; 
  return answer;
}
