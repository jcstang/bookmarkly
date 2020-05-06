import React from 'react';
import BookmarkListItem from '../BookmarkListItem/BookmarkListItem';

export default function BookmarkList(props) {
    return (
        <ul>
            {
                props.bookmarks.map((aBookmark, index) => (
                    <BookmarkListItem 
                        theBookmark={aBookmark}
                        key={aBookmark.id}
                        index={index}
                        destroyBookmark={props.destroyBookmark}
                    />
                ))
            }
        </ul>
    );
}