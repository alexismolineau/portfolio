
export default class MessagesApi{

    static postMessage(params, http){
        return http.post( process.env.NEXT_PUBLIC_API_URL + '/messages', params)
            .then(response =>  {
                return response
            })
    }

}