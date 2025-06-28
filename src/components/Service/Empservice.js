import axios from "axios";
employees_url="https://localhost:8080/api/employees"
class Empservice{
    getEmployees(){
        return axios.get(employees_url)
    }
}
export default new Empservice();
