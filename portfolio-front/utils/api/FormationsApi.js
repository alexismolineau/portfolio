import axios from "axios";

export default class FormationsApi{

    static getAllFormations(){
        return axios.get('http://127.0.0.1:8000/api/formations')
            .then(response =>  {
                return response
            })
    }



}