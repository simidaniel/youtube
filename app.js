$(document).ready(function () {


//----------------------------------------------showResult--------------------------------------------------------------
	function showResults (data){
		var items= data.items;
		console.log(items[0].snippet.thumbnails.default.url);
	}

//-----------------------------------------get request---------------------------------------------------------------	
	function getRequest(searchTerm){
		var params = {
			q:searchTerm,
			r:'json',
			part:'snippet',
			key:'AIzaSyBM7OEf8Z6eubmBF9-ulNm9coceYUjRC4g'
		},
	url='https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url,params,function (data) {
		showResults(data);
	});
}

//----------------------------------------------on submit-----------------------------------------------------------
//getRequest('david choe');
///*
$('#search-form').submit(function (event) {
	alert('submitted');
	var searchTerm = $('#search-text').val();
	alert(searchTerm);
	getRequest(searchTerm);
	event.preventDefault;
});
//*/

});