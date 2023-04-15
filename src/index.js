/*
//� ��������:
import ReactDOM from 'react-dom';

const loginBox = () =>{
    return <span class="login">Login Box</span>;
}

const App = () =>{
    return(
        <div>Header</div>
        <loginBox/>
    );
}
ReactDOM.render(App);

*/

/*
//��� ������
import React from 'react';
import ReactDOM from 'react-dom';

const LoginBox = () =>{
    return <span className="login">Login Box</span>
}

const App = () =>{
    return(
        <div>
            <div>Header</div>
            <LoginBox/>
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById("root"));
*/

import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemsFilter from './components/items-filter';


const App = () =>{
    const todoData = [
        { label: "Wake Up", important: false, id: 1},
        { label: "Drink tea", important: true, id: 2},
        { label: "Eat breakfast", important: false, id: 3}
    ];
    return(
        <div className="container" style={{maxWidth: 800}}>
            <AppHeader  toDo={3} done= {4}/>
            <div className="row pt-2 pb-2 ">
                <div className="col-6">
                    <SearchPanel/>
                </div>
                <div className="col-6">
                    <ItemsFilter/>
                </div>
            </div>
            <TodoList todos = {todoData} />
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById("root"));

