function askQuestions() {
	



	var firstName = prompt('What is your first name?'),
		lastName = prompt('What is your last name?'),
		fullName = firstName + ' ' + lastName;
		


	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);
	if (age >= 18) {
		console.log('User is an adult');
	}

	else {
		console.log('User is a child')
	}

	/* hvis førstenavnet er lik general mens etternavn er ikke lik assemnly. Må sammenligne førstenavnet med etternavnet === (compare value & type)  og !== (! er ikke == er lik compare value*/
	if (firstName.toLowerCase().trim() === 'general' && lastName.toLowerCase().trim() !== 'assembly') {
		console.log('Greet the General');
	}








}

// when the page has loaded
$(function() {

	// When the user clicks an h3 element
	$('h4').on('click', function() {

	// Hide the next element
	$(this).next().slideToggle(1000);
	});
});