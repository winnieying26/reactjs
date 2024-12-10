async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const users = await res.json();
    return users; // Return the resolved user data
  } catch (error) {
    console.error("Failed to fetch users:", error.message);
    return []; // Return an empty array to handle failures gracefully
  }
}


async function getUsers() {
  const users = await fetchUsers();
  getUserNames(users);
}

function getUserNames(users) {
  const userNames = users.map((user) => user.name);
  console.log(userNames);
}

getUsers();