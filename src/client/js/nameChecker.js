function checkForName(inputText) {
  console.log('::: Running checkForName :::', inputText);
  let names = [
    'Malik',
    'John',
    'Jane',
    'Kim',
    'Seth',
    'Amber'
  ]

  if (names.includes(inputText)) {
    alert('Welcome, Captain!')
  }
}

export { checkForName }