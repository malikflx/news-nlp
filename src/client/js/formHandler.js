import fetch from "node-fetch";

function handleSubmit(event) {
  event.preventDefault()
  // check URL entered into form field
  let formUrl = document.getElementById('url_input').value

  Client.checkForName(formUrl)

  console.log('::: Form Submitted :::')

  // postData('http://localhost:8081/analyze', { url: formUrl })

  // .then(function (res) {
  //   document.getElementById('results').innerHTML = res.message;
  // })
  fetch('http://localhost:8081/analyze', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ articleUrl: formUrl })
  })
    .then(res => res.json())
    .then(function (res) {
      console.log('response from Meaning Cloud', res);
      document.getElementById('results').innerHTML = res.message
    })
}

// const postData = async (url = "", data = {}) => {
//   console.log('Analyzing: ', data);
//   const response = await fetch(url, {
//     method: 'POST',
//     credentials: 'same-origin',
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data)
//   });
//   try {
//     const newData = await response.json();
//     console.log('Data received:', newData)
//     return newData;
//   } catch (error) {
//     console.log('error', error);
//   }
// };

export { handleSubmit }