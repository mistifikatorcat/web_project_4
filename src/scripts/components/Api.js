const fetcher = (url, header) => {
    fetch(url,header)
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        Promise.reject(`Error: ${res.status}`);
      });
  } 

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
        return fetcher(`${this._baseUrl}/me`, {
            headers: this._headers
        })
    }
  }
