import React from 'react';

export default function BookmarkCard(props) {

    function childDeleteBookmarkClick(event) {
        event.preventDefault();

        //CALL the function that was passed down and down
        props.destroyBookmark(props.index);
    }

    return (
        // <div className="container-fluid">
        //     <div className="card">
        //         <div className="card-body">
        //             <h5 className="card-title">{props.theBookmark.bookmarkName}</h5>
        //             <a href="noop" onClick={childDeleteBookmarkClick} className="btn btn-danger">Delete</a>
        //             <a href={props.theBookmark.bookmarkUrl} className="btn btn-primary">Go</a>
        //         </div>
        //     </div> 
        // </div>
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