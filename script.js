document.querySelector('.search-btn').addEventListener('click', function() {
    const searchQuery = document.querySelector('.search-bar input').value;
    if (searchQuery) {
        alert('Searching for: ' + searchQuery);
    } else {
        alert('Please enter a city, hotel, or landmark.');
    }
});