
export default class ExperiencesApi{


    static getAllExperiences(http){
        return http.get( process.env.NEXT_PUBLIC_API_URL + '/experiences')
            .then(response =>  {
                return response
            })
    }



}