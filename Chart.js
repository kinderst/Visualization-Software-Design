/* 
Brian Luu
INFO 474
Visualization Software Design


*/

'use strict';

var MysteryChart = function() {

	// variables that user is allowed to change (set to some arbitrary default values):
	// size, donutWidth, colors, legend;

	var	size = 360;
	var	donutWidth = 90;
	var	colors = d3.scale.category20b();
	var boolLegend = true;
    var legendRectSize = 16;
	var legendSpacing = 3;

	var chart = function(selection) {
		// loop thru selections using the .each method

		selection.each(function(data) {

			// empty the svg if there is already someting in it
			var svg = document.getElementById('my-svg');
			svg.innerHTML = "";

			svg = d3.select('#my-svg')
				.attr('width', size)
				.attr('height', size)
				.append('g')
				.attr('transform', 'translate(' + (size / 2) + ',' + (size / 2) + ')');

			var arc = d3.svg.arc()
				.innerRadius(size / 2 - donutWidth)
				.outerRadius(size / 2);

			var pie = d3.layout.pie()
				.value(function(d) {return d.count})
				.sort(null);

			// select path elements and bind data
			var path = svg.selectAll('path')
				.data(pie(data));
				
			// enter new path elements
			path.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function(d, i) {
					return colors(d.data.label);
				});

			if (boolLegend) {

			    // adding legend in the middle 

				var legend = svg.selectAll('.legend')
				  .data(colors.domain())
				  .enter()
				  .append('g')
				  .attr('class', 'legend')
				  .attr('transform', function(d, i) {
				    var height = legendRectSize + legendSpacing;
				    var offset =  height * colors.domain().length / 2;
				    var horz = -2 * legendRectSize;
				    var vert = i * height - offset;
				    return 'translate(' + horz + ',' + vert + ')';
				  });

				legend.append('rect')
				  .attr('width', legendRectSize)
				  .attr('height', legendRectSize)
				  .style('fill', colors)
				  .style('stroke', colors);

				legend.append('text')
				  .attr('x', legendRectSize + legendSpacing)
				  .attr('y', legendRectSize - legendSpacing)
				  .text(function(d) { return d; });
			}

		});
	};

	// sets the legend's rectangle sizes
	chart.legendRectSize = function(value) {
		if (value != "") {
			legendRectSize = value;
		}
		return this;
	}

	// sets the spacing between the legend's squares
	chart.legendSpacing = function(value) {
		if (value != "") {
			legendSpacing = value;
		}
		return this;
	}

	// Pass in a string "true" to show the legend or "false" to hide the legend
	// Legend should be turned off if chart does not have hole in middle
	chart.legend = function(value) {
		if (value != "") {
			if (value.toUpperCase() == "true".toUpperCase()) {
				boolLegend = true;
			} else {
				boolLegend = false;
			}
		}
		return this;
	}

	// Pass in a string of colors, colors should be separated by a space
	// e.g. "purple yellow green"
	chart.colors = function(value) {
		if (value != "") {
			var colorArray = value.split(" ");
			colors = d3.scale.ordinal().range(colorArray);
		}
		return this;
	}

	// Give the chart a new size. Default size is 360
	chart.size = function(value) {
		if (value != "") {
			size = value; 
		}
		return this;
	};

	// Change the chart's hole's width. The given value must be less than half of chart's
	// current size.
	chart.holeWidth = function(value) {
		if (value != "") {
			donutWidth = value;
		}
		return this;
	};

	return chart;
}