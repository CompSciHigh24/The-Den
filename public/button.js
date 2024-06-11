console.log("button running")
const buttons = document.querySelectorAll(".delete");

for (let i = 0; i < buttons.length; i++) {
  let deleteButton = buttons[i].id;
  buttons[i].addEventListener("click", () => {
    console.log("clicked")
    fetch("/order/" + deleteButton, {
      method: "DELETE",
    }).then(() => {
      window.location.href = "/order/admin";
    });
  });
}
