# Amazon Product Scraper

## Overview
This project is a simple web scraper designed to extract product listings from the first page of Amazon search results for a given keyword. The application consists of:

- **Backend**: A Node.js server using Express.js to handle API requests and scrape data from Amazon.
- **Frontend**: A user-friendly interface built with HTML, CSS, and Vanilla JavaScript to interact with the backend and display the scraped data.

### The scraper extracts the following details for each product:
- Product Title
- Rating (stars out of five)
- Number of Reviews
- Product Image URL

## Features
- **Scraping Logic**: Uses `axios` to fetch Amazon search results and `jsdom` to parse the HTML content.
- **RESTful API**: Provides an endpoint `/api/scrape` to initiate the scraping process.
- **Frontend Interface**: Allows users to input a keyword, trigger the scraping process, and view the results in a clean format.
- **Environment Configuration**: Uses `.env` files to manage environment-specific settings like API URLs and headers.

## Technologies Used
### Backend:
- Node.js
- Express.js
- Axios
- JSDOM
- dotenv

### Frontend:
- HTML
- CSS
- Vanilla JavaScript

### Development Tools:
- Express-list-routes (optional for debugging)

## Setup Instructions

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **npm**: Comes bundled with Node.js.

### Installation

#### Clone the Repository:
```bash
git clone https://github.com/luizhenriquesant/amazon-scraper.git
cd amazon-scraper
```

#### Install Dependencies:
```bash
npm install
```

#### Start the Server:
```bash
npm run start
```

#### Open the Frontend:
Open the `frontend/index.html` file in your browser.

## Usage

### Enter a Keyword:
Type the keyword you want to search for on Amazon (e.g., "laptop") in the input field on the webpage.

### Scrape Products:
Click the "Scrape" button to initiate the scraping process.

### View Results:
The scraped product details (title, rating, reviews, and image) will be displayed on the page.

## API Documentation

### Endpoint: `/api/scrape`
- **Method**: `GET`
- **Query Parameters**:
  - `keyword` (required): The search term for which you want to scrape Amazon products.

#### Example Request:
```bash
GET http://localhost:3000/api/scrape?keyword=laptop
```

#### Example Response:
```json
[
  {
    "title": "Dell XPS 13 Laptop",
    "rating": "4.7 out of 5 stars",
    "reviews": "2,345 ratings",
    "image": "https://example.com/image.jpg"
  },
  {
    "title": "HP Pavilion 15",
    "rating": "4.5 out of 5 stars",
    "reviews": "1,890 ratings",
    "image": "https://example.com/image2.jpg"
  }
]
```

## Folder Structure
```
amazon-scraper/
├── backend/
│   ├── controllers/          # Handles request/response logic
│   │   └── scraperController.js
│   ├── models/               # Contains scraping logic
│   │   └── scraperModel.js
│   ├── routes/               # Defines API routes
│   │   └── scraperRoutes.js
│   └── .env                  # Environment variables
├── frontend/
│   ├── index.html            # Main HTML file
│   ├── style.css             # Styles for the frontend
│   └── script.js             # Frontend logic
├── server.js                 # Main server file
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## Notes
- **Legal Considerations**: Scraping Amazon may violate their terms of service. Use this project responsibly and only for educational purposes.
- **Error Handling**: The application includes basic error handling for missing keywords and failed scraping attempts. You can enhance this further based on your needs.

## Author
- **Luiz Henrique SantÀna de Freitas**
- GitHub: [luizhenriquesant](https://github.com/luizhenriquesant)
- Email: luiz.hrqsantana@gmail.com

