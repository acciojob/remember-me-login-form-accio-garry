document.getElementById("submit").addEventListener("click", ()=>{
	let username= document.getElementById("username").value;
	let password= document.getElementById("password").value;

	
	if(document.getElementById("checkbox").value){
		localStorage.setItem("Username", username);
		localStorage.setItem("Password", password);
		alert("Logged in as");
		
	}
})
