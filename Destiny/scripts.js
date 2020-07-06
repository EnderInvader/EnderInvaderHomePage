const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

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

    	const h1 = document.createElement('h1')
  		h1.textContent = vendor.shorthand

		//container.appendChild(h1)
	}
  })
}

// Send request
request.send()