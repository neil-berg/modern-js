button1 = document.querySelector('#button1');
button2 = document.querySelector('#button2');
button3 = document.querySelector('#button3');

function getText(e) {
  fetch('test.txt')
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    console.log(data);
    document.getElementById('output').innerHTML = data;
    })
  .catch(function(err) {
    console.log(err);
  })
}

function getJSON(e) {
  fetch('posts.json')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data);
      const output = data.map(function(item) {
        return `<li>${item.title}</li>`
      }).join('')
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    })
}

function getExternal(e) {
  fetch('https://api.github.com/users')
    .then(function(resolve) {
      return resolve.json();
    })
    .then(function(data) {
      console.log(data);
      const output = data.map(function(item) {
        return `<li>${item.login}</li>`
      }).join('');
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    })
}

button1.addEventListener('click', getText)
button2.addEventListener('click', getJSON)
button3.addEventListener('click', getExternal)