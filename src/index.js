document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", function(event){
    event.preventDefault()
  })
});

console.log("THis is performed before the DOM is loaded")

