window.addEventListener("load", function(){

    document.getElementById("showPwd").checked = false;

    handleShowHidePwd();

});

function handleShowHidePwd(){
    
    const showPwd = document.getElementById("showPwd");
    const pwd = document.getElementById("password");

    showPwd.addEventListener("change", function () {
        if (showPwd.checked) {
            pwd.type = "text";
        }
        else
            pwd.type = "password";
    })
}