import React, { Component } from 'react';
import Header from './Header';
import ToDo from './ToDo';
import AddToDoForm from './AddToDoForm';

class App extends Component {
  
  state = {
    numToDos: 0,
    toDos: [
      {
        text: "Add your first To Do!",
        id: 0,
        complete: false
      }
    ]
  };

  prevId = 0;

  handleAddToDo = (text) => {
    this.setState(prevState => {
      return {
        toDos: [
          ...prevState.toDos,
          {
            text: text,
            id: this.prevId += 1
          }
        ]
      }
    })
  }

  handleRemoveToDo = (id) => {
    this.setState ( prevState => {
      return {
        toDos: prevState.toDos.filter(p => p.id !== id)
      };
    });
  }

  render(){
    return (
      <div>
        <Header 
          numToDos={this.state.numToDos}
        />
        {this.state.toDos.map( (toDo, index) => 
          <ToDo 
          text={toDo.text}
          index={index}
          id={toDo.id}
          complete={toDo.complete}
          key={toDo.id.toString()}
          removeToDo={this.handleRemoveToDo}
          />
        )}
        <AddToDoForm 
          addToDo={this.handleAddToDo}
          
        />
      </div>
    );
  }
}

export default App;
