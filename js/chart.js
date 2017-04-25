var option = {
    tooltip: {},
    legend: {
        data: ['北韓收支'],
        textStyle: { color: '#000000' }
    },
    xAxis: [{
        data: ['軍事經費', '旅遊業收入', '煤礦出口收入'],
        axisTick: { show: false },
        axisLine: { show: true },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#ffffff',
                fontSize: 20
            }
        }
    }],
    yAxis: {
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: true },
        axisLabel: { show: true }
    },

    textStyle: {
        color: '#ffffff'
    },

    markLine: {
        z: -1
    },
    animationEasing: 'elasticOut',
    series: [{
        type: 'pictorialBar',
        name: '北韓收支',
        hoverAnimation: true,

        data: [{
            value: 4000000000,
            symbol: 'image://https://upload.wikimedia.org/wikipedia/commons/7/7b/United_States_one_dollar_bill%2C_obverse.jpg',
            symbolRepeat: true,
            symbolSize: ['40%', '20%'],
            symbolOffset: [0, 10],
            symbolMargin: '-30%',
            animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            value: 43600000,
            symbol: 'image://https://cdn.pixabay.com/photo/2013/07/13/11/29/camera-158262_960_720.png',
            symbolSize: ['10%', '100%'],
            symbolPosition: 'end',
            z: 10
        }, {
            value: 1000000000,
            symbol: 'image://http://images.clipartpanda.com/coal-clipart-coal_cart_T.png',
            symbolSize: ['50%', '100%'],
            symbolPosition: 'end'
        }],
        markLine: {
            symbol: ['none', 'none'],
            label: {
                normal: { show: false }
            },
            lineStyle: {
                normal: {
                    color: '#0099ff',
                    width: 1
                }
            },
            data: [{
                yAxis: 1000000000

            }]
        }
    },
    {
        name: '北韓收支',
        type: 'pictorialBar',
        barGap: '-100%',
        symbol: 'circle',
        itemStyle: {
            normal: {
                color: '#185491'
            }
        },

    }]
};

var myChart = echarts.init(document.getElementById('main'));
myChart.setOption(option);