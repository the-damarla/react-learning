import React, { Component } from 'react';

function NotesToShow(props) {

    var list = props.notes.map((note, index) => 
    <div key={index}>
        { note }
        <button onClick={() => props.getTextIntoEditMode(index)}>Edit</button>
        <button onClick={() => props.deleteSelectedNote(index)}>Delete</button>
    </div>)
    return (
        <div>{ list }</div>
    )
}

class ToDoNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputData: '',
            flag: false,
            notes: [],
            editFlag: false
        };
        this.getTextIntoEditMode = this.getTextIntoEditMode.bind(this);
        this.deleteSelectedNote = this.deleteSelectedNote.bind(this);
    }

    changeInputData = (event) => {
        this.setState({
            inputData : event.target.value,
            flag: true
        });
    }

    ErrorClass = (props) => {
        return (
            <p style={{color: 'red'}}>Please enter some text to proceed</p>
        );
    }
    
    getInformation() {
        if (this.state.inputData) {
            this.state.notes.push(this.state.inputData);
        }
        this.setState({
            notes: this.state.notes,
            inputData: '',
            flag: false
        });
        this.setState({
            editFlag: false
        })
    }

    getTextIntoEditMode(index) {
        this.setState({
            editFlag: true
        })
        if (!this.state.editFlag) {
            let noteThatHasToBeEdited = this.state.notes[index];
            let noteNeedToBeDeleted = this.state.notes;
            noteNeedToBeDeleted.splice(index, 1);
            this.setState({
                inputData: noteThatHasToBeEdited,
                notes: noteNeedToBeDeleted,
            });
            return;
        }
        alert("There is some test to edit, please save it and then proceed.");
    }

    deleteSelectedNote(index) {
        let noteToBeDeleted = this.state.notes;
        noteToBeDeleted.splice(index, 1);
        this.setState({
            notes: noteToBeDeleted
        });
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
                alignItems: 'center'}}>
                <div style={{display: 'flex'}}>
                        <div>
                            <textarea rows='3' cols='30' value={this.state.inputData} 
                            onChange={this.changeInputData} required></textarea>
                            {!this.state.inputData && this.state.flag ? <this.ErrorClass /> : ''}
                        </div>
                        <div>
                            <button onClick={() => this.getInformation()}>Click me</button>
                        </div>
                </div>
                <div>
                    <NotesToShow notes={this.state.notes} getTextIntoEditMode={this.getTextIntoEditMode}
                        deleteSelectedNote={this.deleteSelectedNote}/>
                </div>
            </div>
        );
    }
}

export default ToDoNotes;