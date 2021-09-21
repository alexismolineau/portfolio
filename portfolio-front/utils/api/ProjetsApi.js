import axios from "axios";

export default class ProjetsApi{

    static getAllProjets(){
        return axios.get(process.env.NEXT_PUBLIC_API_URL + '/projets')
            .then(response =>  {
                return response
            })
    }



}