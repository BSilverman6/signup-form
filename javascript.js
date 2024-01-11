
const passwordZ = document.querySelectorAll('input[type="password"');
const noMatchWarning = document.querySelector('.no-PWD-match');
const submit = document.querySelector(".form-submit");


passwordZ.forEach((item)=>item.addEventListener("keyup",()=> checkPassword()))


function checkPassword(){
    let hasMatchWarning = document.querySelector('.no-PWD-match')==null? false:true;
    if (passwordZ[0].value===passwordZ[1].value&&passwordZ[0].value.length>0&&passwordZ[1].value.length>0&&hasMatchWarning){
        passwordZ[0].parentNode.removeChild(noMatchWarning);
        console.log("Warning Removed");
        hasMatchWarning=false;
    }else if (passwordZ[0].value!==passwordZ[1].value&&!hasMatchWarning){
        passwordZ[0].parentNode.appendChild(noMatchWarning);
        console.log("Warning Added");
        hasMatchWarning=true;
    };

    /*if (hasMatchWarning===true){
        submit.disabled=true;
    }else{
        submit.disabled=false;
    };*/
}

function validatePasswords(){
    console.log("validating Passwords")
    if (passwordZ[0].value===passwordZ[1].value){
        return true;
    }else{
        return false;
    }
}
