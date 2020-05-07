import React from 'react';

export default function BookmarkListItem(props) {

    function childDeleteBookmarkClick(event) {
        event.preventDefault();

        //CALL the function that was passed down and down
        props.destroyBookmark(props.index);
    }

    return(
        <li>
            <a 
                href={props.theBookmark.bookmarkUrl} 
                target="_blank" 
                rel="noopener noreferrer">
                {props.theBookmark.bookmarkName}
            </a>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <a href="#noop" onClick={childDeleteBookmarkClick}>Delete</a>
        </li>
    );
}