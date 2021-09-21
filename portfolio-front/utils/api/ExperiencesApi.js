import axios from "axios";

export default class ExperiencesApi{

    static getAllExperiences(){
        return axios.get( process.env.NEXT_PUBLIC_API_URL + '/experiences')
            .then(response =>  {
                return response
            })
    }



}