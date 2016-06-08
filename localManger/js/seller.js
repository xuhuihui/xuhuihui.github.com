var xxhr;
var date,type,money;
var place=new Array(1000);
function getGps(){
    if(window.XMLHttpRequest){
        xxhr=new XMLHttpRequest();
    }
    else
        xxhr=new ActiveXObject("Microsoft.XMLHTTP");
    xxhr.onreadystatechange=getGpsData;
    xxhr.open("GET","php/sellerGet.php");
    xxhr.send(null);
}

function getGpsData(){
    if(xxhr.readyState==4 && xxhr.status==200){
        result=xxhr.responseText;
        place=result.split(",");
        //alert(place.length);
    }
}
var year="",month="",day="";
function getDate(){
    var myDate = new Date(); 
    year=myDate.getFullYear();
    month=myDate.getMonth();
    day=myDate.getDate(); 
    return year+"-"+month+"-"+day;
}
function firstType(){
    var x=0,count=0;
    for(x=0;x<(list.length-1)/3;++x){
        if(list[x*3+1]==1){
            count+=parseInt(list[x*3]);
            /*alert(count);*/
        }
    }
    return count;
}
function secondType(){
    var x=0,count=0;
    for(x=0;x<(list.length-1)/3;++x){
        if(list[x*3+1]==2){
            count+=parseInt(list[x*3]);
            /*alert(count);*/
        }
    }
    return count;
}
function thidType(){
    var x=0,count=0;
    for(x=0;x<(list.length-1)/3;++x){
        if(list[x*3+1]==3){
            count+=parseInt(list[x*3]);
            /*alert(count);*/
        }
    }
    return count;
}
function forthType(){
    var x=0,count=0;
    for(x=0;x<(list.length-1)/3;++x){
        if(list[x*3+1]==4){
            count+=parseInt(list[x*3]);
            /*alert(count);*/
        }
    }
    return count;
}
function fifthType(){
    var x=0,count=0;
    for(x=0;x<(list.length-1)/3;++x){
        if(list[x*3+1]==5){
            count+=parseInt(list[x*3]);
            /*alert(count);*/
        }
    }
    return count;
}
function total(){
    var x=0,add=0;
    for(x=0;x<=(list.length-1)/3;++x){
        add+=parseInt(list[x*3]);
            /*alert(count);*/
    }
    return add;
}
window.onload=function(){
    var list=new Array(100);
    getGps();
    getGpsData();
    var date=getBeforeDate(0);
    var j=0;
    for(x=0;x<(place.length-1)/3;++x){
        if(place[x*3+2]>=date){
            list[j*3]=place[x*3];
            list[j*3+1]=place[x*3+1];
            list[j*3+2]=place[x*3+2];
            j++;
        }
    }
    ecart();
    
 
    //alert(getBeforeDate(7));
}
var list=new Array(100);
function compareDay(url){
    var date=getBeforeDate(url);
    alert(date);
    var j=0;
    for(x=0;x<(place.length-1)/3;++x){
        if(place[x*3+2]>date){
            list[j*3]=place[x*3];
            list[j*3+1]=place[x*3+1];
            list[j*3+2]=place[x*3+2];
            j++;
        }
        //alert(count);
    }
    return list;
}
function getBeforeDate(n){
    var n = n;
    var d = new Date();
    var year = d.getFullYear();
    var mon=d.getMonth()+1;
    var day=d.getDate();
    if(day <= n){
            if(mon>1) {
               mon=mon-1;
            }
           else {
             year = year-1;
             mon = 12;
             }
           }
          d.setDate(d.getDate()-n);
          year = d.getFullYear();
          mon=d.getMonth()+1;
          day=d.getDate();
     s = year+"-"+(mon<10?('0'+mon):mon)+"-"+(day<10?('0'+day):day);
     return s;
}

function sevenday(){
    list=[];
    var date=getBeforeDate(7);
    var j=0;
    for(x=0;x<(place.length-1)/3;++x){
        if(place[x*3+2]>=date){
            list[j*3]=place[x*3];
            list[j*3+1]=place[x*3+1];
            list[j*3+2]=place[x*3+2];
            j++;
        }
    }
        /*for(x=0;x<(list.length-1)/3;++x){
            alert(list[x*3]);
        }*/
    ecart();
}
function fifteenday(){
    list=[];
    var date=getBeforeDate(15);
    var j=0;
    for(x=0;x<(place.length-1)/3;++x){
        if(place[x*3+2]>=date){
            list[j*3]=place[x*3];
            list[j*3+1]=place[x*3+1];
            list[j*3+2]=place[x*3+2];
            j++;
        }
    }
    ecart();
}
function thirtyday(){
    list=[];
    var date=getBeforeDate(30);
    var j=0;
    for(x=0;x<(place.length-1)/3;++x){
        if(place[x*3+2]>=date){
            list[j*3]=place[x*3];
            list[j*3+1]=place[x*3+1];
            list[j*3+2]=place[x*3+2];
            j++;
        }
    }
    ecart();
}
function ecart(){
    // 路径配置
        require.config({
            paths: {
                echarts: 'echarts-2.2.7/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
                option = {
    title : {
        text: '销量分析图',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['销售量']
    },
        
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['美甲','美发','彩妆','护肤','服饰搭配','总销售量']
        }
    ],
    series : [
        {
            name:'销售量',
            type:'bar',
            data:[secondType(), firstType(), thidType(), forthType(), fifthType(), total()]
        }
    ]
};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
}