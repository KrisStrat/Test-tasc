let x = document.getElementById('buy');
let c = document.getElementById('close');
let i = document.getElementById('pop_up');
function open() {
 i.style.display = "block";
}
function close() {
  i.style.display = "none";
}
 x.addEventListener("click", open);

if (i.style.display === "block") {
  c.addEventListener("click" , close);
}
