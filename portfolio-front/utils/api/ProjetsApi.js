import axios from "axios";

export default class ProjetsApi{

    static getAllProjets(){
        return axios.get('http://127.0.0.1:8000/api/projets')
            .then(response =>  {
                return response
            })
    }



}