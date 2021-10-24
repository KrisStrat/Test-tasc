window.onload = function(){
	let x = document.getElementById('buy');
	let c = document.getElementById('close');
	let i = document.getElementById('pop_up');

	function open() {
	 i.style.display = "block";
	}
	function close() {
	  i.style.display = "none";
	}

	x.addEventListener("click", function(event){
	  open();
	  event.preventDefault()

	});

	if (i.style.display = "block") {
	  c.addEventListener("click",function(event){
      close();
      event.preventDefault()

    });
	}

}
