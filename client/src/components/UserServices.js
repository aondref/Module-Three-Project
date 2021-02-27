import axios from 'axios';

const USERS_REST_API = 'http://localhost:8080/api/v1/users';

class UserServices {
    getUsers(){
        return axios.get(USERS_REST_API);
    }

    deleteUsers() {
        return axios.delete(USERS_REST_API);
    }

    
}

export default new UserServices;