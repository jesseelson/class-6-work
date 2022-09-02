let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"? Should say Pete 
        //because the name = "Pete": is changed from John before its exicuted