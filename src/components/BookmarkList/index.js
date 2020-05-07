import React from 'react';
import BookmarkListItem from '../BookmarkListItem';
import BookmarkCard from '../BookmarkCard';

export default function BookmarkList(props) {
    return (
        <div className="container">
            <div className="row">
                { 
                    props.bookmarks.map((aBookmark, index) => (
                        <BookmarkCard 
                            theBookmark={aBookmark}
                            key={index}
                            index={index}
                            id={aBookmark.id}
                            destroyBookmark={props.destroyBookmark}
                        />
                    ))
                }
            </div>
        </div>
    );
}