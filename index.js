function scuberGreetingForFeet(someValue){
  // someValue< 2500;
  let result
  if (someValue<400){
    result = "This one is on me!";
  } else if (someValue > 2000 && someValue < 2500){ 
    result = "I will gladly take your thirty bucks.";
  }
   else {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city){
  let response;
  return city ==='NYC'? response  = "Ok, sounds good." : response  = "No go."
}


function switchOnCharmFromTip(tip){
  var answer;
  switch (tip){
    case 'generous':
      answer = 'Thank you so much.';
      break;
    case 'not as generous':
      answer = "Thank you."
      break;
    default:
      answer = "Bye."
  }
  return answer;
}