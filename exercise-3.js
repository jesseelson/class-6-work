function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // ? should print out 0 then 1 because even though
  alert( counter2() ); // ? there are 2 var they har calling the same function
  