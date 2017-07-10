/**
 * Created by 123 on 2017/7/4.
 */
(function(){
	var polarHeatMapDom = document.getElementById("polarHeatMap");
	var polarHeatMapChart = echarts.init(polarHeatMapDom);
	var app = {};
	var option = null;

	/****************模拟数据******************/
    var mydata={
        "scale_data":[{"scale":"0人","data":[5,7,1,17,10,1,1]},
            {"scale":"10人","data":[5,5,1,10,3,1,3]},
            {"scale":"20人","data":[5,4,2,13,0,1,4]},
            {"scale":"50人","data":[5,6,2,14,0,3,5]},
            {"scale":"80人","data":[10,7,3,15,1,3,6]},
            {"scale":"100人","data":[12,7,5,16,1,5,7]},
            {"scale":"200人","data":[12,7,5,14,1,5,8]},
            {"scale":"500人","data":[15,7,6,12,1,6,9]},
            {"scale":"1000人","data":[18,7,8,10,1,8,10]},
            {"scale":"2000人","data":[18,7,9,7,8,10,11]},
            {"scale":"5000人","data":[20,15,10,7,1,12,12]},
            {"scale":"5000以上","data":[21,17,11,5,10,15,15]}],
        "welfareType":['五险一金', '餐补', '宿补', '奖金', '带薪假期', '周末双休', '节日福利']
    };
    /***********初始化数据**************************/
    function InitData(data){
        var data_info ={"graph_id":4};
        /***********与后台交互传输数据***********/
		/*	$.ajax({
		 type: "POST",
		 url: ".../php/barCategory.php",
		 data: data_info,
		 success: function (data) {

		 handleData(data);
		 },
		 error: function (data) {
		 alert("error");
		 }
		 });*/
        handleData(data);
        function handleData(data){

            //data = JSON.parse(data);
            if(data.status==0){
                alert("连接有误");
            }else{
                var scale =[],weight=[],welfareCat=[];
                welfareCat = data.welfareType;
                for(var i=0;i<data.scale_data.length;i++) {
                    scale.push(data.scale_data[i]['scale']);
                    for(var j=0;j<data.scale_data[i]['data'].length;j++) {
                        weight.push([j,i,data.scale_data[i]['data'][j]]);
                    }
                }

            }
            initChart(scale,weight,welfareCat);
        }
    }
    function initChart(scale,weight,welfareCat) {
        function renderItem(params, api) {
            var values = [api.value(0), api.value(1)];
            var coord = api.coord(values);
            var size = api.size([1, 1], values);
            return {
                type: 'sector',
                shape: {
                    cx: params.coordSys.cx,
                    cy: params.coordSys.cy,
                    r0: coord[2] - size[0] / 2,
                    r: coord[2] + size[0] / 2,
                    startAngle: coord[3] - size[1] / 2,
                    endAngle: coord[3] + size[1] / 2
                },
                style: api.style({
                    fill: api.visual('color')
                })
            };
        }

        /****************************有该项福利的公司所占比重*******************************/
        var maxValue = echarts.util.reduce(weight, function (max, item) {
            return Math.max(max, item[2]);
        }, -Infinity);

        option = {
            legend: {
                data: ['Punch Card']
            },
            polar: {},
            tooltip: {},
            visualMap: {
                type: 'continuous',
                min: 0,
                max: maxValue,
                top: 'middle',
                dimension: 2,
                calculable: true
            },
            angleAxis: {
                type: 'category',
                data: scale,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                }
            },
            radiusAxis: {
                type: 'category',
                data:welfareCat ,
                z: 100
            },
            series: [{
                name: 'Punch Card',
                type: 'custom',
                coordinateSystem: 'polar',
                itemStyle: {
                    normal: {
                        color: '#d14a61'
                    }
                },
                renderItem: renderItem,
                data: weight
            }]
        };
        if (option && typeof option === "object") {
            polarHeatMapChart.setOption(option, true);
        }
    };
    InitData(mydata);
})();
