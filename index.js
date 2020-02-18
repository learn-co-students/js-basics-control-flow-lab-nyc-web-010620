function scuberGreetingForFeet(feet){
  // Write your code here!
  let response;
  if (feet < 400) {
    response = 'This one is on me!';
  } else if (feet > 2500) {
    response = 'No can do.';
  } else if (feet >= 2000) {
    response = 'I will gladly take your thirty bucks.';
  };
  return response;
}

function ternaryCheckCity(destination){
  // Write your code here!
  let response;
  destination === "NYC" ? (response = "Ok, sounds good.") : (response = "No go.");
  return response
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!

  switch(tipAmount) {
  case "generous":
    return "Thank you so much."
  case "not as generous":
    return "Thank you."
  default:
    return "Bye."
  }
}