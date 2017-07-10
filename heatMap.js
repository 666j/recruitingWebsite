/**
 * Created by 123 on 2017/7/4.
 */
(function(){
    var heatMapDom = document.getElementById("heatMap");
    var heatMapChart = echarts.init(heatMapDom);
    var app = {};
    option = null;
    app.title = '笛卡尔坐标系上的热力图';

    /***********************模拟数据**************************/
    var mydata= {
        "educations":['不限', '大专', '本科', '硕士', '博士'],
        "wages":[{"website":"58","wage":[5,1,0,0,2]},
            {"website":"大街网","wage":[2,1,5,0,4]},
            {"website":"拉勾网","wage":[3,0,2,4,7]},
            {"website":"赶集网","wage":[0,1,2,5,4]}
        ]};
    /***********初始化数据**************************/
    function InitData(data){

            var data_info ={"graph_id":11};
            /***********与后台交互传输数据***********/
            /*	$.ajax({
             type: "POST",
             url: ".../php/heatMap.php",
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
                    var educations =[],websites=[],wages=[];
                    var educations = data.educations;

                    for(var i = 0;i<data.wages.length;i++){
                        websites.push(data.wages[i]['website']);
                        //var arr = data.wages[i].wage.split(",");//如果给的是字符串就用 这个
                        var arr = data.wages[i].wage;
                        for(var j=0;j<arr.length;j++) {
                            var temp=[i,j,arr[j]];
                            wages.push(temp);
                        }
                    }

                }
                initChart(educations,websites,wages);

            }

        }
    /*********************网站--岗位薪资水平映射（平均工资）**********************/
    function initChart(educations,websites,wages){

         wages = wages.map(function (item) {
                return [item[1], item[0], item[2] || '-'];
         });
        option = {
            tooltip: {
                position: 'top'
            },
            animation: false,
            grid: {
                height: '50%',
                y: '10%'
            },
            xAxis: {
                type: 'category',
                data: educations,
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: websites,
                splitArea: {
                    show: true
                }
            },
            visualMap: {
                min: 0,
                max: 10,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%'
            },
            series: [{
                name: '薪资水平',
                type: 'heatmap',
                data: wages,
                label: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        if (option && typeof option === "object") {
            heatMapChart.setOption(option, true);
        }
    }

        InitData(mydata);
})();
