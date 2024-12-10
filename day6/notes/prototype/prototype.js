function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  //this.login = function(){
  // console.log(`${this.email} has logged in` )
  // }
}

User.prototype.login = function () {
  this.online = true;
  console.log(`${this.email} has logged in`);
};

User.prototype.logout = function () {
  this.online = false;
  console.log(`${this.email} has logged out`);
};
const userOne = new User("123456@gmail.com", "Yun");
const userTwo = new User("290739@gmail.com", "June");
console.log(userOne);
userTwo.login();
userTwo.logout();
userOne.login();
userOne.logout();
