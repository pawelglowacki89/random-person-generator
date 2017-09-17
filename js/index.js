(function(){
	const action = document.getElementById('create');
	const formCheck = document.querySelectorAll('input');
	const select = formCheck[formCheck.length - 1];
	const personDisplay = document.getElementById('detailWindow');
	const clone = document.getElementById('copy');

	action.addEventListener('click', () => {
		$(personDisplay).empty();
	  	getData();
	})

	clone.addEventListener('click', () => {
		copyData();
	})

	select.addEventListener('click', () => {
			for(x = 0; x < formCheck.length - 1; x++) {
				if(formCheck[x].checked == false) {
					formCheck[x].checked = true;
				} else {
					formCheck[x].checked = false;
				}
			} 
	})
	
	function getData() {
		$.ajax({
  		url: 'https://randomuser.me/api/',
  		dataType: 'json',
  		success: showData
		});		
	}

	function showData(resp) {		
		const personDetails = resp.results[0];
 		const picture = personDetails.picture;
		const dateOfBirth = personDetails.dob;
		const phone = personDetails.cell;
		const email = personDetails.email;
		const gender = personDetails.gender;
		const location = personDetails.location.city;
		const name = personDetails.name.first;
		const surname = personDetails.name.last;
		const title = personDetails.name.title;
		const pictureLarge = picture.large;
		const pictureMedium = picture.medium;
		const pictureThumbnail = picture.thumbnail
		const genderInfo = 'Picture of ' + gender + ' person';

 		for(x = 0; x < formCheck.length; x++) {
 			if(formCheck[x].checked) {
		 		switch(formCheck[x].name) {
		 			case 'dob':
		 				$(personDisplay).append('<li>' + dateOfBirth + '</li>');
		 				break;
		 			case 'cell':
		 				$(personDisplay).append('<li>' + phone + '</li>');
		 				break;
		 			case 'email':
		 				$(personDisplay).append('<li>' + email + '</li>');
		 				break;
		 			case 'gender':
		 				$(personDisplay).append('<li>' + gender + '</li>');
		 				break;
		 			case 'locationCity':
		 				$(personDisplay).append('<li>' + location + '</li>');
		 				break;
		 			case 'nameFirst':
		 				$(personDisplay).append('<li>' + name + '</li>');
		 				break;
		 			case 'nameLast':
		 				$(personDisplay).append('<li>' + surname + '</li>');
		 				break;
		 			case 'nameTitle':
		 				$(personDisplay).append('<li>' + title + '</li>');
		 				break;
		 			case 'pictureLarge':
		 				$(personDisplay).append('<li><img alt="' + genderInfo + '" src="' + pictureLarge +'">');
		 				break;
		 			case 'pictureMedium':
		 				$(personDisplay).append('<li><img alt="' + genderInfo + '" src="' + pictureMedium +'">');
		 				break;
		 			case 'pictureThumbnail':
		 				$(personDisplay).append('<li><img alt="' + genderInfo + '" src="' + pictureThumbnail +'">');
		 				break;
				}
			}
 		}

 		showHTML();
 	}

 	function showHTML() {
 		const htmlBox = document.querySelector('textarea[name="htmlCode"]');
 		htmlBox.innerText = personDisplay.innerHTML;
 	}

 	function copyData() {
 		const htmlBox = document.querySelector('textarea[name="htmlCode"]');
 		htmlBox.select();

 		try {
    	const successful = document.execCommand('copy');
    	//const msg = successful ? 'successful' : 'unsuccessful';
    	//console.log('Copying text command was ' + msg);
  	} catch (err) {
    	console.log('Oops, unable to copy');
  	}
 	}


})();
