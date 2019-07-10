function Validate_Info()
{
  if(isValid())
  {
      if(document.getElementById('Pssw').value != "")
      {
          if(document.getElementById('Pssw').value === document.getElementById('Cn_Pssw').value)
          {
                window.alert("Click OK to continue");
          }
          else
          {
                window.alert("Oops your Passwords do not match");
          }
      }
      else
      {
          window.alert("Please enter a Password");
        }
  }

  else
    {
      window.alert("Please enter a valid email address");
    }
}

function isValid()
{
      var email = document.getElementById('EMAIL').value;
      var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      return re.test(email);
}
