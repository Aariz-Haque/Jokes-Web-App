function fetchJoke() {
    // Replace the URL with the actual API endpoint that provides the joke data
    fetch('https://jokesapi-pqp8.onrender.com/yomomma')
      .then(response => response.json())
      .then(data => {
        // Assuming the API response has a 'content' key containing the joke text
        const jokeText = data.body;

        // Update the element with id 'joke' with the fetched joke text
        const jokeElement = document.getElementById('joke');
        jokeElement.textContent = jokeText;
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
      });
  }