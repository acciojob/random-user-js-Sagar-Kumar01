//your code here
const url = "https://randomuser.me/api/";

let img = document.getElementById("img");
let info = document.getElementById("info");
let abtn = document.getElementById("abtn");
let ebtn = document.getElementById("ebtn");
let pbtn = document.getElementById("pbtn");
let getUser = document.getElementById("getUser");
let name = document.getElementById("name");

let totaldata = null;

async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  totaldata = data.results[0];
}
window.addEventListener("load", () => {
  getUser.click();
});

getUser.addEventListener("click", async () => {
	await getData();
  
    img.setAttribute("src", totaldata.picture.large);
	name.textContent = `${totaldata.name.first} ${totaldata.name.last}`
});
abtn.addEventListener("click", () => {
	if(totaldata != null){
	info.style.display = "initial"
	info.textContent = `${totaldata.dob.age}`
	}
});
ebtn.addEventListener("click", () => {
	if(totaldata != null){
	info.style.display = "initial"
	info.textContent = `${totaldata.email}`
	}
});
pbtn.addEventListener("click", () => {
	if(totaldata != null){
	info.style.display = "initial"
	info.textContent = `${totaldata.phone}`
	}
});






