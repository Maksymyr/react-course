import React from 'react';
import {connect} from 'react-redux';
import {addPost} from '../actions';

@connect(null, {addPost})
export default class AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this); 
    }

    handleOnSubmit(event) {
        event.preventDefault();

        if(this.refs.title.value.trim() !== '' || this.refs.description.value.trim() !== '') {
            let new_post = {
                title: this.refs.title.value,
                description: this.refs.description.value,
                links: this.state.links
            };
            this.setState({links: []})
            this.props.addPost(new_post);

            this.refs.title.value = '';
            this.refs.description.value = '';
            this.props.count();
        }
    };
    add_link = (e) => {
        e.preventDefault();
        if(this.refs.linkname.value.trim() != "" && this.refs.linkaddress.value.trim() != "") {
            this.setState({links: [...this.state.links, {title: this.refs.linkname.value, link: this.refs.linkaddress.value}]});
            this.refs.linkname.value = "";
            this.refs.linkaddress.value = "";
        }
    }
    render() {
        return (
            <div className="add-post">
                <h3>Add new post</h3>
                
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" ref="title" placeholder="Post title"/>
                    <textarea ref="description" placeholder="Post content"/>
                    <input className="link-inp" type="text" ref="linkname" placeholder="Link name"/>
                    <input className="link-inp" type="text" ref="linkaddress" placeholder="Link address"/>
                    <ul>
                        {this.state.links.map((item, index) => <li key={index}>{item.title + " : " + item.link}</li>)}
                    </ul>
                    <button onClick={this.add_link}>Добавить ссылку</button>
                    <button type="submit">Создать новый пост</button>
                </form>
            </div>
        );
    }
}