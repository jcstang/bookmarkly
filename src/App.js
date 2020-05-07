import React, { Component } from 'react';
import BookmarkList from './components/BookmarkList';
import BookmarkForm from './components/BookmarkForm';
import './App.css';

class App extends Component {
  state = {
    //bookmarks: listOfSites
    nextAvailableId: 5,
    bookmarks: [
      {
        id: 1,
        bookmarkName: "Github",
        bookmarkUrl: "https://www.github.com"
      },
      {
        id: 2,
        bookmarkName: "Facebook",
        bookmarkUrl: "https://www.facebook.com"
      },
      {
        id: 3,
        bookmarkName: "Netflix",
        bookmarkUrl: "https://www.netflix.com"
      },
      {
        id: 4,
        bookmarkName: "youtube",
        bookmarkUrl: "https://www.youtube.com"
      }
    ]
  }

  saveBookmark = (bookmark) => {
    // could use concat here too.
    const newBookmarks = [...this.state.bookmarks, bookmark];
    
    const setNewId = this.state.nextAvailableId + 1;

    this.setState({
      nextAvailableId: setNewId,
      bookmarks: newBookmarks 
    });
  }

  destroyBookmark = bookmarkIndex => {
    console.log(`destroy this id: ${bookmarkIndex}`);
    /* TODO: delete bookmark based off of id */
    const updatedBookmarkList = this.state.bookmarks.filter(function(bookmark, index) {
      return index !== bookmarkIndex;
    });

    this.setState({ bookmarks: updatedBookmarkList });
  }
  
  render() {
    console.log(this.state.bookmarks);
    return (
      <div className="container">
        <BookmarkForm 
          saveBookmark={this.saveBookmark}
          nextId={this.state.nextAvailableId}
        />
        <BookmarkList
          bookmarks={this.state.bookmarks}
          destroyBookmark={this.destroyBookmark}
          />
      </div>
    );
  }
}

export default App;
