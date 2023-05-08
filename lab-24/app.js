// Define a function to perform the AJAX request
function getData() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Update the page with the response data
			document.getElementById("result").innerHTML = this.responseText;
		}
	};
	// Set the request URL and method
	xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
	// Send the request
	xhttp.send();
}

// Attach a click event listener to the button
document.getElementById("getDataButton").addEventListener("click", function() {
	getData();
});
