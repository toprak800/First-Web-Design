function validateForm()
{
	var frm = document.forms[0];
	
	if (frm.name.value == "")
	{
		alert("First name required");
		return false;
	}
	
	if (frm.name.value.length < 2 || frm.name.value.length > 20)
	{
		alert("First name should be 2-20 chars.");
		return false;
	}
	var frm = document.forms[0];
	
	if (frm.surname.value == "")
	{
		alert("Surname name required");
		return false;
	}
	
	if (frm.surname.value.length < 2 || frm.surname.value.length > 20)
	{
		alert("Surname should be 2-20 chars.");
		return false;
	}
	
	
	
	if (confirm("You are sending your info to server.\nDo you want to continue?"))
	{
		setCookie();
		return true;
	}
	else
		return false;
}	

