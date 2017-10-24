import React from 'react';

export default class AddPost extends React.Component {
    constructor (props) {
        super(props);
        this.createNewPost = this.createNewPost.bind(this);
    }
    
    createNewPost(event) { 
        event.preventDefault();
        if (this.refs.title.value.trim() !== "" && this.refs.description.value.trim() !== "") {
            let new_post = {title: this.refs.title.value.trim(), description: this.refs.description.value.trim()};
            this.props.func(new_post);
            this.refs.title.value = "";
            this.refs.description.value = "";
        }
    }
    render() {
        return (
                <div className="add-post">
                    <h3>Add new post</h3>
                    <form onSubmit={this.createNewPost}>
                        <input type="text" ref="title" placeholder="Post title" />
                        <textarea ref="description" placeholder="Post content" ></textarea>
                        <button >Create new post</button>
                    </form>
                </div>
        )
    }
}