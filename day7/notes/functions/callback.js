function foo(bar) {
  bar(); // cb
}

foo(function () {
  console.log("bar");
});
// a function takes another function as argument
// anonymous function => function does not have a name

function foo(bar) {
  if (itsNight) {
    bar();
  }
  if (isDinksOver) {
    bar();
  }
}
