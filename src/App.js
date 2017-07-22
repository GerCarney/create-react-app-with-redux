import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from 'redux'
import * as todosActions from './actions/todos-actions'
import Title from './components/Title'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { connect } from 'react-redux';


class App extends Component {

  addTodo = (val) =>{
    this.props.actions.addTodo(val);
  }

  render() {
    const todos = this.props.todos;
    return (
      <div className="App">
        <Title>Add a nice todo:</Title>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList todos={todos}/>

      </div>
    );
  }
}

const mapStateToProps = state => ({
    todos: state.todos
  });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todosActions, dispatch)
  });

export default connect(mapStateToProps,mapDispatchToProps)(App);
