
export default class ApiClient {

    static myInstance = null;

    static baseUrl = "https://reqres.in/api/";

    /**
     * @returns {ApiClient}
     */
    static getInstance() {
        if (ApiClient.myInstance == null) {
            ApiClient.myInstance = new ApiClient();
        }

        return this.myInstance;
    }

    async call(route , method , listener){
        try{
            let url = ApiClient.baseUrl + route;
            listener.setInfo(url , method);
            let response = await fetch (url ,{
                method : method,
                headers : {
                    Accept : 'application/json',
                    'Content-Type': 'application/json'
                }
                });
                let json = await response.json();
                let code = response.status;
                if (this.isSuccessful(code)){
                    listener.onSuccess(code , json);
                }else{
                    listener.onFailed(code , json);
                }
        }catch (error){
            listener.onError(error);
        }
    }

    isSuccessful(code){
        return code >= 200 && code < 300;
    }

}

export class ApiResponseListener {
    

    onSuccess(code , response){
        console.log("Success on " +this.method + " : " + this.route + " -> code :"+code);
    }
      
    onFailed(code , response){
        console.log("Failed on " + this.method + " : " + this.route + " -> code :"+code);
    }
  
    onError(error){
        console.log("Error on " + this.method + " : " + this.route + " -> "+error);
    }

    setInfo(route , method){
        this.route = route;
        this.method = method;
    }
}