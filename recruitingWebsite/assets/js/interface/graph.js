/**
 * Created by 123 on 2017/7/4.
 */
(function(){
var grapDom = document.getElementById("graph");
var grapChart = echarts.init(grapDom);
var app = {};
option = null;


$.getJSON('data.json', function (json) {
    grapChart.hideLoading();
    grapChart.setOption(option = {
        title: {
            text: '专业相关性'
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'none',
                progressiveThreshold: 700,
                data: json.nodes.map(function (node) {
                    return {
                        x: node.x,
                        y: node.y,
                        id: node.id,
                        name: node.label,
                        symbolSize: node.size,
                        itemStyle: {
                            normal: {
                                color: node.color
                            }
                        }
                    };
                }),
                links: json.edges.map(function (edge) {
                    return {
                        source: edge.sourceID,
                        target: edge.targetID,
                        lineStyle: {
		                    normal: {
		                        width: edge.width,
		                        curveness: 0.2
		                    }
		                }
                    };
                }),
                label: {
                    emphasis: {
                        position: 'right',
                        show: true
                    }
                },
                roam: true,
                focusNodeAdjacency: true,

                lineStyle: {
                    normal: {
                        width: 1.5,
                        curveness: 0.3,
                        opacity: 0.7
                    }
                }
            }
        ]
    }, true);
});
if (option && typeof option === "object") {
    grapChart.setOption(option, true);
}
})();
