const scriptURL = 'https://script.google.com/macros/s/AKfycbzinTJe1EqZIAsgSkdI5mmu4A2mCOESEsb5E0Id-sh589_T1AaBFoblZDoZMqAetrWg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})