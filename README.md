# Visualization Software Design


Brian Luu

INFO 474


## MysteryChart API 

To create MysteryChart, you must have a div called 'my-div', and an svg inside called 'my-svg'.

``` html
<div class="container" id="my-div">
	<svg id="my-svg">
	</svg>
</div>
```

In your JavaScript file you can then create MysteryChart with the follow calls:

```javascript
var myChart = MysteryChart();
var chartWrapper = d3.select('#my-div').datum(dataset).call(myChart);
```

You must pass in a dataset that must be an array of objects. One field of the object must be the label and another field must be the count. E.g. {label: 'Mike', count: 100}


| Method | Description |
| ------ | ----------- |
| legendRectSize | Sets the legend's rectangle size to given value
