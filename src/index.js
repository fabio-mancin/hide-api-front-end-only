(async () => {
  const response = await fetch("/.netlify/functions/lambda")
  const data = await response.json()
  document.querySelector('h1').innerHTML = data.secret
})();