(function(){
	var negativeBarDom = document.getElementById("negative-bar");
	var negativeBarChart = echarts.init(negativeBarDom);
	var app = {};
	var negativeBarOption= null;
	app.title = '正负条形图';
	
	negativeBarOption= {
		
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['收入', '房租', '薪资'],
	        top:20        
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    yAxis : [
	        {
	            type : 'category',
	            axisTick : {show: false},
	            data : ['上海','北京','广州','杭州','成都','济南','苏州']
	        }
	    ],
	    series : [
	        {
	            name:'收入',
	            type:'bar',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside'
	                }
	            },
	            data:[200, 170, 240, 244, 200, 220, 210]
	        },
	        {
	            name:'薪资',
	            type:'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true
	                }
	            },
	            data:[320, 302, 341, 374, 390, 450, 420]
	        },
	        {
	            name:'房租',
	            type:'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'left'
	                }
	            },
	            data:[-120, -132, -101, -134, -190, -230, -210]
	        }
	    ]
	};
	;
	if (negativeBarOption&& typeof negativeBarOption=== "object") {
	    negativeBarChart.setOption(negativeBarOption, true);
	}
})();
