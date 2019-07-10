function Validate_Info()
{
  if(  window.alert(IS_EMAIL_FILLED()))
  {

    if(document.getElementById('Pssw').value === document.getElementById('Cn_Pssw').value)
      {
          window.alert("Congratulations you have successfully signed up!! ");
      }
    else
      {
          window.alert("Oops your Passwords do not match");
      }

    }
    else
    {
      window.alert("Please fill in the required fields");
    }
}

function IS_EMAIL_FILLED()
{
    var email = document.getElementById('EMAIL');
    if(document.getElementById('EMAIL').value =="")
    {
        return false;
    }
    window.alert(true);
    return true;
}
