import React from 'react';
import './index.css';

export default function BookmarkCard(props) {

    function childDeleteBookmarkClick(event) {
        event.preventDefault();

        //CALL the function that was passed down and down
        props.destroyBookmark(props.index);
    }

    return (
        <div className="container-fluid card">
            <div className="row">
                <div className="card-body col-10">
                    <h2>{props.theBookmark.bookmarkName}</h2>
                    <a href={props.theBookmark.bookmarkUrl} className="btn btn-primary">Go</a>
                </div>
                <div className="col-2 card-body align-self-end">
                    <a href="noop" onClick={childDeleteBookmarkClick} className="btn btn-danger">Delete</a>
                </div>
            </div>
        </div>
    );
}