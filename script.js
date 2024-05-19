document.getElementById("submit").addEventListener("click", (event)=>{
	
	event.preventDefault();
	let username= document.getElementById("username").value;
	let password= document.getElementById("password").value;

	
	if(document.getElementById("checkbox").checked){
		localStorage.setItem("Username", username);
		localStorage.setItem("Password", password);
		alert("Logged in as " + username);
		document.getElementById("myform").reset();
	}else{
		localStorage.removeItem("Username");
        localStorage.removeItem("Password");
	}
})


document.getElementById("existing").addEventListener("click", (event) => {
   
    event.preventDefault();

	let saveduser= localStorage.getItem("Username");
	if(saveduser){
		 alert("Logged in as " + saveduser);
	
	}else{
		alert("No saved user found");
	}
});











