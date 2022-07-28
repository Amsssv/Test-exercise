class UserService {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.authenticate_user = this.authenticate_user.bind(this)
    }

    set username(username) {
        this._username = username
    }

    get username() {
        return this._username
    }

    set password(password) {
        this._password = password
    }

    get password() {
        throw "You are not allowed to get password"
    }

    authenticate_user() {
        let xhr = new XMLHttpRequest();
        let url = new URL('https://examples.com/api/user/authenticate');
        url.searchParams.append('username', this._username);
        url.searchParams.append('password', this._password);

        xhr.open('GET', url.href, true);
        xhr.responseType = 'json';
        xhr.send();

        xhr.onload = function() {
            if(xhr.status !== 200) {
               return xhr.response;
            } else {
                return true;
            }
        }
    }
}
let username = $('#username').val();
let password = $('#password').val();

let res = new UserService(username, password)

$('#login').click(() => {
    res.authenticate_user()? document.location.href = '/home': alert(res);
})