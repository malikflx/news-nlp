function handleSubmit(event) {
  event.preventDefault()

  // check text entered into form field
  let formText = document.getElementById('name').value
  Client.checkForName(formText)

  console.log('::: Form Submitted :::')
  fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function (res) {
      document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }