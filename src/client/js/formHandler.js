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
        document.getElementById('agreement').classList.add('style-result');
        document.getElementById('score_tag').innerHTML = `Score Tag: ${res.score_tag}`;
        document.getElementById('score_tag').classList.add('style-result');
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('subjectivity').classList.add('style-result');
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById('confidence').classList.add('style-result');
      })
  } else {
    console.log('Invalid input')
    document.getElementById('url_input').classList.add('invalid');
    document.getElementById('url_input').value = 'Invalid Input';
  }

}

export { handleSubmit }