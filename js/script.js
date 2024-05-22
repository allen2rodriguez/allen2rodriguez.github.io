//Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Read More button 
document.addEventListener('DOMContentLoaded', function () {
  const additionalText = document.getElementById('additional-text');
  const readMoreBtn = document.getElementById('read-more-btn');

  readMoreBtn.addEventListener('click', function () {
    additionalText.classList.toggle('hidden');
    
  });
});

// Get references to the search input and results container
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Define your dataset or fetch it from an external source
const dataset = ['apple', 'banana', 'orange', 'grape', 'pineapple'];

// Function to perform the search
function search(query) {
    // Clear previous results
    searchResults.innerHTML = '';

    // Filter dataset based on the query
    const filteredResults = dataset.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    // Display filtered results
    filteredResults.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResults.appendChild(li);
    });
}

// Event listener for input changes
searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    search(query);
});

// Require the reCAPTCHA
function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("Please complete the reCAPTCHA");
        return false;
    } else {
        document.getElementById('g-recaptcha-response').value = response;
        return true;
    }
}










