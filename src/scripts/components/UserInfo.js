export class UserInfo {
    constructor({ fullName, category, profilePic }) {
      this._fullName = document.querySelector(fullName);
      this._category = document.querySelector(category);
      this._profilePic = document.querySelector(profilePic);
    }
  
    getUserInfo() {
      return {
        name: this._fullName.textContent,
        description: this._category.textContent,
        picture: this._profilePic.src
      }
    }
  
    setUserInfo( {name, about} ) {
      this._fullName.textContent = name;
      this._category.textContent = about;
    }

    setUserImage({picture}){
      this._profilePic.src = picture;
    }

  }
  