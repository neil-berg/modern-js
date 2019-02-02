async function getUsers() {
  // wait for the fetch call
  const response = await fetch('https://api.github.com/users');
  // wait for the response to resolve/change to json
  const data = await response.json();
  return data;
}

function sortUsers(users) {
  return users.sort(function(a,b) {
    if (a.login.toUpperCase() < b.login.toUpperCase()) {
      return -1;
    } else {
      return 1;
    }
  });
}

function displayUsers(users) {  
  const html = users.map(user => `<li>${user.login}</li>`).join('');
  document.body.innerHTML = html;
}

getUsers()
  .then(users => displayUsers(sortUsers(users)));

// getUsers().then(users => displayUsers(users));

