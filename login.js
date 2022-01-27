//Take input email and password from a user and match it with email: "stu@letsupgrade.com" password:"12345" if email and password are same show you are logged in otherwise try again with correct email and password.

const email = prompt('Enter your Email Address?');
const password = prompt('Enter your Password');

if (email == "stu@letsupgrade.com" && password == "12345") {
    alert('You have entered correct email id and password');
    alert('Hurray! You are Logged in');
}
else{
    alert('You have entered wrong email id or Password.Please Try again');
}

