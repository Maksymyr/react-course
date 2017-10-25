import React from 'react';

export default class AddList extends React.Component {
    constructor (props) {
        super(props) 
    }
    render() {
        return (
            <div className='todo-list'>
                {this.props.children}
            </div>
        )
    }
}