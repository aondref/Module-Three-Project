import UserServices from '../components/UserServices';
import ListItems from './UserForm';
import FormList from './UserForm';
import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        UserServices.getUsers().then((response) => {
            this.setState({ users: response.data })
            console.log(response.data);
        });
    }
    
    render() {
        return (
            <div>
                <FormList />
                <h1>User List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.salary}</td>
                                </tr>
                            )
                        }
                        {/* {
                            this.state.list.map(
                                list =>
                                <tr key={list.name}>
                                    <td>{list.name}</td>
                                    <td>{list.email}</td>
                                    <td>{list.salary}</td>
                                </tr>
                            )
                        } */}
                    </tbody>
                </table>
            </div>
        )
    }
}
 
export default User;