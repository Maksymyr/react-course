import React from 'react';

import {Link, Route} from 'react-router-dom';

import AddTodo from '../components/AddTodo.js';
import AddList from '../components/AddList.js';

export default class MainLayout extends React.Component {

    render() {
        
        return (
            <div className="wrapper">
                <h1>Max To DO List</h1>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/add">Add Task</Link>

                <Route exact path="/" component={AddList} />
                <Route path="/add" component={AddTodo} />
                {/* <Route path="/" component="" /> */}

            </div>
        )
    }

}