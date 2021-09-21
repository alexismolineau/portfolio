import axios from "axios";

export default class LienExtApi{

    static getAllLiensExt(){
        return axios.get(process.env.NEXT_PUBLIC_API_URL + '/lienexts')
            .then(response =>  {
                return response
            })
    }



}