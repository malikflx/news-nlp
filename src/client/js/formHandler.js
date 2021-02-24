import fetch from "node-fetch";

function handleSubmit(e) {
  e.preventDefault()
  // check URL entered into form field
  let formUrl = document.getElementById('url_input').value
  if (document.getElementById('url_input').classList.contains('invalid')) {
    document.getElementById('url_input').classList.remove('invalid')
  }

  if (Client.checkUrl(formUrl)) {
    console.log('::: Form Submitted :::')
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
        document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById('score_tag').innerHTML = `Score Tag: ${res.score_tag}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
      })
  } else {
    console.log('Invalid input')
    document.getElementById('url_input').classList.add('invalid');
    document.getElementById('url_input').value = 'Invalid Input';
  }



  // postData('http://localhost:8081/analyze', { url: formUrl })

  // .then(function (res) {
  //   document.getElementById('results').innerHTML = res.message;
  // })

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