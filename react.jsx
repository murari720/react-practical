import React, { useState } from 'react';

// Main component for the library management UI
function App() {
  // State to manage the list of books
  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);

  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // State for the new book inputs
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  // Function to add a new book
  const handleAddBook = () => {
    if (newTitle && newAuthor) {
      const newBook = { 
        id: books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1,
        title: newTitle, 
        author: newAuthor 
      };
      setBooks([...books, newBook]);
      setNewTitle('');
      setNewAuthor('');
    }
  };

  // Function to remove a book by its id
  const handleRemoveBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Filter books based on the search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Search and Add Book Section */}
      <div style={styles.section}>
        <h2>Library Management</h2>
        
        {/* Search Bar */}
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Add New Book Form */}
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="New book title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={styles.addInput}
          />
          <input
            type="text"
            placeholder="New book author"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            style={styles.addInput}
          />
          <button onClick={handleAddBook} style={styles.addButton}>Add Book</button>
        </div>
      </div>

      {/* Book List Section */}
      <div style={styles.section}>
        <h2>Library Management</h2>
        {/* Render the list of books */}
        {filteredBooks.map(book => (
          <div key={book.id} style={styles.bookItem}>
            <span>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <button onClick={() => handleRemoveBook(book.id)} style={styles.removeButton}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Basic inline CSS styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '10px',
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: '1',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  addInput: {
    flex: '1',
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  addButton: {
    padding: '8px 12px',
    fontSize: '14px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  bookItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
  },
  removeButton: {
    padding: '6px 10px',
    fontSize: '12px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default App;
