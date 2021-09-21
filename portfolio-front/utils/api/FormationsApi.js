import axios from "axios";

export default class FormationsApi{

    static getAllFormations(){
        return axios.get( process.env.NEXT_PUBLIC_API_URL + '/formations')
            .then(response =>  {
                return response
            })
    }



}