import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    constructor(props) {
        super(props);

        this.onLabelChange = (e) => {
            this.setState({label: e.target.value});
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            if (this.state.label) {
                this.props.onAdded(this.state.label);
                this.setState({label: ''})
            }
        };
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       id="newTaskInp"
                       onChange={this.onLabelChange}
                       placeholder="New task"
                       value={this.state.label}/>
                <button className="btn btn-outline-info">
                    Add
                </button>
            </form>
        )
    }
};
