import React, { Component } from 'react'

class AddToDoForm extends Component {

    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({value: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.value);
        this.setState({value: ''});
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        value={this.state.value}
                        onChange={this.handleValueChange}
                        placeholder="Enter a new To-Do!"
                    />
                    
                    <input 
                        type='submit' 
                        value='Add ToDo'
                    />
                </form>
            </div>
        );
    }
}

export default AddToDoForm;