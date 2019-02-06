const form = document.querySelector('.form')
// const name = document.querySelector('#name');
// const zip = document.querySelector('#zip');
// const email = document.querySelector('#email');
// const phone = document.querySelector('#phone');

function validateEntry(e) {
  if (e.target.id === 'name') {
    const reName = /^[a-zA-Z]{2,10}$/;
    if (!reName.test(e.target.value)) {
      e.target.classList.add('is-invalid');
    } else {
      e.target.classList.remove('is-invalid');
    }
  } else if (e.target.id === 'zip') {
    const reZip = /^[0-9]{5}(-[0-9]{4})?$/;
    if (!reZip.test(e.target.value)) {
      e.target.classList.add('is-invalid');
    } else {
      e.target.classList.remove('is-invalid');
    }
  } else if (e.target.id === 'email') {
    const reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!reEmail.test(e.target.value)) {
      e.target.classList.add('is-invalid');
    } else {
      e.target.classList.remove('is-invalid');
    }
  } else if (e.target.id === 'phone') {
    const rePhone = /^(\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/;
    if (!rePhone.test(e.target.value)) {
      e.target.classList.add('is-invalid');
    } else {
      e.target.classList.remove('is-invalid');
    }
  }
   
}


form.addEventListener('blur', validateEntry, true);