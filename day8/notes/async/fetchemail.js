async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
  }
  
  async function getUsers() {
    const users = await fetchUsers();
    getUserNames(users);
  }
  
  function getUserNames(users) {
    const userNames = users.map((user) => user.email);
    console.log(userNames);
  }
  
  getUsers();