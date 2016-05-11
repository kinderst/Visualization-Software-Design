# Visualization Software Design


Brian Luu

INFO 474


## MysteryChart API 

To create MysteryChart, you must have a div called 'my-div', and a svg inside called 'my-svg'.

``` html
<div class="container" id="my-div">
	<svg id="my-svg">
	</svg>
</div>
```

In your JavaScript file you can then create MysteryChart with the following calls:

``` javascript
var myChart = MysteryChart();
var chartWrapper = d3.select('#my-div').datum(dataset).call(myChart);
```

You must pass in a dataset that must be an array of objects. One field of the object must be the label and another field must be the count. E.g. {label: 'Mike', count: 100}


### MysteryChart Methods

| Method | Description |
| ------ | ----------- |
| colors | Sets the chart's colors. Pass in a string with colors separated by a space. Can also be hexadecimal values. e.g. "red #FFFFFF blue" |
| size | Sets the chart's size. Pass in an integer value |
| holeWidth | Sets the chart's hole size. Pass in an integer value |
| legend | Set legend's status (visible or not). Pass in string "true" to show, "false" to hide |
| legendRectSize | Sets the legend's rectangle size to given value. Pass in an integer value. |
| legendSpacing | Sets the legend's spacing. Pass in an integer value. |


