import React, { Component } from 'react';
import BookmarkList from './components/BookmarkList/BookmarkList';
import listOfSites from './data.json';
import BookmarkForm from './components/BookmarkForm/BookmarkForm';
import './App.css';

class App extends Component {
  state = {
    //bookmarks: listOfSites
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
    const newBookmarks = [...this.state.bookmarks, ...bookmark];
    
    this.setState({ bookmarks: newBookmarks });
  }

  destroyBookmark = bookmarkIndex => {
    console.log(`destroy this id: ${bookmarkIndex}`);
    /* TODO: delete bookmark based off of id */
  }
  
  render() {
    return (
      <div className="container">
        <BookmarkForm saveBookmark={this.saveBookmark} />
        <BookmarkList
          bookmarks={this.state.bookmarks}
          destroyBookmark={this.destroyBookmark}
        />
      </div>
    );
  }
}

export default App;
