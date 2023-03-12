import React, { Component } from 'react';
import { Calculator } from '../CalculatorApp/Calculator';
import NotesToDo from '../ToDoNotesApp/ToDoNotes';
import AxiosStuff from '../AxiosStuff/GetList';
import PostingData from '../AxiosStuff/PostingData';

class MainScreen extends Component {
    render() {
        return (
            <div>
                <div>
                    <Calculator />
                </div>
                <div>
                    <NotesToDo />
                </div>
                <div>
                    <AxiosStuff />
                </div>
                <div>
                    <PostingData />
                </div>
            </div>
        );
    }
}

export default MainScreen;