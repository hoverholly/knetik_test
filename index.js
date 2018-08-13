'use strict'
//constants
const https = require('https');


//variables
var arr=null;
var readline = require('readline');
var value_req = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var flag=false;
 

//webservice method GET 
https.get('https://recruitment-test-api.devsandbox.knetikcloud.com/devices', (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {

    var obj  = JSON.parse(data)
    arr = obj.content;

    console.log(obj.content);
    
	opcionMenu();
	
  });

//main menu
function opcionMenu(){
	console.log('        ');
    console.log('******  M E N U  ******');
    console.log('1. View a list of devices for connection status, location name, and updated at');
    console.log('2. View a list of devices for filtre location,parent_location, and connected');
    console.log('3. View a list of devices all properties and devices by location');
    console.log('4. View a list of devices for connection status and signal strength');
    console.log('5. Exit');

    value_req.question("option value? ", function(answer) {
    	switch(answer.toString().trim()) {
	    	case '1':
	    		console.log('1. View a list of devices for connection status, location name, and updated at');
		      	allDevice();
		        break;
		    case '2':
		    	console.log('2. View a list of devices for filtre location,parent_location, and connected');
		        filterData();

		        break;
		    case '3':
		      	//value_req.close();
		      	console.log('3. View a list of devices all properties and devices by location');
		      	devicePropertiesFilterLocation();
		      	//opcionMenu();
		        break;
	        case '4':
		        console.log('4. View a list of devices for connection status and signal strength');
		        deviceConnectionStatus();
		        //value_req.close();
		        break;
	        case '5':
	        	//value_req.close();
	        	console.log('5. Exit . . .');
	        	process.exit(1);

	        break;
		    default:
		         console.log('not available');
		         opcionMenu();
		}
	});
}

//list of devices for connection status, location name, and updated at
function allDevice(){
	console.log('Result: ');
	console.log('Connection Status:         Location Name:             Updated At:         ');
	for(var i = 0; i < arr.length; i++){
	  	console.log("    "+arr[i].connected+"                        "+arr[i].location+"               "+arr[i].updated_at);
	}
	//value_req.close();
	opcionMenu();		    
}

//input filtre location,parent_location, and connected
function filterData(){
	console.log('        ');
	console.log('******  FILTER  ******');
  console.log('1. location');
  console.log('2. parent_location');
  console.log('3. connected - input(0 or 1)');

  flag=false;

    
	value_req.question("filter value? ", function(answer1) {

		switch(answer1.toString().trim()) {
				case '1':
	    		value_req.question("location value? ", function(answer2) {
		    		console.log('Result: ');
		    		console.log('Connection Status:         Location Name:             Updated At:         ');
		    		for(var i = 0; i < arr.length; i++){	
		  				if(arr[i].location==answer2.toString().trim()){
	  						console.log("    "+arr[i].connected+"                        "+arr[i].location+"               "+arr[i].updated_at);
							flag=true;
						}
					}
					if(flag==false){
						console.log('no data to display');
					}
					//value_req.close();
					opcionMenu();
				});
					break;
				case '2':
		    	value_req.question("parent_location value? ", function(answer2) {
		    		console.log('Result: ');
		    		console.log('Connection Status:         Location Name:             Updated At:         ');
		    		for(var i = 0; i < arr.length; i++){
		  				if(arr[i].parent_location==answer2.toString().trim()){
	  						console.log("    "+arr[i].connected+"                        "+arr[i].location+"               "+arr[i].updated_at);
							flag=true;
						}
					}
					if(flag==false){
						console.log('no data to display');
					}
					//value_req.close();
					opcionMenu();
				});
					break;
				case '3':
		    	value_req.question("connected - input(0 or 1) value? ", function(answer2) {
		    		console.log('Result: ');
		    		console.log('Connection Status:         Location Name:             Updated At:         ');
		    		switch(answer2.toString().trim()) {
	 					case '0':
    	 					for(var i = 0; i < arr.length; i++){
				  				//console.log(arr[i].connected);

				  				if(arr[i].connected){
	  								console.log("    "+arr[i].connected+"                        "+arr[i].location+"               "+arr[i].updated_at);
				  					flag=true;
				  				}
							}
	 						break;
	 					case '1':
	 					for(var i = 0; i < arr.length; i++){
				  				//console.log(arr[i].connected);
				  				if(! arr[i].connected){
	  								console.log("    "+arr[i].connected+"                        "+arr[i].location+"               "+arr[i].updated_at);
				  					flag=true;
				  				}
							}
	 						break;
    					default:
         					console.log('not available');
		    		}
		    		

		
					if(flag==false){
						console.log('no data to display');

					}
					//value_req.close();
				    opcionMenu();
				});
					break;
			default:
					console.log('Filter not available');
		    	//value_req.close();
			    opcionMenu();
	    }
	    
	  
	});
}

//devices all properties and devices by location
function devicePropertiesFilterLocation(){
	console.log('        ');
	console.log('******  FILTER  ******');
  console.log('1. list of device all properties');
  console.log('2. devices by location');

    
	value_req.question("filter value? ", function(answer1) {

		switch(answer1.toString().trim()) {
				case '1':
					console.log('Result: ');
			    console.log('id:                                  location:     mac_address:   connected: parent_location:  updated_at:    signal:');
    		
					for(var i = 0; i < arr.length; i++){
  					console.log(arr[i].id+"     "+arr[i].location+"     "+arr[i].mac_address+"     "+arr[i].connected
						+"     "+arr[i].parent_location+"     "+arr[i].updated_at+"     "+arr[i].signal);
					}
					//value_req.close();
					opcionMenu();
					break;
				case '2':
		    	value_req.question("location value? ", function(answer2) {
			    	 console.log('Result: ');
			    	 console.log('id:                                  location:     mac_address:   connected: parent_location:  updated_at:    signal:');

			    		for(var i = 0; i < arr.length; i++){
			  				if(arr[i].location==answer2.toString().trim()){
			  					console.log(arr[i].id+"     "+arr[i].location+"     "+arr[i].mac_address+"     "+arr[i].connected
		  						+"     "+arr[i].parent_location+"     "+arr[i].updated_at+"     "+arr[i].signal);
								flag=true;
							}
						}
						if(flag==false){
							console.log('no data to display');
						}
						//value_req.close();
					opcionMenu();
					});
					break;
			default:
					console.log('Filter not available');
		    	//value_req.close();
			    opcionMenu();
	    }
	    
	  
	});
}

//devices for connection status and signal strength;
function deviceConnectionStatus(){
	console.log('        ');
	console.log('******  Signal Strength  ******');
  console.log('1. Strong connection');
  console.log('2. Normal connection');
  console.log('2. Weak connection');

  flag=false;

    
	value_req.question("filter value? ", function(answer1) {

		switch(answer1.toString().trim()) {
				case '1':
						console.log('Result: ');
						console.log('Connection Status:         Location Name:             Updated At:                  signal:');
						for(var i = 0; i < arr.length; i++){
							if(parseInt(arr[i].signal)>=(0)){
		  					console.log("    "+arr[i].connected+"                        "+arr[i].location+"               "+arr[i].updated_at+"               "+arr[i].signal);
		  				}
						}
	    		 
					//value_req.close();
					opcionMenu();
					break;
				case '2':
		    	console.log('Result: ');
						console.log('Connection Status:         Location Name:             Updated At:                  signal:');
						for(var i = 0; i < arr.length; i++){
							if(parseInt(arr[i].signal)>=(-50)){
		  					console.log("    "+arr[i].connected+"                        "+arr[i].location+"               "+arr[i].updated_at+"               "+arr[i].signal);
		  				}
						}
	    		 
					//value_req.close();
					opcionMenu();
					break;
					case '3':
		    	console.log('Result: ');
						console.log('Connection Status:         Location Name:             Updated At:                  signal:');
						for(var i = 0; i < arr.length; i++){
							if(parseInt(arr[i].signal)<(-50)){
		  					console.log("    "+arr[i].connected+"                        "+arr[i].location+"               "+arr[i].updated_at+"               "+arr[i].signal);
		  				}
						}
	    		 
					//value_req.close();
					opcionMenu();
					break;
			default:
					console.log('Filter not available');
		    	//value_req.close();
			    opcionMenu();
	    }
	    
	  
	});
}

 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

//console.log('This example is different!');