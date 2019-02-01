const button = document.querySelector('#button');

function loadData(e) {  
  // Create an XHR object
  const xhr = new XMLHttpRequest();
  
  // Open
  xhr.open('GET', 'data.txt', true);
  
  xhr.onprogress = function() {
    console.log(xhr.readyState);
    
  }

  xhr.onload = function() {    
    if (this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function() {
    console.log('Request error...');
    
  }

  xhr.send();
}

button.addEventListener('click', loadData);