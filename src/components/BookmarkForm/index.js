import React, { Component } from 'react';
import './index.css';

class BookmarkForm extends Component {
    constructor(props) {
        super(props);

        this.saveBookmark = props.saveBookmark;
        this.state = {
            id: props.nextId,
            bookmarkName: '',
            bookmarkUrl: ''
        }
    }

    // state = {
    //     id: null,
    //     bookmarkName: '',
    //     bookmarkUrl: ''
    // }
    
    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.saveBookmark(this.state);

        this.setState({
            id: null,
            bookmarkName: '',
            bookmarkUrl: ''
        })
    }


    render() {
        return (
            <div className="container form-container">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="bookmark-name">Bookmark Name</label>
                        <input
                            className="form-control" 
                            id="bookmark-name"
                            name="bookmarkName"
                            value={this.state.bookmarkName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookmark-url">Bookmark Address</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="bookmarkUrl"
                            id="bookmark-url"
                            value={this.state.bookmarkUrl}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-warning">Submit</button>
                </form>
            </div>
        );
    }

}

export default BookmarkForm;