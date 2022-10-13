// var credentials;
const store_data = () => {
    const NameofUser=document.querySelector('.js-name').value;
    const userEmail=document.querySelector('.js-email').value;
    const userName=document.querySelector('.js-username').value;
    const userPass=document.querySelector('.js-pass').value;
    const success=document.querySelector('.signup_success');
    console.log(userName, userPass);
    localStorage.setItem(
      "credentials",
      JSON.stringify({ username: userName, password: userPass,name:NameofUser,email:userEmail })
    );
        success.classList.add('open_success');
        setTimeout(function()
        {location.replace("./login.html")}
         ,2000);
  };


  var check = function() {
    const nameofaccount="Văn Sìnl";
    const name_admin='tinbalon2';
    const pass_admin='123456';
    var credentials = JSON.parse(localStorage.getItem("credentials"));
    console.log(credentials)
    const userName=document.querySelector('.js-username-login').value;
    const userPass=document.querySelector('.js-pass-login').value;
    const login_false=document.querySelector('.js-false');
    const button=document.querySelector('.js-button');
if(document.querySelector('.js-username-login').value ==name_admin && document.querySelector('.js-pass-login').value==pass_admin)
{
    location.replace("./index_login_admin.html")
}
else if (document.querySelector('.js-username-login').value ==credentials.username 
    && document.querySelector('.js-pass-login').value==credentials.password ) {
    location.replace("./index_login_success.html")
   
} else {
    login_false.classList.add('open_false');
}
}


