import React from 'react';

export default function BookmarkCard(props) {

    function childDeleteBookmarkClick(event) {
        event.preventDefault();

        //CALL the function that was passed down and down
        props.destroyBookmark(props.index);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.theBookmark.bookmarkName}</h5>
                <a href="noop" onClick={childDeleteBookmarkClick} className="card-link">Delete</a>
                <a href={props.theBookmark.bookmarkUrl} className="card-link">Go</a>
            </div>
        </div>
        // <li>
        //     <a 
        //         href={props.theBookmark.bookmarkUrl} 
        //         target="_blank" 
        //         rel="noopener noreferrer">
        //         {props.theBookmark.bookmarkName}
        //     </a>
        //     <span>&nbsp;&nbsp;&nbsp;</span>
        //     <a href="#noop" onClick={childDeleteBookmarkClick}><i className="fas fa-times"></i></a>
        // </li>
    );
}