function validation(){

var username = document.getElementById("usurname").value;

var valid_usurname_regex = /^[A-Za-2]+$/;

var pass = document.getElementById("pass").value;

var valid_pass_regex = /^[0-9]+$/;




if (!(usurname.match(valid_usurname_regex)) || !(age.match(valid_pass_regex))) {

if (!(usurname.match(valid_usurname_regex))){

document.getElementById("usurname").style.borderColor = "red";

}else{

document.getElementById("usurname").style.borderColor= "black";

}

if (!(pass.match(valid_pass_regex))){

document.getElementById("pass").style.borderColor = "red";

}else{

document.getElementById("pass").style.borderColor = "black";
}



return false;

}else{

document.getElementById("usurname").style.borderColor = "black";

document.getElementById("pass").style.borderColor = "black";

return true;
}




}