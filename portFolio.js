let cvBtn=document.getElementById("cvBtn");
let submit=document.getElementById("submit");
let bar=document.getElementById("bar");

cvBtn.addEventListener("click",function(){
    alert("Downded succesfully")
})

submit.addEventListener("click",function(){
  let email=document.getElementById("email");
  let pass=document.getElementById("pass");

  if(email.value== "" || pass.value== ""){
    alert("fill Detail");
  }
  else{
    alert("Logged In")
  }

})
let ul=document.querySelector("ul");
bar.addEventListener("click",function(){
  ul.classList.toggle("showData");

  if(ul.className == "showData"){
    bar.className="fa-solid fa-xmark"
  }
  else{
    bar.className="fa-solid fa-bar"
  }
})