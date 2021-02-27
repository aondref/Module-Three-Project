import React from 'react'


class FormList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            id: '',
            name: '',
            email: '',
            salary: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ 
            [e.target.name]: e.target.value, 
            [e.target.name]: e.target.value, 
            [e.target.name]: e.target.value 
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const addItem = {
            name: this.state.name,
            email: this.state.email,
            salary: this.state.salary
        }

        this.setState(state => ({
            list: state.list.concat(addItem)
        }));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Salary
                        <input type="text" name="salary" value={this.state.salary} onChange={this.handleChange} />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
 
export default FormList;