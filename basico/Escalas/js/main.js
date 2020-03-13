

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

var superscript = "⁰¹²³⁴⁵⁶⁷⁸⁹",
    formatPower = function(d) { return (d + "").split("").map(function(c) { return superscript[c]; }).join(""); };

var margin = {top: 40.5, right: 40.5, bottom: 50.5, left: 60.5},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width]);

var y = d3.scaleLog()
    .base(Math.E)
    .domain([Math.exp(0), Math.exp(9)])
    .range([height, 0]);

var xAxis = d3.axisBottom()
    .scale(x);

var yAxis = d3.axisLeft()
    .scale(y)
    .tickFormat(function(d) { return "e" + formatPower(Math.round(Math.log(d))); });

var line = d3.line()
    .x(function(d) { return x(d[0]); })
    .y(function(d) { return y(d[1]); });

var svg2 = d3.select("#chart-area2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg2.append("g")
    .attr("class", "axis axis--y")
    .attr("transform", "translate(-10,0)")
    .call(yAxis);

svg2.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + (height + 10) + ")")
    .call(xAxis);

svg2.append("path")
    .datum(d3.range(100).map(function(x) { return [x, x * x + x + 1]; }))
    .attr("class", "line")
	.attr("d", line);
	

// Desenho area 3 - Escla de Tempo
plot3();
function plot3(){
	// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 100, left: 50},
width = 400 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%d-%b-%y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg3 = d3.select("#chart-area3").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
	  "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("data/datetime_data.csv").then(function(data) {


// format the data
data.forEach(function(d) {
  d.date = parseTime(d.date);
  d.close = +d.close;
});

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.date; }));
y.domain([0, d3.max(data, function(d) { return d.close; })]);

// Add the valueline path.
svg3.append("path")
  .data([data])
  .attr("class", "line")
  .attr("d", valueline);

// Add the X Axis
svg3.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x)
		  .tickFormat(d3.timeFormat("%Y-%m-%d")))
  .selectAll("text")	
	.style("text-anchor", "end")
	.attr("dx", "-.8em")
	.attr("dy", ".15em")
	.attr("transform", "rotate(-65)");

// Add the Y Axis
svg3.append("g")
  .attr("class", "axis")
  .call(d3.axisLeft(y));

});
}

// Desenho area 4 - Escala ordinal
const data = ["I", "II", "III"];

  const nameScale = d3.scaleOrdinal()
    .domain(data)
    .range(["Jan", "Feb", "Mar"]);

  const widthScale = d3.scaleOrdinal()
    .domain(data)
    .range([300, 100, 500]);

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  d3.select("#chart-area4")
	.selectAll("svg")
	.attr("width", "400")
	.attr("height", "400")
    .data(data)
    .enter()
    .append("div")
    .text(nameScale)
    .style("width", d => widthScale(d) + "px")
	.style("background-color", color);
	
// Desenho area 5 - Escala Band
var svg3 = d3.select("#chart-area5")
    .append("svg")
    .attr("width", "400")
    .attr("height", "400");

d3.json("data/buildings.json").then(function(data){
    console.log(data);

    data.forEach(function(d) {
        d.height = +d.height;
    });

    var x = d3.scaleBand()
        .domain(["Burj Khalifa", "Shanghai Tower", 
            "Abraj Al-Bait Clock Tower", "Ping An Finance Centre", 
            "Lotte World Tower", "One World Trade Center",
            "Guangzhou CTF Finance Center"])
        .range([0, 400])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    var y = d3.scaleLinear()
        .domain([0, 828])
        .range([0, 400]);

    var rects = svg3.selectAll("rect")
            .data(data)
        .enter()
            .append("rect")
            .attr("y", 0)
            .attr("x", function(d){
                return x(d.name);
            })
            .attr("width", x.bandwidth)
            .attr("height", function(d){
                return y(d.height);
            })
            .attr("fill", function(d) {
                return "grey";
            });

})
