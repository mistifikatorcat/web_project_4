const fetcher = (url, header) => 
    fetch(url, header).then((res) =>
    res.ok ? res.json() : Promise.reject(`Something went wrong: ${res.status}`)
      ); 

  export class Api {
    constructor({baseUrl, headers}){
        this._baseUrl = baseUrl;
        this._headers = headers;
    };
    getInitialCards(){
        return fetcher(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
    }
    getUserInfo(){
        return fetcher(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
    }
  }
