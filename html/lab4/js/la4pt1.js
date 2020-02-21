<script>
function checkMe () {
// alert("event working")
    var error="";
    if (document.getElementById('myname').value==""){
        error=' PLease enter your name \n'
    }
    if (document.getElementById('address').value==""){
        error +=' PLease enter your address \n'
    }
    if (document.getElementById('city').value==""){
        error +=' PLease enter your city \n'
    }
    if (document.getElementById('state').selectedIndex==0){
        error +=' PLease enter your state mN or WI \n'
    }
    if (document.getElementById('zip').value==""){
        error+=' PLease enter your zipcode \n'
    }
    if (document.getElementById('phone').value==""){
        error+=' PLease enter your phone number \n'
    }
    if (document.getElementById('email').value==""){
        error+=' PLease enter your email \n'
    }
    if (document.getElementById('comments').value==""){
        error==' PLease enter your comments\n'
    }
    if (!document.getElementsByClassName('radios').checked){
        error +=' PLease enter your terms \n'
    }
    if (!document.getElementById('terms').checked==true){
        error+=' PLease check that you agree\n'
    }


    if (error==""){
        return true
    }
