import axios from "axios";

export default class TechnosApi{

    static getAllTechnos(){
        return axios.get( process.env.NEXT_PUBLIC_API_URL + '/technos')
            .then(response =>  {
                return response
            })
    }



}