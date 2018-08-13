1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the
   coding test then use this as an opportunity to explain what you would add.

   - My time was 3 hours
   - if the devices have GPS, I would add the geolocation and show them in an operational viewer capturing their latitude and longitude in real time.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows 
   how you've used it.

   - I have used switch case for the different options and menu filters.
   - Code:
    value_req.question("filter value? ", function(answer1) {

		switch(answer1.toString().trim()) {
				case '1':
	    		value_req.question("location value? ", function(answer2) {
		    		console.log('Result: ');
		    		console.log('Connection Status:        Location Name:           Updated At:        ');
		    		for(var i = 0; i < arr.length; i++){	
		  				if(arr[i].location==answer2.toString().trim()){
	  						console.log("    "+arr[i].connected+"     "+arr[i].location+"    "+arr[i].updated_at);
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
		    		console.log('Connection Status:        Location Name:           Updated At:         ');
		    		for(var i = 0; i < arr.length; i++){
		  				if(arr[i].parent_location==answer2.toString().trim()){
	  						console.log("    "+arr[i].connected+"    "+arr[i].location+"   "+arr[i].updated_at);
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

3. How would you track down a performance issue in production? Have you ever had to do this?

	- I would perform tests of all the processes and try to improve the response times in the sending and receiving of data.
	- yes, in different projects the response times of the processes have been improved, for example in the sending of rtp packages in some   
	  audio streaming with many simultaneous connections.

4. How would you improve the Knetik APIs that you just used?
   Please describe yourself using JSON.

   - if the devices have GPS, it will add the latitude and longitude and the timestamp to be able to monitor in real time and manage a log. In order to control and organize the devices by areas.
   - JSON:
	   [ { id: '58422422-9605-4b1d-b7d2-4e3a54a30c08',
	    location: 10,
	    mac_address: '01-14-AA-0E-11-B4',
	    connected: true,
	    parent_location: 97,
	    updated_at: '2017-06-12T10:37:18Z',
	    signal: -29,
	    latitude: -02.2170,
	    longitude: -079.8893,
	    timestamp: 1534183204 }]