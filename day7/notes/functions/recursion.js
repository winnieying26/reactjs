function foo() {
  console.log("foo");
  foo();
}

// a function is invoking itself

const foo = function buz() {
  foo(); // buz()
};

// recursion
// base condition

function recurse() {
  if (base_condition) {
    //do something
    return;
  }
  recurse();
}

function fetchWater(){
    if(count === 0){
        console.log("No more water left")
        return;
    }
    console.log("Keep fetching water...")
    fetchWater(count-1);
}

fetchWater(5)
