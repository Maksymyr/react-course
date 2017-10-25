import React from 'react';
import { Link, Route } from 'react-router-dom';

import AddTodo from '../components/AddTodo.js';
import AddList from '../components/AddList.js';
import AddItem from '../components/AddItem.js';
import Footer from '../components/Footer.js';
import Item from '../components/Item.js';

export default class MainLayout extends React.Component {
    constructor (props) {
        super(props)
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleViewTask = this.handleViewTask.bind(this);
        // this.handleUndo = this.handleUndo.bind(this);
        this.state = {
             data: [],
             viewvar: {}
        }
    }
    handleAddTask(header, text) {
        this.setState({data: [...this.state.data, {title: header, description: text}]})
    }   
    // , checkundo: fasle
    handleDeleteTask(delIndex) {
        this.setState({data: this.state.data.filter((item, index) => index != delIndex)})
    }
    // handleUndo(undoIndex) {
    //     let undo = this.state.data.filter((item, index) => index == delIndex);
    //     this.setState({data: this.state.data.filter((item, index) => item[undoIndex].checkundo = true})
    // }
    handleViewTask (viewIndex) {
        this.setState({viewvar: {index: (viewIndex+1), data: this.state.data.filter((item, index) => index == viewIndex)}});
    }
    renderTodoList = () => {
        return (
            <AddList>
            {this.state.data.map((item, index) => 
            <AddItem data={item} index={index} key={index} funDel={this.handleDeleteTask} funUndo={this.handleUndo} funView={this.handleViewTask} />
            )}
        </AddList>
        )
    }
    render() {
        console.log(this.state.viewvar);
        return (
            <div className="wrapper">
                <h1>My to do list</h1>
                    <span className='link'><Link to="/">Home</Link></span>
                    <span className='link'><Link to="/add">Add</Link></span>
                
                    <Route exact path="/"component={this.renderTodoList} />
                    <Route path="/add" component={() =><AddTodo handleAddTask={this.handleAddTask} />} />
                    <Route path={"/item"+this.state.viewvar.index} component={() => <Item data={this.state.viewvar}/>} />
                    <Route path="*" component={Footer} />
               
                
            </div>
        )
    }
}

