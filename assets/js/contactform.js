const scriptURL = 'https://script.google.com/macros/s/AKfycbzOexuD00tdh0t5C-6NecypkAjfb2tli1lelK6cKCDs5ApEYw0LhgAMXxfHESbb9cNwSQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
