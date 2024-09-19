// src/components/BookForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const BookForm = ({ bookToEdit }) => {
  const [title, setTitle] = useState(bookToEdit ? bookToEdit.title : '');
  const [author, setAuthor] = useState(bookToEdit ? bookToEdit.author : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: bookToEdit ? bookToEdit.id : Date.now(), title, author };
    if (bookToEdit) {
      dispatch({ type: 'EDIT_BOOK', payload: book });
    } else {
      dispatch({ type: 'ADD_BOOK', payload: book });
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">{bookToEdit ? 'Update' : 'Add'} Book</button>
    </form>
  );
};

export default BookForm;
