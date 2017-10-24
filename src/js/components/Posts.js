import React from 'react';

import Post from '../components/Post';
import AddPost from './AddPost';
import EditPost from './EditPost.js';

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkout: true,
            checkEdit: false,
            objData:{}
        }
        this.editPost = this.editPost.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
    }
    editPost (i, obj) {
        console.log("i "+i)
        this.setState({objData :obj, checkEdit : true});
    }
    handleClose(){
        this.setState({checkEdit : false});
    }

    // lifecycle methods START!
    // componentWillMount() {
    //     console.log("Component Will Mount | Posts.js")
    // }

    // componentDidMount() {
    //     console.log("Component Did Mount | Posts.js")
    // }

    // componentWillUpdate() {
    //     console.log("Component Will Update | Posts.js");
    // };

    // shouldComponentUpdate() {
    //     console.log("Should Component Update | Posts.js");
    //     return true;
    // };

    // componentDidUpdate() {
    //     console.log("Component Did Update | Posts.js");
    // };

    // componentWillUnmount() {
    //     console.log("componentWillUnmount | Posts.js");
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log("Component Will Receive Props | Posts.js", nextProps);
    // }
    //lifecycle methods END!

    // Это не все функции жизненного цикла, остальные вы можете узнать 
    // посмотрев в документацию реакта (https://reactjs.org) 

    render() {
        return (
            <section className="posts-container">


                <AddPost addPost={this.props.addPost} />
                {this.state.checkEdit ? <EditPost data={this.state.objData} index={this.props.posts.indexOf(this.state.objData)} onClick = {this.props.handleUpdate} handleClose={this.handleClose}/> : null}
                <div className="items">

                    {this.props.posts.map((item, index) => {
                        // Тут мы перебираем функцией .map() каждый объект из массива переданого в этот компонент и передаем
                        // каждый из них в новый компонент Post (экземпляр класса), который создается при каждой итерации функции map()

                        // Так-же, мы передаем свойство "key", оно необходимо ядру реакта для индетификации элементов которые
                        // созданы спомощью итерационных функций, в остальных случаях это делать нет необходимости.
                        return (
                            <Post data={item} delPost={this.props.delPost} key={index} index={index} edPost={this.editPost} checkbox={this.checkout}/>
                        )
                    } )}
                </div>
            </section>
        )
    }
}

