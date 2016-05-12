(function() {

    $(document).ready(function() {
        var dataset = [{label: 'Mike', count: 100}, {label: 'John', count: 40}, {label: 'Cory', count: 420}];
        var myChart = MysteryChart();
        var chartWrapper = d3.select('#my-div').datum(dataset).call(myChart);
        var size = 300;
        // var width = 700;
        // var height = 400;
        // var num = 10;
        // var colors = ['rgb(255,0,0)', 'rgb(10,0,255)'];
        // var vertices = d3.range(num).map(function(d) {
        //     return [Math.random() * width, Math.random() * height];
        // });

        // myChart = Voronoi().width(width).height(height);
        // //.rectColor(['rgb(255,255,0)', 'rgb(0,255,0)']).rectOpacity(0.7);
        // var chartWrapper = d3.select("#p1")
        //       .datum(vertices)
        //       .call(myChart);

        $("button").on("click", function() {
            size = size + 50;
            dataset = [{label: 'Scott', count: size * 10}, {label: 'John', count: 770}, {label: 'Cory', count: 1220}];
            myChart.size(size);
            chartWrapper.datum(dataset).call(myChart);
        });
    });
})();