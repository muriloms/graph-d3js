

// Desenho area 1
d3.json("data/ages.json").then(function(data){
	data.forEach(function(d){
		d.age = +d.age;
	});
	var svg1 = d3.select("#chart-area1")
				.append("svg")
				.attr("width", 400)
				.attr("height", 400);

	var circles = svg.selectAll("circle")
					.data(data);

	circles.enter()
			.append("circle")
			.attr("cx", function(d,i){
				return (i * 50) + 50;
			})
})
