import axios from "axios";

export default class ProjetsApi{

    static getAllProjets(http){
        return http.get(process.env.NEXT_PUBLIC_API_URL + '/projets')
            .then(response =>  {
                return response
            })
    }



}