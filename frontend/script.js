document.getElementById('scrapeButton').addEventListener('click', async () => {
    // Capture the value of the input field
    const keyword = document.getElementById('keyword').value;
    const resultsDiv = document.getElementById('results');

    // loading during fetch
    resultsDiv.innerHTML = '<p>Loading...</p>';
  
    try {
      // GET Request to backend endpoint
      const  response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);

      // const response = await fetch(`/api/scrape?keyword=${encodeURIComponent(keyword)}`);
      const data = await response.json();
      
      if (response.ok) {
        resultsDiv.innerHTML = '';

        // Visual representation of each item
        data.forEach((product) => {
          const productDiv = document.createElement('div');
          productDiv.className = 'product';
          
          // Populate with item details
          productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div>
              <h3>${product.title}</h3>
              <p><strong>Rating:</strong> ${product.rating}</p>
              <p><strong>Reviews:</strong> ${product.reviews}</p>
            </div>
          `;
  
          resultsDiv.appendChild(productDiv);
        });
      } else {
        resultsDiv.innerHTML = `<p>Error: ${data.error}</p>`;
      }
    } catch (error) {
      resultsDiv.innerHTML = '<p>An unexpected error occurred.</p>';
    }
  });