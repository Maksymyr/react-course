import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.stepaRecomend = this.stepaRecomend.bind(this);

    }
    state = {
        visible: true
    }
    stepaRecomend() {
        this.setState({ visible: !this.state.visible });
    }
    render() {
        console.log(this.props);
        return (
            <div className="menu-container">
                <div className={this.state.visible ? "switch open" : "switch close"} onClick={this.stepaRecomend}></div>
                {!this.state.visible ?
                    <ul>
                        {this.props.data.map((item, index) => <li key={index}><a href="#">{item}</a></li>)}
                    </ul> : null}

            </div>
        )
    }

}

