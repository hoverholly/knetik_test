const https = require('https');
 
https.get('https://recruitment-test-api.devsandbox.knetikcloud.com/devices', (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {

    var obj  = JSON.parse(data)
    var arr = obj.content;

	for(var i = 0; i < arr.length; i++){
	  	//var tablename = arr[i].tablename;
	  	console.log('Connection Status: '+arr[i].connected+", Location Name: "+arr[i].location+", Updated At: "+arr[i].updated_at);
	}
    

    
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

//console.log('This example is different!');