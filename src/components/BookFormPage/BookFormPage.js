import React from 'react'
import './BookFormPage.scss'
import './responsive-bookform.scss'

import BookForm from './BookForm/BookForm'

const BookFormPage = () => {
    return ( 
        <div className="book-form-container">
            <BookForm />
        </div>
    );
}
 
export default BookFormPage;