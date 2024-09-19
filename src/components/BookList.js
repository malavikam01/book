// src/components/BookList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './BookForm';

const BookList = () => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();
  const [bookToEdit, setBookToEdit] = React.useState(null);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };

  return (
    <div>
      <BookForm bookToEdit={bookToEdit} />
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => setBookToEdit(book)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
