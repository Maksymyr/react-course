import React from 'react';

export default class EditPost extends React.Component {
    constructor (props) {
        super(props)
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit = () => {
        this.props.handleClose();
        this.props.onClick(this.props.index, {title: this.refs.titleInput.value, description: this.refs.textareaInput.value, links: this.props.data.links})
    }
    render() {
        console.log (this.props.data);
        return (
            <div className="post-edit-container">
                <div className="post-edit add-post">
                    <form>
                    <input type="text" defaultValue={this.props.data.title} ref="titleInput"/>
                    <textarea defaultValue={this.props.data.description} ref="textareaInput"></textarea>
                    <button onClick={this.handleEdit}>Save&Close</button>
                    </form>
                </div>
            </div>
        )

    }
}