function validCorreo(){
    var correo1 = document.getElementById("form6Example5");
    var correo2 = document.getElementById("form6Example51");
    var errorForm1 = document.getElementById("errorForm1");
    var errorForm2 = document.getElementById("errorForm2");
    var valid = false;
    var expresion = /\w+@\w+\.+[a-z]/;

    if(correo1.value.length > 0 && expresion.test(correo1.value)){
        console.log("correo valido");
        errorForm1.style.visibility = "hidden";
        correo1.style.border = "1px solid #ced4da";
        valid = true;
    }else{
        correo1.style.border = "1px solid red";
        errorForm1.style.visibility = "visible";
        valid = false;
    }

    if(correo2.value.length > 0 && expresion.test(correo2.value)){
        console.log("correo valido");
        errorForm2.style.visibility = "hidden";
        correo1.style.border = "1px solid #ced4da";
        valid = true;
    }else{
        correo2.style.border = "1px solid red";
        errorForm2.style.visibility = "visible";
        valid = false;
    }

    if(valid){
        if(correo1.value == correo2.value){
            correo1.style.border = "2px solid green";
            correo2.style.border = "2px solid green";
        }else{
            correo1.style.border = "1px solid red";
            correo2.style.border = "1px solid red";
            alert("Los correos no coinciden");
        }
    }
   

}