/*
Easy HTTP Library
Library for making HTTP requests

@version 3.0.0
@author Neil Berg
*/

class EasyHTTP {
  // Make an HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data; 
  }

  // Make an HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    const resData = await response.json();
    return resData; 
  }

  // Make an HTTP PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP DELETE request
  async delete(url) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        }
      })
    const resData = await 'Resouce deleted';
    return resData;
  }
}