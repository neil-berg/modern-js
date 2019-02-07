const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Baltimore MD',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnsomn',
    age: 38,
    gender: 'male',
    lookingfor: "female",
    location: 'Washington DC',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

// Profile iterator
// function profileIterator(profiles) {
  //   let nextIndex = 0;
  
  //   return {
    //     next: function() {
      //       return nextIndex < profiles.length
      //       ? {value: profiles[nextIndex++], done: false}
      //       : {done: true};
      //     }
      //   };
      // }
      
function* profileGenerator(data) {
  let index = 0;
  while (index < data.length) {
    yield data[index];
    index++;
  }
}

function nextProfile() {
  const currentProfile = profiles.next();
  
  if (!currentProfile.done) {
    const props = currentProfile.value;    
    document.querySelector('#profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${props.name}</li>
      <li class="list-group-item">Age: ${props.age}</li>
      <li class="list-group-item">Location: ${props.location}</li>
      <li class="list-group-item">Preference: ${props.gender} looking for ${props.lookingfor}</li>
    </ul>`
  
    document.getElementById('imageDisplay').innerHTML = `<img src="${props.image}">`;
  } else {
    window.location.reload();
  }
}

const btn = document.querySelector('#next');
btn.addEventListener('click', nextProfile);

// const profiles = profileIterator(data);
const profiles = profileGenerator(data);

// Call first profile
nextProfile();