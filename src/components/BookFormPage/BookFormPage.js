import React from 'react'
import './BookFormPage.scss'
import './responsive-bookform.scss'

const BookFormPage = () => {
    return ( 
        <div className="book-form-page">
            <div className="divine"></div>
            <form className="book-form">
                <div className="form-header">
                    <h2 className="form-title">What are you going to read soon?</h2>
                    <p className="title-description">Fill  the fields below to add your book to the list of books</p>
                    <hr className="divine-line"/>
                </div>
                <div className="form-input-section">
                    <div className="form-custom-row">
                        <div className="form-custom-column">
                            <label htmlFor="bookName" className="form-label">Book name</label>
                            <input className="form-input" type="text" id="bookName" name="bookName" />
                        </div>
                        <div className="form-custom-column">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input className="form-input" type="text" id="author" name="author" />
                        </div>
                    </div>
                    <div className="form-custom-row">
                        <div className="form-custom-column">
                            <label htmlFor="genre" className="form-label">Genre</label>
                            <input className="form-input" type="text" id="genre" name="genre" />
                        </div>
                        <div className="form-custom-column">
                            <label htmlFor="bookYear" className="form-label">Book year</label>
                            <input className="form-input" type="text" id="bookYear" name="bookYear" />
                        </div>
                    </div>
                    <div className="form-custom-row">
                        <div className="form-custom-column">
                            <label htmlFor="startRead" className="form-label">Date of starting read</label>
                            <input className="form-input" type="text" id="startRead" name="startRead" />
                        </div>
                        <div className="form-custom-column">
                            <label htmlFor="endRead" className="form-label">Approximate end time</label>
                            <input className="form-input" type="text" id="endRead" name="endRead" />
                        </div>
                    </div>
                    <div className="form-custom-row file-row">
                        <div className="form-custom-column">
                            <label htmlFor="bookImage" className="form-label">Book image</label>
                            <input className="form-input" type="file" id="bookImage" name="bookImage" />
                        </div>
                    </div>
                    <div className="form-custom-row">
                        <div className="form-custom-column">
                            <label htmlFor="note" className="form-label">Note</label>
                            <textarea className="form-input" type="file" id="note" name="note" cols="100" rows="50"></textarea>
                        </div>
                    </div>
                </div>
                <div className="button-panel">
                    <button className="btn btn__cancel">Cancel</button>
                    <button className="btn btn__submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
 
export default BookFormPage;