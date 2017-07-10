(function(){
	var negativeBarDom = document.getElementById("negative-bar");
	var negativeBarChart = echarts.init(negativeBarDom);
	var app = {};
	var negativeBarOption= null;
	app.title = '正负条形图';

    /*************模拟数据*********************/
	var mydata={"city":['上海','北京','广州','杭州','成都','济南','苏州'],
		"wage":[320, 302, 341, 374, 390, 450, 420],
		"HousePrice":[120, 132, 101, 134, 190, 230, 210]
	};
    /***********初始化数据**************************/
    function InitData(data){

        var data_info ={"graph_id":2};
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
                var city =[],wage=[],housePrice=[],income=[];
				city = data.city;
                wage=data.wage;
                for(var i=0;i<data.HousePrice.length;i++) {
                    housePrice[i] = data.HousePrice[i]*(-1) ;
                    income[i]=wage[i]+housePrice[i];
                }

            }
            initChart(city,wage,housePrice,income);
        }
    }
    /***********************城市间薪资、房租、收入对比***************************/
    function initChart(city,wage,housePrice,income){
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
						data : city

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
						data:income
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
						data:wage
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
						data:housePrice
					}
				]
			};
			;
			if (negativeBarOption&& typeof negativeBarOption=== "object") {
				negativeBarChart.setOption(negativeBarOption, true);
			}
    };
    InitData(mydata);
})();
