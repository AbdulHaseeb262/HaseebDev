const logo = document.querySelector(".logo");

if (logo) {
  logo.addEventListener("click", () => {
    //redirect
    window.location.href = "index.html";
  });
}
