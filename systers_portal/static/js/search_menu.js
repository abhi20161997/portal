// Getting data from the search bars
$("#go-btn").click(function() {

	var meetup_location = document.getElementById('meetup-location-input').options[document.getElementById('meetup-location-input').selectedIndex].text;
	var date = document.getElementById('date-input').value;
	var keyword = document.getElementById('keyword-input').value;
	var selected_filter = document.getElementById('myList').value;
	var location = document.getElementById('location-input').options[document.getElementById('location-input').selectedIndex].text;

	var data = {
		"meetup_location": meetup_location,
		"date": date,
		"keyword": keyword,
		"filter" : selected_filter,
		"location": location
	};

	$.ajax({
		type: "POST",
		url: 'search/',
		data: data,
		success: function(a){
			x = document.getElementById('meetups-list')
			x.innerHTML = ""
			for(var i=0; i< a.search_results.length; i++){
				x.innerHTML = x.innerHTML+"<div class='text-bottom ml15'> \n" +
				a.search_results[i].location +"<div><a href='../"+ "\n" +
				a.search_results[i].location_slug+'/'+a.search_results[i].meetup_slug+"\n" +
				"''>"+a.search_results[i].meetup+"</a>"+"</div>"+a.search_results[i].date+"\n" +
				"<div><b>"+a.search_results[i].distance+" "+a.search_results[i].unit+"</b></div>"				
			}
		},
		dataType:'json',
		error: function(e){
			alert(e);
		}
	});
});

// Hiding the location bar until distance filter is selected
$("#myList").change(function(){
	var selected_filter = document.getElementById('myList').value;
	if(selected_filter === '1'){
		$("#location").addClass('hidden');
	}else{
		$("#location").removeClass('hidden');
	}
});
