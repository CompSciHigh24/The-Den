console.log("script running");

const updateButton = document.querySelectorAll("form");
for (let i=0; i<updateButton.length; i++){
  updateButton[i].addEventListener("submit",(e)=>{
    e.preventDefault()
    const itemData = new FormData (updateButton[i]);
    const reqBody = Object.fromEntries(itemData);
    console.log(reqBody)

    
    fetch("/menu/admin/" + updateButton[i].dataset.id, {
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(reqBody)
    })
    .then(()=>{
      window.location.href="/menu/admin"
    })
  })
}