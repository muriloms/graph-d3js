

// Desenho area 1 - Linear Scale

var svg = d3.select("#chart-area1")
	.append("svg")
	.attr("width", "400")
	.attr("height", "400");

d3.json("data/buildings.json").then(function(data){

    data.forEach(d => {
        d.height = +d.height;
    });

    var y = d3.scaleLinear()
        .domain([0, 828])
        .range([0, 400]);

    var rects = svg.selectAll("rect")
            .data(data)
        .enter()
            .append("rect")
            .attr("y", 0)
            .attr("x", function(d, i){
                return (i * 60);
            })
            .attr("width", 40)
            .attr("height", function(d){
                return y(d.height);
            })
            .attr("fill", function(d) {
                return "grey";
            });

});

// Desenho area 2 - Escala logatirma

var margin = {
    left: 100,
    right: 10, 
    top: 10,
    bottom: 100
};

var width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


var g = d3.select("#chart-area2")
	.append("svg")
	    .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + ", " + margin.top);

d3.json("data/buildings.json").then(function(data){

    data.forEach(d => {
        d.height = +d.height;
    });

    var x = d3.scaleBand()
        .domain(data.map(function(d){
            return d.name;
        }))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d){
            return d.height;
        })])
        .range([0, height]);

    var rects = g.selectAll("rect")
            .data(data)
    
    rects.enter()
    .append("rect")
        .attr("y", 0)
        .attr("x", function(d){ return x(d.name); })
        .attr("width", x.bandwidth)
        .attr("height", function(d){ return y(d.height); })
        .attr("fill", "grey");

});
	

