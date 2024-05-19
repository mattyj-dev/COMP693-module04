import React from 'react'


export default class EmployeeAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const employee = {
            name: form.name.value,
            extension: form.ext.value,
            email: form.email.value,
            title: form.title.value,
        };
        this.props.createEmployee(employee);
        form.reset();
    }

    render() {
        return (
            <form name="employeeAdd" onSubmit={this.handleSubmit}>
                Name: <input type="text" name="name" /><br />
                Extension: <input type="text" name="ext" maxLength={4} /><br />
                Email: <input type="text" name="email" /><br />
                Title: <input type="text" name="title" /><br />
                <button type="submit">Add</button>
            </form>
        );
    }
}