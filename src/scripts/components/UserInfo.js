export class UserInfo {
    constructor({ fullName, category }) {
      this._fullName = document.querySelector(fullName);
      this._category = document.querySelector(category);
    }
  
    getUserInfo() {
      return {
        name: this._fullName.textContent,
        description: this._category.textContent,
      }
    }
  
    setUserInfo( name, description ) {
      this._fullName.textContent = name;
      this._category.textContent = description;
    }
  }
  