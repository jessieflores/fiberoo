
function fib(){

  let prev = 0;
  let curr = 1;
  let next = 1;
  let list = [prev, curr];

  for(let i = 0; i < 98; i++) {

    next = prev + curr;
    list.push(next);
    prev = curr;
    curr = next;

  }
  return list;

}

console.log(fib());


function numsToString(list) {

  return _.map(list, function(val) {return val.toString();});

}

console.log(numsToString(fib()));

function numEvenNums(list) {

  let total = 0;

  for(let i = 0; i < list.length; i++) {

    if(list[i] % 2 === 0) {
      total++;
    }

  }
  return total;

}

console.log(numEvenNums(fib()));