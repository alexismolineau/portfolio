import axios from "axios";

export default class ExperiencesApi{

    static getAllExperiences(){
        return axios.get('http://127.0.0.1:8000/api/experiences')
            .then(response =>  {
                return response
            })
    }



}