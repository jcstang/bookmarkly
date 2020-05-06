import React, { Component } from 'react';
import BookmarkList from './components/BookmarkList/BookmarkList';
import listOfSites from './data.json';
import BookmarkForm from './components/BookmarkForm/BookmarkForm';
import './App.css';

class App extends Component {
  state = {
    bookmarks: listOfSites
  }

  destroyBookmark = bookmarkIndex => {
    console.log(`destroy this id: ${bookmarkIndex}`);
    /* TODO: delete bookmark based off of id */
  }
  
  render() {
    return (
      <div className="container">
        <BookmarkForm />
        <BookmarkList
          bookmarks={this.state.bookmarks}
          destroyBookmark={this.destroyBookmark}
        />
      </div>
    );
  }
}

export default App;
