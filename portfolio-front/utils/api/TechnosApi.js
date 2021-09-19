import axios from "axios";

export default class TechnosApi{

    static getAllTechnos(){
        return axios.get('http://127.0.0.1:8000/api/technos')
            .then(response =>  {
                return response
            })
    }



}