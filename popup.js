document.getElementById('checkFact').addEventListener('click', function () {
    const query = document.getElementById('query').value;
    if (!query) {
        alert('Please enter a query.');
        return;
    }

    // Replace 'YOUR_API_KEY' with your actual Google Fact Check API key
    const apiKey = 'AIzaSyCxyAMfDVlHvLH1PHGW4NC-QSrxdE_oXqw';
    const url = `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(query)}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Clear previous results

            if (data.claims && data.claims.length > 0) {
                data.claims.forEach(claim => {
                    const claimText = claim.text || 'No text available';
                    const claimant = claim.claimant || 'Unknown claimant';
                    const claimDate = claim.date || 'Unknown date';

                    const claimDiv = document.createElement('div');
                    claimDiv.innerHTML = `
                        <p><strong>Claim:</strong> ${claimText}</p>
                        <p><strong>Claimant:</strong> ${claimant}</p>
                        <p><strong>Date:</strong> ${claimDate}</p>
                        <p><strong>Source:</strong> ${claim.claimReview[0].publisher.name}</p>
                        <p><a href="${claim.claimReview[0].url}" target="_blank">Read more</a></p>
                        <hr>
                    `;
                    resultsDiv.appendChild(claimDiv);
                });
            } else {
                resultsDiv.innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('results').innerHTML = '<p>Error fetching data.</p>';
        });
});
