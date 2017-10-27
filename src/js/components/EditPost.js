import React from 'react';
import {connect} from 'react-redux';
import {edit} from '../actions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({edit}, dispatch)
}

@connect(null, mapDispatchToProps)
export default class EditPost extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this); 
    }

    handleOnSubmit(event) {
        event.preventDefault();

        if(this.refs.title.value.trim() !== '' || this.refs.description.value.trim() !== '') {
            let edit_post = {
                title: this.refs.title.value,
                description: this.refs.description.value
            };

            this.props.edit({index: this.props.index, data: edit_post});

            this.refs.title.value = '';
            this.refs.description.value = '';
            this.props.save();
        }
    };

    render() {
            return (
                <div className="post-edit-container">
                    <div className="post-edit">
                    <h3>Edit post</h3>
                    
                    <form onSubmit={this.handleOnSubmit}>   
                        <input type="text" ref="title" defaultValue={this.props.item.title}/>
                        <textarea ref="description" defaultValue={this.props.item.description}/>
                        <button type="submit">Сохранить</button>
                    </form>
                    </div>
                </div>)

    
    }
}