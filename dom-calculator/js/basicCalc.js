
function calc() {
	var result = [];

	Array.prototype.forEach.call(document.getElementsByClassName('number'), function(input) {
		input.addEventListener('click', function() {
			result.push(this.value);
			document.getElementById("display").value = result.join('');
		});
	});

	Array.prototype.forEach.call(document.getElementsByClassName('operator'), function(input) {
		input.addEventListener('click', function() {
			result.push(this.value);
			document.getElementById("display").value = result.join('');
		});
	});

	document.getElementsByClassName('clear')[0].addEventListener('click', function() {
		result = [];
		document.getElementById("display").value = result.join('');
	});

	document.getElementsByClassName('eq')[0].addEventListener('click', function() {
		document.getElementById("display").value = eval(result.join(''));
	});
}



calc();