
 (function(){
     var cloudChart = echarts.init(document.getElementById('wordcould'));
     /***************示例数据******************/
     var mydata={"skills":[
         {"name":"JAVA","amount":10000},
         {"name":"C++","amount":6181},
         {"name":"Python","amount":4386},
         {"name":"JS","amount":4055},
         {"name":"PHP","amount":2467},
         {"name":"HTML","amount":2244},
         {"name":"NODE.JS","amount":1898},
         {"name":"WEB","amount":1512},
         {"name":"BigData","amount":1578},
         {"name":"PS","amount":3386},
         {"name":"3D","amount":1434},
         {"name":"NCAA baseball tournament","amount":273},
         {"name":"Point Break","amount":265}
     ]};
         /***********初始化数据**************************/
         function InitData(data){

         var data_info ={"graph_id":7};
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

//			data = JSON.parse(data);
             if(data.status==0){
                 alert("连接有误");
             }else{
                 var skills =[];
                 for(var i = 0;i<data.skills.length;i++){


                     var temp = {"name":data.skills[i]['name'],"amount":data.skills[i]['amount']};

                     // var temp={"data":temp1, "placeHold":temp2};
                     skills.push(temp);
                 }

             }
             initChart(skills);
            }
         };

     function initChart(skills) {
         var CloudOption = {
             tooltip: {},
             series: [{
                 type: 'wordCloud',
                 gridSize: 6,
                 sizeRange: [12, 100],
                 rotationRange: [-90, 90],
                 shape: 'pentagon',
                 width: 1000,
                 height: 800,
                 drawOutOfBound: true,
                 textStyle: {
                     normal: {
                         color: function () {
                             return 'rgb(' + [
                                     Math.round(Math.random() * 160),
                                     Math.round(Math.random() * 160),
                                     Math.round(Math.random() * 160)
                                 ].join(',') + ')';
                         }
                     },
                     emphasis: {
                         shadowBlur: 10,
                         shadowColor: '#333'
                     }
                 },
                 /********************各技能需求数量************************/
                 data: skills.map(function (skill) {
                     return{
                         name: skill.name,
                             value: skill.amount
                     };
                 })
                 /* [
                     {
                         name: 'JAVA',
                         value: 10000,
                         textStyle: {
                             normal: {
                                 color: 'black'
                             },
                             emphasis: {
                                 color: 'red'
                             }
                         }
                     },
                     {
                         name: 'C++',
                         value: 6181
                     },
                     {
                         name: 'Python',
                         value: 4386
                     },
                     {
                         name: 'JS',
                         value: 4055
                     },
                     {
                         name: 'PHP',
                         value: 2467
                     },
                     {
                         name: 'HTML',
                         value: 2244
                     },
                     {
                         name: 'NODE.JS',
                         value: 1898
                     },
                     {
                         name: 'C',
                         value: 1484
                     },
                     {
                         name: 'WEB',
                         value: 1512
                     },
                     {
                         name: 'PS',
                         value: 3386
                     },
                     {
                         name: 'ambition',
                         value: 1898
                     },
                     {
                         name: '3D',
                         value: 1434
                     },
                     {
                         name: 'BIGDATA',
                         value: 1578
                     },
                     {
                         name: 'DATA',
                         value: 3386
                     },
                     {
                         name: 'CHHY',
                         value: 4455
                     },
                     {
                         name: 'orscal',
                         value: 2267
                     },
                     {
                         name: 'VUE',
                         value: 2044
                     },
                     {
                         name: 'NODE.JS',
                         value: 1898
                     },
                     {
                         name: 'ANDROID',
                         value: 965
                     },
                     {
                         name: 'Johnny Depp',
                         value: 847
                     },
                     {
                         name: 'Lena Dunham',
                         value: 582
                     },
                     {
                         name: 'Lewis Hamilton',
                         value: 555
                     },
                     {
                         name: 'KXAN',
                         value: 550
                     },
                     {
                         name: 'Mary Ellen Mark',
                         value: 462
                     },
                     {
                         name: 'Farrah Abraham',
                         value: 366
                     },
                     {
                         name: 'Rita Ora',
                         value: 360
                     },
                     {
                         name: 'Serena Williams',
                         value: 282
                     },
                     {
                         name: 'NCAA baseball tournament',
                         value: 273
                     },
                     {
                         name: 'Point Break',
                         value: 265
                     }
                 ]*/
             }]
         };
         cloudChart.setOption(CloudOption);
     };
     InitData(mydata);
 })();
 