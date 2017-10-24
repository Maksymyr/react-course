import React from 'react';

import Header from '../components/Header';
import Posts from '../components/Posts';


export default class MainLayout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: _posts
        };

        this.handleAddPost = this.handleAddPost.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleAddPost(post) {
        this.setState({ posts: [ ...this.state.posts, post ] })
    }

    handleDelete(i) {
        this.setState({ posts: this.state.posts.filter((item, index) => index !== i)})
    }

    handleUpdate(i, obj) {
        let arr = this.state.posts;
        arr[i] = obj;
        this.setState({posts:arr})
        // в нашем текущем случае, поскольку данные находятся в state, то для 
        // обновления данных нам опять же, нужно менять state чтобы обновить, 
        // тоже нужно менять state.
    }

    // lifecycle methods START
    componentWillMount() {
        console.log("Component Will Mount | MainLayout.js");
    }

    componentDidMount() {
        console.log("Component Did Mount | MainLayout.js");
    }

    componentWillUpdate() {
        console.log("Component Will Update | MainLayout.js");
    };

    shouldComponentUpdate() {
        console.log("Should Component Update | MainLayout.js");
        return true;
    };

    componentDidUpdate() {
        console.log("Component Did Update | MainLayout.js");
    };

    componentWillUnmount() {
        console.log("componentWillUnmount | MainLayout.js");
    }
    //lifecycle methods END!

    // Это не все функции жизненного цикла, остальные вы можете узнать 
    // посмотрев в документацию реакта (https://reactjs.org) 

    render() {
        return (
            <div className="wrapper">
                <h1 className="page-title">React Lesson: 2 [ Lifecycle, state & props ]</h1>
                <Header />

                <Posts posts={this.state.posts} addPost={this.handleAddPost} delPost={this.handleDelete} handleUpdate={this.handleUpdate}/>
            </div>
        );
    }
}

const _posts = [
    {
        title: "react",
        description: `React — это Front-end JavaScript библиотека для создания пользовательских интерфейсов от компании
Facebook. ReactJS позволяет создавать многократно используемые UI компоненты (компоненты пользовательского
интерфейса). В настоящее время, является одной из самых популярных JavaScript библиотек, имеет большой
фундамент и огромное сообщество разработчиков.`,
        links: [{title: "React", link: "https://facebook.github.io/react/"}, {title: "MonsterLessons", link: "https://monsterlessons.com/project/lessons/?page=2&search=react"}]
    },
    {
        title: "Virtual DOM",
        description: `DOM до безобразия медленный. Это не секрет. Особенно хорошо вы можете это заметить при работе с большими объемами данных. Долгое время разработчикам с этим приходилось мириться, пока не пришёл он,
супергерой React. В наши руки попал очень мощный инструмент — виртуальный DOM, который позволяет значительно
уменьшить количество перерисовок и обращений к DOM дереву.
Разберём стандартную ситуацию. Представьте, что вы владелец крупного интернет-магазина и решили отображать
на одной странице данные о всех ваших клиентах (число переваливает за несколько тысяч). Данные получаете
с сервера (AJAX или JSONP) и отрисовываете их с помощью JavaScript на странице (например, вот так).
Вы посылаете запрос на сервер каждую секунду и полностью обновляете все данные, так как не знаете,
что изменилось. В результате каждую секунду вам необходимо заново отрисовать на странице несколько тысяч DOM
элементов. Но зачастую большая часть данных остаётся неизменной и получается так, что из-за одного-двух
значений приходится перерисовывать все остальные.
Гораздо логичнее было бы получить данные и сравнить их с более ранними, а потом отрендерить на страницу только
разницу. Например, при очередном запросе пользователи под номерами 24, 678 и 3391 сделали заказ, значит и
изменить нужно только те элементы, которые принимают непосредственное участие в отображении информации об
этих пользователях. Именно этим и занимается React со своим виртуальным DOM.
Чтобы понять, как это происходит, достаточно представить себе структуру обычного документа, точнее то, как
её видит браузер. window, document, все DOM элементы для браузера являются не более, чем обычными объектами
(у некоторых подобное заявление вызывает шок и заставляет хорошенько задуматься). Такая “особенность”
строения документа позволяет создать очень похожую виртуальную структуру и держать её в памяти в виде простых
объектов, не являющихся DOM элементами. В случае же когда необходимо внести изменения сначала происходит
сравнение с виртуальной копией, вычисляется разница, после чего эта самая разница и передается в реальный
DOM. В результате мы имеем сверхбыстрые приложения с самым минимальным количеством перерисовок.
Но и это ещё не всё! Самое прекрасное в использование React не сам виртуальный DOM, а то, что вам абсолютно
не нужно ничего делать самостоятельно. Любой компонент, созданный с помощью React, уже работает с
виртуальным DOM. Таким образом, вы получаете возможность не думать о производительности при работе с DOM
элементами — React всё сделает за вас максимально качественно и быстро, и вы сможете сосредоточиться на
действительно важных задачах, а не бороться с оптимизацией.`,
        links: [ { title: "habr: Что такое Virtual DOM?", link: "https://habrahabr.ru/post/256965/" } ]
    },
    {
        title: "jsx",
        description: `Непривычно писать HTML-разметку в JavaScript коде? Вы скоро привыкните и поймёте, что это
очень удобно. На самом деле, всё, что возвращает метод компонентов render не более, чем шаблон, который
вы хотите увидеть на странице. Другими словами, здесь работает обычная шаблонизация, которую, ко всему
прочему, ещё и чрезвычайно удобна в использовании. На примере кнопки можно проследить немногое из того,
на что способен JSX: создание DOM элементов, добавление обработчиков событий, создание атрибутов
для элемента (вроде class) и наполнение элемента содержимым (другими DOM элементами или обычным текстом).
Всё это не выглядит таким впечатляющим, пока мы не дойдём до самой сути: все значения, находящиеся
в {фигурных скобках} будут вычислены. Например, в любом месте вы можете написать {2 + 3} и
получить число 5. Разумеется, вы можете использовать и более сложные вычисления, вставлять
свои переменные и функции`,
        links: [ { title: "habr: Перевод официальной документации React про JSX", link: "https://habrahabr.ru/post/319270" } ]
    },
    {
        title: "components",
        description: `Есть два типа компонентов, простые и сложные.
Простые компоненты могут это функции которые должны возвращать JSX структуру. Они принимают на вход один
параметр в который прилетают все передаваемые свойства.
Такой компонент не имеет в жизненного цикла, state, методов для работы с ним и прочих привилегий сложного
компонента. Простой компонент подойдет для случаев где нужно просто что-то вывести и все данные для этого
уже имеются. За частую он не содержит никакой логики.

Сложный же компонент, является классом, который расширяется от специального React класса Component который
добавляет в наш класс компонента жизненный цикл и функцию для работы с state (setState);`,
        links: [
            {
                title: "Simple component example",
                link: "https://github.com/uppermanis/react-course/blob/components-examples/src/js/components/simple-component.js"
            },
            {
                title: "Complex component example",
                link: "https://github.com/uppermanis/react-course/blob/components-examples/src/js/components/complex-component.js"
            }
        ]
    },
    {
        title: "react-router",
        description: `Если вам уже приходилось использовать какой-либо маршрутизатор, многие понятия вам будут
знакомы. Но в отличие от любого другого маршрутизатора, React Router использует JSX, который может выглядеть
немного странно на первый взгляд.`,
        links: [
            {title: "Learning react-router (getinstance.info)", link: "http://getinstance.info/articles/react/learning-react-router/"},
            {title: "REACT TRAINING (video)", link: "https://reacttraining.com/react-router/"},
            {title: "npm", link: "https://www.npmjs.com/package/react-router"}
        ]
    },
    {
        title: "redux",
        description: `Redux — это инструмент управления как состоянием данных, так и состоянием интерфейса в
JavaScript-приложениях. Он подходит для одностраничных приложений, в которых управление состоянием может
со временем становиться сложным. Redux не связан с каким-то определенным фреймворком, и хотя разрабатывался
для React, может использоваться с Angular или jQuery.`,
        links: [{title: "Redux", link: "http://redux.js.org/"}]
    }
];