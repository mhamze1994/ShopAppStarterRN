import ApiClient from "../network/ApiClient";

export default class RepoHome {

    static myInstance = null;


    /**
     * @returns {RepoHome}
     */
    static getInstance() {
        if (RepoHome.myInstance == null) {
            RepoHome.myInstance = new RepoHome();
        }

        return this.myInstance;
    }

    async fetchData(listener){
        ApiClient.getInstance().call('users' , 'GET' , listener);
    }

}