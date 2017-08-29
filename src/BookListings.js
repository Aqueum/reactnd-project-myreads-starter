import React, { Component } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
import * as BooksAPI from './BooksAPI';
import './App.css';
import escapeRegExp from 'escape-string-regexp';

class BookListings extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    const { books } = this.props;
    const { query } = this.state;
    let showingBooks;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingBooks = books.filter(book => match.test(book.name));
    } else {
      showingBooks = books;
    }

    return (
      <ol className="books-grid">
        {showingBooks.map(book =>
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
                  }}
                />
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">To Kill a Mockingbird</div>
              <div className="book-authors">Harper Lee</div>
            </div>
          </li>
        )}
      </ol>
    );
  }
}

export default BookListings;