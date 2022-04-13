// saturday fun - function declaration
function saturdayFun(activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun())

// monday work - function expression
const mondayWork = function(activity='go to the office'){
  return `This Monday, I will ${activity}.`
}
console.log(mondayWork())


// wrap adjective

let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}


