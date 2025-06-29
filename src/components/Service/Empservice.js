import axios from "axios";
const employees_url="http://localhost:8080/api/employees"
class Empservice{
    getEmployees(){
        return axios.get(employees_url)
    }
}
export default new Empservice();
