function initMap() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			var vsqpj = {lat: position.coords.latitude, lng: position.coords.longitude};
			var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: vsqpj
			});
		var marker = new google.maps.Marker({
			position: vsqpj,
			map: map
			});
		})
	}
}
