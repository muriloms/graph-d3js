

// Desenho area 1
d3.json("data/ages.json").then(function(data){
	data.forEach(function(d){
		d.age = +d.age;
	});
	var svg1 = d3.select("#chart-area1")
				.append("svg")
				.attr("width", 400)
				.attr("height", 400);

	var circles = svg1.selectAll("circle")
					.data(data);

	circles.enter()
			.append("circle")
			.attr("cx", function(d,i){
				return (i * 50) + 50;
			})
			.attr("cy", 25)
			.attr("r", function(d){
				return d.age * 2;
			})
			.attr("fill", function(d){
				if(d.name == "Tony"){
					return "blue";
				}
				else{
					return "red";
				}
			})
}).catch(function(error){
	console.log(erroe);
})

// Desenho area 2
var svg2 = d3.select("#chart-area2")
			.append("svg")
			.attr("width", "400")
			.attr("height", "400");

d3.json("data/buildings.json").then(function(data){
	data.forEach(function(d){
		d.height = +d.height;
	});

	var rects = svg2.selectAll("rect")
					.data(data)
					.enter()
					.append("rect")
					.attr("y", 0)
					.attr("x", function(d,i){
						return (i*60);
					})
					.attr("width", 40)
					.attr("height", function(d){
						return d.height;
					})
					.attr("fill", function(d){
						return "grey";
					});
})
