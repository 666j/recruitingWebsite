 (function(){
 	var cloudChart = echarts.init(document.getElementById('wordcould'));
    var CloudOption = {
        tooltip: {},
        series: [ {
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
            data: [
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
            ]
        } ]
    };
    cloudChart.setOption(CloudOption );
  
 })();
 