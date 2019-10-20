
let params = new URLSearchParams(location.search);
var city = params.get('name');
if(city!=null){    
    document.getElementById('input').value=city;
    update();
}
