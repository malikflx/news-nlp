function handleSubmit(event) {
  event.preventDefault()

  // check text entered into form field
  let formText = document.getElementById('name').value
  checkForName(formText)

  console.log('::: Form Submitted :::')
  fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function (res) {
      document.getElementById('results').innerHTML = res.message
    })
}

export { handleSumbit }