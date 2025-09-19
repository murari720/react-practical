
## ProductCard Component Using Props
# Objective

The goal of this project is to build a reusable React component that displays product details dynamically using props. This exercise demonstrates the ability to pass and render data in React components efficiently.

# Task Description

The task involves creating a React component named ProductCard that accepts the following props:

Product Name – The name of the product.

Price – The price of the product.

Stock Status – Availability of the product (e.g., In Stock, Out of Stock).

The component should display these details clearly, either in a card layout or a simple styled box. The key requirement is that the component can render different product data dynamically without modifying the component code itself. This demonstrates proper use of props to make React components reusable.

# Implementation Details

Create the Component

Define a functional component named ProductCard.

Accept name, price, and stock as props.

Render these values inside a styled container (e.g., div with CSS styling or card layout).

Use the Component

Import ProductCard into the parent component or App.js.

Pass different product data as props to demonstrate dynamic rendering.

Styling

Use CSS to create a clean and professional look for the card.

Highlight product name, price, and stock status distinctly.

Example Usage
<ProductCard 
  name="Wireless Headphones" 
  price="$99.99" 
  stock="In Stock" 
/>

<ProductCard 
  name="Smartwatch" 
  price="$199.99" 
  stock="Out of Stock" 
/>

# Expected Outcome

Each product card displays the product name, price, and stock status clearly.

Multiple product cards can be rendered with different data without changing the ProductCard component itself.

The component should be visually organized, demonstrating good use of React props and component reusability.

<img width="1920" height="1080" alt="Screenshot 2025-09-18 012032" src="https://github.com/user-attachments/assets/76ae9749-899e-429d-a501-51934c9c9d0b" />
## Library Management UI with Search, Add, and Remove Book Functionality
# Objective

The objective of this project is to build an interactive library management interface using React. Users can view a list of books and perform actions such as searching, adding, and removing books. This task reinforces the understanding of React state management, event handling, and dynamic rendering.

# Task Description

The project involves creating a React-based UI with the following features:

Display Books

Render a list of books, each showing a title and an author.

Search Functionality

Include a search input that filters books in real-time based on the title or author as the user types.

Add New Books

Provide an input form to add new books to the list dynamically.

The form should accept both title and author of the book.

Remove Books

Include a remove button next to each book to delete it from the list.

All actions should update the UI dynamically without requiring a page reload, demonstrating React's reactivity and efficient state handling.

# Implementation Details

State Management: Use React useState hook to manage the list of books and the current search query.

Event Handling: Handle input changes, form submission, and button clicks to update state.

Dynamic Rendering: Filter and map the books array to render the updated list based on user interactions.

Component Structure: You may use separate components for the search bar, book list, and book items for better modularity.

# Example Usage
// Example initial books
const initialBooks = [
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" }
];


Typing "great" in the search box filters the list to show only The Great Gatsby.

Adding a new book through the form dynamically updates the book list.

Clicking "Remove" next to a book deletes it instantly from the list.

# Expected Outcome

Users can view all books in a clean, organized list.

Search input filters books in real-time.

New books can be added dynamically, and any book can be removed without refreshing the page.

The UI remains responsive, demonstrating effective React state management and dynamic rendering.

<img width="1920" height="1080" alt="Screenshot 2025-09-18 020406" src="https://github.com/user-attachments/assets/7e47b0e0-c626-4f22-b898-969c0bf29016" />

## Library Management UI
This is a simple, single-page application built with React.js that demonstrates core UI functionalities for managing a library's book collection. Users can view, search, add, and remove books dynamically without page reloads.

# Features
Dynamic Book List: Displays a list of books with their titles and authors.

Search Functionality: Filters the book list in real-time as you type, matching books by title or author.

Add New Book: A form to add new books to the collection.

Remove Book: A "Remove" button next to each book to delete it from the list.

Responsive UI: The interface is designed to be clean and easy to use.

# Getting Started
To get a local copy up and running, follow these steps.

# Prerequisites
Node.js and npm (or yarn) installed on your machine.

# Installation
Clone the repository:

Bash

git clone <repository-url>
Navigate to the project directory:

Bash

cd <project-folder-name>
Install the dependencies:

Bash

npm install
# or
yarn install
Start the development server:

Bash

npm start
# or
yarn start
The application will open in your browser at http://localhost:3000.

# Project Structure
The project is structured around a single React component, App.jsx, which manages all state and logic.

/src
├── App.jsx           # Main component handling all UI logic and state
├── index.css         # Optional: for custom styling
├── index.js          # Entry point of the React application
└── ...
Contributing
Contributions, issues, and feature requests are welcome.








<img width="1920" height="1080" alt="Screenshot 2025-09-18 021642" src="https://github.com/user-attachments/assets/e7b02378-e8a3-4be1-ade1-156f0a154a77" />

