
const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       
       if(input.type === 'password'){
         
          input.type = 'text'
 
         
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
       } else{
          
          input.type = 'password'
 
         
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
       }
    })
 }
 document.getElementById("loginForm").addEventListener("submit", function(event) {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;
    
    if (password.length < 9) {
        event.preventDefault(); 
        document.getElementById("error").style.display = "block";
    }
});
 
 

