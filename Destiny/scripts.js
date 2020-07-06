// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.vendorengrams.xyz/getVendorDrops')

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  data.forEach((vendor) => {
    if (vendor.drop == 2) {
    	console.log(vendor.shorthand)
	}
  })
}

// Send request
request.send()