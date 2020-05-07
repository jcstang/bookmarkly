import React from 'react';
import BookmarkListItem from '../BookmarkListItem/BookmarkListItem';

export default function BookmarkList(props) {
    return (
        <div className="container">
            <div className="row">
                <ul>
                    {
                        props.bookmarks.map((aBookmark, index) => (
                            <BookmarkListItem 
                                theBookmark={aBookmark}
                                key={index}
                                index={index}
                                id={aBookmark.id}
                                destroyBookmark={props.destroyBookmark}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}