document.addEventListener("DOMContentLoaded", function() {
    // Load content from about-me.txt using fetch API
    fetch('about-me.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('about-me-content').innerHTML = `<h2>About Me</h2><p>${data}</p>`;
        })
        .catch(error => console.error('Error fetching about-me.txt:', error));
});
