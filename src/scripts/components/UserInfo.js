export class UserInfo{
    constructor({fullName, category }){
        this._nameInput = document.querySelector(fullName);
        this._jobInput = document.querySelector(category);
    }

getUserInfo(){
    return{
        name: this._nameInput.textContent,
        description: this._jobInput.textContent
    };
}

setUserInfo({name, description}){
    this._nameInput.textContent = name;
    this._jobInput.textContent = description;
}

}