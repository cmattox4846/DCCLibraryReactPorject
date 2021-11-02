import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component{
    constructor(props){
        super(props);
        this.books =[
            
                {title: "Ready Player One", author: "Ernest Cline"},
                {title: "The first and last freedom", author: "Jiddu Kirshnamurit"},
               {title: "All the Light We Cannot See", author: "Anthony Doerr"}
            
        ];
        this.state = {
            bookNumber: 0
        };
    }


    render(){
        return(
            
            <div className="container-fuild">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/* Button here for move to previous book */}
                    </div>
                    <div className="col-md-4">
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h3>{this.books[this.state.bookNumber].author}</h3>
                        
                    </div>
                    <div className="col-md-4">
                        {/* Button here for move to next book */}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;