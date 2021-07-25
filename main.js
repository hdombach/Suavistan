//load html element from file into element named content
function loadPage(page) {
	console.log('loadPage');
	var xhr= new XMLHttpRequest();
	xhr.open('GET', page + '.html', true);
	xhr.onreadystatechange= function() {
    	if (this.readyState!==4) return;
   		if (this.status!==200) return; // or whatever error handling you want
		let content = document.getElementById('content');
		content.innerHTML = this.responseText;
		console.log(this.responseText);
	};
	xhr.send();
};

function setup() {
	console.log('setUp');
	document.getElementsByName('homeBtn').forEach(function(element) {
		element.onclick = function() {
			loadPage('home');
		}
	});

	document.getElementsByName('meetingsBtn').forEach(function(element) {
		element.onclick = function() {
			console.log('meetings');
		}
	});
}

loadPage('home');