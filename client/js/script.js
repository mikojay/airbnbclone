//await window load
window.onload = () => {
	axios.get('/api/properties').then((res) => {
		//set properties to api
		let properties = res.data
		//target properties
		let properties_box = document.getElementById('properties')


//display every property in the dom
properties.forEach( (p) => {
	properties_box.insertAdjacentHTML('afterBegin', `
	<div class="prop_box">
		<div class="prop_img" style="background-image: url('${p.img}')"></div>
			<div class="prop_cont">
				<div class="prop_type">
					<p>${p.type} in ${p.city}</p>
				</div>
				<div class="prop_name">
					${p.name}
				</div>
				<div class="prop_price">
					${p.price}$
				</div>
				<div class="rating">
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>
			</div>
	</div>`)
})
})
}
