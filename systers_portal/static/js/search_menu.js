$("#go-btn").click(function() {

	var city = document.getElementById('city-input').value;
	var date = document.getElementById('date-input').value;
	var keyword = document.getElementById('keyword-input').value;
	var selected_filter = document.getElementById('myList').value;
	var location = document.getElementById('location-input').value;

	var data = {
		"city": city,
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
			alert(a);
		},
		dataType:'json',
		error: function(e){
			//error has occurred
		}
	});
});

$("#myList").change(function(){
	var selected_filter = document.getElementById('myList').value;
	if(selected_filter === '1'){
		$("#location").addClass('hidden');
	}else{
		$("#location").removeClass('hidden');
	}

	// $.ajax({
	// 	type: "POST",
	// 	url: 'filter/',
	// 	data: data,
	// 	success: function(a){
	// 		alert(a);
	// 	},
	// 	dataType:'json',
	// 	error: function(e){
	// 		//error has occurred
	// 	}
	// });
});
