function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show? It will show Pete because the function
        //remembers the let name = pete in the makeWorker function 