

// Desenho area 1
var svg1 = d3.select("#chart-area1").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var circle1 = svg1.append("circle")
	.attr("cx", 200)
	.attr("cy", 200)
	.attr("r", 50)
    .attr("fill", "green");
    
// Desenho area 2 
var svg2 = d3.select("#chart-area2").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var circle2 = svg2.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 70)
    .attr("fill", "grey");
    
// Desenho area 3
var svg3 = d3.select("#chart-area3")
	.append("svg")
	.attr("width", 400)
	.attr("height", 400);

svg3.append("line")
	.attr("x1", 20)
	.attr("y1", 70)
	.attr("x2", 100)
	.attr("y2", 350)
	.attr("stroke", "brown")
	.attr("stroke-width", 5);

svg3.append("rect")
	.attr("x", 200)
	.attr("y", 50)
	.attr("width", 240)
	.attr("height", 120)
	.attr("fill", "blue")

svg3.append("ellipse")
	.attr("cx", 300)
	.attr("cy", 300)
	.attr("rx", 50)
	.attr("ry", 70)
    .attr("fill", "yellow");
    
// Desenho area 4
// utilizar dados

var data = [25, 20, 10, 12, 15];

var svg4 = d3.select("#chart-area4")
            .append("svg")
            .attr("width", 400)
            .attr("height", 400);

var circles4 = svg4.selectAll("circle")
                .data(data);
circles4.enter()
    .append("circle")
        .attr("cx", function(d,i){
            return (i * 50) + 50;
        })
        .attr("cy", 25)
        .attr("r", function(d,i){
            return d;
        })
        attr("fill", blue);