//step-1:Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
//step-2: get the email address inside the emain input field
//always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email=emailField.value;
//step-3: get password 
//3.1set id on the html element 
//3.2 get the element 
//3.3 get the value from element
const passwordField=document.getElementById('user-password');
const password=passwordField.value;
console.log(email, password)

//do not verify email password on the clint side
//step 4: verify email and password
if(email==='sontan@baap.com' && password==='secret'){
    console.log('Valid User')
}
else {
    console.log('Invalid User')
}
})