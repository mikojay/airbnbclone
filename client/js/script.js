//await window load
window.onload = () => {
	axios.get('/api/properties')then( (res) => {
		//set properties to api
		let properties = res.data
		//target properties
		let prperties_box = document.getElementbyId('properties')
	}
}

//display every property in the dom
