const axios = require('axios');
const { JSDOM } = require('jsdom');

async function getAmazonItems(keyword) {
    try {
        const url = `https://www.amazon.com/s?k=${keyword}`;
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 OPR/117.0.0.0' },
        });

        const dom = new JSDOM(response.data);
        const document = dom.window.document;

        const products = [];
        const items = document.querySelectorAll('[data-component-type="s-search-result"]');

        items.forEach((item) => {
            const title = item.querySelector('h2 span')?.textContent.trim() || 'No Title';
            const rating = item.querySelector('.a-icon-star-small span')?.textContent.trim() || 'No Rating';
            const reviews = item.querySelector('.a-size-base.s-underline-text')?.textContent.trim() || 'No Reviews';
            const image = item.querySelector('.s-image')?.src || 'No Image URL';

            products.push({ title, rating, reviews, image });
        });

        return products;
    } catch (error) {
      throw new Error('Failed to scrape Amazon products.');
    }
  }
  
  module.exports = { getAmazonItems };