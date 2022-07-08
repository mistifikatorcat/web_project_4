const fetcher = (url, header) => 
fetch(url, header).then((res) =>
res.ok ? res.json() : Promise.reject(`Something went wrong: ${res.status}`)
  );  //doesn't work inside of the class :(

  export class Api {
    constructor({baseUrl, headers}){
        this._baseUrl = baseUrl;
        this._headers = headers;
    };

    getUserInfo(){
        return fetcher(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
    }

    editProfile(data){
        return fetcher (`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.category
            })
        });

    }
    editProfilePic(data){
        return fetcher (`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        });
    }
    
    getInitialCards(){
        return fetcher(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
    }
    createCard(data){
        return fetcher (`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link
            })
        });
    }
    likeCard(id) {
        return fetcher(`${this._baseUrl}/cards/likes/${id}`, {
          method: "PUT",
          headers: this._headers,
        });
      }
    
    unlikeCard(id) {
        return fetcher(`${this._baseUrl}/cards/likes/${id}`, {
          method: "DELETE",
          headers: this._headers,
        });
      }
    
    deleteCard(id) {
        return fetcher(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
          });

    }
    
  }
