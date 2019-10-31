import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import './app.css';

export default class App extends Component {

    curId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Create app'),
            this.createTodoItem('Do the laundry')
        ],
        searchText: '',
        filter: 'all' //all, active, done
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.curId++
        }
    }

    constructor(props) {
        super(props);

        this.deleteItem = (id) => {
            this.setState(({todoData}) => {
                const idx = todoData.findIndex((el) => el.id === id);
                const newData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

                return {
                    todoData: newData
                };
            });
        };

        this.addItem = (val) => {
            this.setState(({todoData}) => {
                return {
                    todoData: [...todoData, this.createTodoItem(val)]
                };
            });
        };

        this.toggleProperty = (arr, id, prop) => {
            const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [prop]: !oldItem[prop]}; //new property rewrites the old one
            return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
        };

        this.toggleImportant = (id) => {
             this.setState(({todoData}) => {
                 return {todoData: this.toggleProperty(todoData, id, 'important')};
             });
        };

        this.toggleDone = (id) => {
            this.setState(({todoData}) => {
                return {todoData: this.toggleProperty(todoData, id, 'done')};
            });
        };

        this.search = (arr, searchText) => {
            if(searchText.length === 0)
                return arr;
          return arr.filter((item)=> item.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        };

        this.onSearchChange = (searchText) => {
            this.setState({searchText});
        };

        this.filter = (arr, filter) => {
            switch (filter) {
                case 'all':
                    return arr;
                case 'active':
                    return arr.filter((item) => !item.done);
                case 'done':
                    return arr.filter((item) => item.done);
                default:
                    return arr;
            }
        };

        this.onFilterChange = (filter) => {
            this.setState({filter});
        };

    };

    render() {
        const {todoData, searchText, filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, searchText), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.toggleImportant}
                          onToggleDone={this.toggleDone}/>
                <ItemAddForm onAdded={this.addItem}/>
            </div>
        )
    };
};
