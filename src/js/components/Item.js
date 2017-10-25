import React from 'react';


export default class Item extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log(this.props.data.data.title);
        return (
            <div className='todo-list'>
            <div className='item'>
                <h2><span>{this.props.data.data[0].title}</span></h2>
                <p className="fullpage-item"><span>{this.props.data.data[0].description}</span></p>
            </div>
            </div>
        )
    }
}