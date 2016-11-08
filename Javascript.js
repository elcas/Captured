

function buttonnamechange() {
    document.getElementById("buttonname").innerHTML="Thank you!";
}

function initMap() { var uluru = {lat: -30.363, lng: 191.044}; var map = new google.maps.Map(document.getElementById('map'), 
{ zoom: 4, center: uluru }); var marker = new google.maps.Marker({ position: uluru, map: map }); }
