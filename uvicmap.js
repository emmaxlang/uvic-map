function initMap() {


		var uvic1 = {lat:48.4634, lng:-123.3117};

    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uvic1
        });

  	var marker1 = new google.maps.Marker({
          position: uvic1,
          map: map
        });
  marker1.addListener('click', alertonclick);
        
 	  var uvic2 = {lat:48.4636, lng:-123.3119};
    var marker2 = new google.maps.Marker({
          position: uvic2,
          map: map
        }); 
  marker2.addListener('click', alertonclick);      
        
    var uvic3 = {lat:48.4636, lng:-123.3120};
    var marker3 = new google.maps.Marker({
          position: uvic3,
          map: map
        }); 
   marker3.addListener('click', alertonclick);   
 
      }

function alertonclick () {
  console.log("welcome to uvic")



}      
