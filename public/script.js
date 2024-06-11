console.log("script running");

const createForm = document.querySelector("form");
createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const OrderData = new FormData(createForm);
  const reqBody = Object.fromEntries(OrderData);
  console.log(reqBody);

  fetch("/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),


  })

  .then (() => {
      window.location.href= "/thankyou.html";

      })
});
