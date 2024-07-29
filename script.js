//pagenation
document.addEventListener('DOMContentLoaded', function() {
    const blockquotes = document.querySelectorAll('.quotation blockquote');
    const totalQuotes = blockquotes.length;
    let currentQuoteIndex = 0;

    function showQuote(index) {
        blockquotes.forEach((quote, i) => {
            if (i === index) {
                quote.style.display = 'block';
            } else {
                quote.style.display = 'none';
            }
        });
    }

    function showNextQuote() {
        currentQuoteIndex++;
        if (currentQuoteIndex >= totalQuotes) {
            currentQuoteIndex = 0;
        }
        showQuote(currentQuoteIndex);
    }

    function showPrevQuote() {
        currentQuoteIndex--;
        if (currentQuoteIndex < 0) {
            currentQuoteIndex = totalQuotes - 1;
        }
        showQuote(currentQuoteIndex);
    }

    // Initial display
    showQuote(currentQuoteIndex);

    // Button event listeners
    document.getElementById('next').addEventListener('click', showNextQuote);
    document.getElementById('prev').addEventListener('click', showPrevQuote);
});
//Contact Me
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-me form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        if (!validateName(nameInput.value.trim())) {
            alert('Please enter a valid name.');
            nameInput.focus();
            return false;
        }

        if (!validateEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return false;
        }

        if (messageTextarea.value.trim() === '') {
            alert('Please enter a message.');
            messageTextarea.focus();
            return false;
        }

        // If all validation passes, you can handle form submission here
        // For demonstration, we'll just log the form data
        console.log('Name:', nameInput.value.trim());
        console.log('Email:', emailInput.value.trim());
        console.log('Message:', messageTextarea.value.trim());

        // Optionally, you can reset the form after submission
        form.reset();
    });

    // Function to validate name (example)
    function validateName(name) {
        return /^[a-zA-Z\s]+$/.test(name); // Allows only letters and spaces
    }

    // Function to validate email (basic example)
    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email); // Basic email validation
    }
});
