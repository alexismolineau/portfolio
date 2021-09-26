import axios from "axios";

export default class MessagesApi{

    static postMessage(params){
        return axios.post( process.env.NEXT_PUBLIC_API_URL + '/messages', params)
            .then(response =>  {
                return response
            })
    }

}