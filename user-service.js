

class UserService {
    var username;
    var username;

    // First of all we have to use 'let'
    // The second one we should declare properties in the constructor method

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    // Here we can't to set this.username because function has getter
    get username() {
        return UserService.username
    }
    // Here's the same situation the only difference this.password = "You are not allowed to get password"
    get password() {
        throw "You are not allowed to get password"
    }

    static authenticate_user() {
        let xhr = new XMLHttpRequest();

        // URL should be in variable using instance of the class URL
        // searching parameters we should add by "append" method

        xhr.open('GET', 'https://examples.com/api/user/authenticate?username-' +
            UserService.username + '&password' + UserService.password, true);
        xhr.responseType = 'json';

        // it should be declare with "let" because const readonly variable
        const result = false;

        // before it we must send request to the server
        xhr.onload = function () {
            if(xhr.status !== '200') { // here should be number
                result = xhr.response;
            } else {
                result = true;
            }
        }
        return result;
    }
}
// if "#login" is a button we should select it without "form"
$('form #login').click(function () {
    //we have to get value of these inputs using method "val()"
    var username = $('#username');
    var password = $('#password');

    // we can't make instance the class without "new"
    // but 'authenticate_user' is a static method so we can't use new
    // res gonna be undefined
    // method "authenticate_user" should be evoke without braces
    var res = UserService(username, password).authenticate_user();

    // here should be "===" strict compare
    if (res == true) {
        document.location.href = '/home';
    } else {
        // "res" don't have the method
        alert(res.error)
    }
})