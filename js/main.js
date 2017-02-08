(function(){
	console.log("SEAF fired");

	var carButtons = document.querySelectorAll(".thumbInfo img"),
	modelName = document.querySelector(".modelName"),
	priceInfo = document.querySelector(".priceInfo"),
	modelDetails = document.querySelector(".modelDetails");



	function getPlz(url) {
		httpRequest = new XMLHttpRequest();

			if(!httpRequest){
				console.log("not httpRequest if ran");
				alert("no way");
				return false;
			}
		
			httpRequest.onreadystatechange = showPlz;
			httpRequest.open('GET', "includes/ajaxQuery.php"+ '?model=' +this.id);
			httpRequest.send();
	}

	function showPlz(){
		if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status ===200){
			carData = JSON.parse(httpRequest.responseText);

			modelName.firstChild.nodeValue = carData.modelName;

			[].forEach.call(document.querySelectorAll('.hidden'), function(item){
				item.classList.remove('.hidden');
			})

			modelName.innerHTML = carData.modelName;
			priceInfo.innerHTML = carData.pricing;
			modelDetails.innerHTML = carData.modelDetails;
			
		}
	}

	[].forEach.call(carButtons, function(el){
		el.addEventListener('click', getPlz, false);
	});




})();