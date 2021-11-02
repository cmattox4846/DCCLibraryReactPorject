import React from 'react';


const BookViewer = (props) => {
    return ( 
        <div className="row row-spacer">
            <div className="col-md-4">
                {/* Button here for move to previous book */}
                <button onClick={props.previousBook}>Previous Book</button>
            </div>
            <div className="col-md-4">
                <h1>{props.book.title}</h1>
                <h3>{props.book.author}</h3>
                
            </div>
            <div className="col-md-4">
                {/* Button here for move to next book */}
                <button onClick={props.nextBook}>Next Book</button>
            </div>
        </div>
    );
}
 
export default BookViewer;