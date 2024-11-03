function func()
{
  let email = document.getElementById("Email").value;
  let pass = document.getElementById('password').value;


  if(email == 'netflix@gmail.com' && pass == 'admin123')
  {
    alert("Login Successfull")
  }
  else
  {
    alert("Login denied")
  }
}

function forgetpassword()
{
  let a = prompt("Enter the Email id")
  alert('Verfication Code Send To your Email ID')
}