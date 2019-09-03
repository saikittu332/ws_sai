$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');
    $.getJSON('data.json', function (data) {  	    	
    	var d = getRandom(data, 15)
    	var count=1;
    	
    	for(let i of d){
    		
    		console.log(i['difficulty']);
    		var q = document.createElement("h3");
    		q.innerText=count+'.'+i['question'];
    		count++;
    		showData.append(q);
    		for(let j of i['options'])
    			{
    				var sol = document.createElement("p");
    				sol.innerText=j['option'];
    				showData.append(sol);	
    			}
    			
    	}
    });        
  });  
});
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;       
    }
    return result; 
}
