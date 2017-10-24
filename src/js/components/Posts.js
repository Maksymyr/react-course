import React from 'react';

import Post from './Post';
import AddPost from './AddPost';

export default class Posts extends React.Component {

    render() {
        return (
            <section className="posts-container">
                <AddPost func={this.props.func}/>
                {this.props.posts.map((item, index) => <div key={index} className="items">
                <Post data={item} del={this.props.del} index={index}/>
                </div>)}
            </section>
        )
    }
}
