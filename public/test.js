$(document).ready(async function(){

    var firebaseConfig = {
        apiKey: "AIzaSyBmO4dLGt5aasYgt9iIcnadjE21Hfw8RCE",
        authDomain: "recommend-app-c2184.firebaseapp.com",
        projectId: "recommend-app-c2184",
        storageBucket: "recommend-app-c2184.appspot.com",
        messagingSenderId: "630278469111",
        appId: "1:630278469111:web:04d2046960c64b4c432af2",
        measurementId: "G-8PSJ51KHDJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //   firebase.analytics();
    var db = firebase.firestore();

    db.collection("user").doc("aHmJnWcgapfKo1HyFU0bjh0cc0J2").set("shirt3");
    
//===================DB setting above===================
});





	var previous_path = new Array();

	var chosen = new Array();

	function chooseImg(id,src){

		element = document.getElementById(id)
		if (element.src.match("lgton"))
		{
			element.src = previous_path[id];
			chosen[id.slice(3)] = 0;			
		} 
		else 
		{
			previous_path[id] = src;
			element.src = "../images/lgton.jpg";
			chosen[id.slice(3)] = 1;
		}
	 }

	function show(){
		var total;
		total = "";			
		for (var i=0;i<=chosen.length;i++){
			if (chosen[i] == 1){
			total += String(i);			
			}			
		}
		if (total != ""){
			alert(total);			
		}			
		//console.log(total);		
	}

	function getQueryVariable(variable)
	{
	    var query = window.location.search.substring(1);
	    var vars = query.split("&");
	    for (var i=0;i<vars.length;i++) {
	        var pair = vars[i].split("=");
	        if(pair[0] == variable){return pair[1];}
	    }
	    return(false);
	}


	var count = getQueryVariable("id");

	function Next(){
		if(count==NaN||count==false){
			window.location = "test.html?id=2";	
			
			db.collection("users").doc("aHmJnWcgapfKo1HyFU0bjh0cc0J2").set("shirt2");
			
		}
		else
		{
		if (count<2){			
			count = parseInt(count)+1;
			window.location = "test.html?id="+count;
				
			db.collection("users").doc("aHmJnWcgapfKo1HyFU0bjh0cc0J2").set("shirt3");
		}
		else
		{
			window.location = "end.html";
		}	
		}	
	}

