import React from 'react';
// "".reverse();


export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.handleOp = this.handleOp.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    state = {
        check: true,
        deleting: false
    }
    handleOp() {
        this.setState({check: !this.state.check})
    }
    handleDel() {
        // this.setState({deleting: !this.state.deleting})
        // this.props.del(2);
        this.props.del(this.props.index);

    }

    render() {
        let str = this.props.data.description.split("");
            return (
            <article className="item">
                <h1>{this.props.data.title}</h1>
                <p className="post-view">{this.state.check ? str.slice(0, 120) : this.props.data.description}</p>
                <div className="buttons">
                    <button onClick = {this.handleOp}>Show more</button>
                    <button onClick = {this.handleDel}>Delete</button>
                </div>
            </article>   
        );
    
    }    
}

