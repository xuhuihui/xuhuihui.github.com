var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
var k=0;
var lastTime1=0;
var skyOffset = 0,
SKY_VELOCITY = 30;
var lastTime=0,
  INTERVAL=300,
  arrSnow=[],//下雪的数组
  i=0;
var music = false;

//飘落行为
var drop = {
       Velocity:5,//速度
       angle:Math.PI/5,//弧度
       x:0,//下一个雪花点的位置
       y:0,

       execute: function (sprite, context) {//随机
         this.angle=Math.random()*Math.PI;
         this.x+= this.Velocity*Math.cos(this.angle);
         this.y+= this.Velocity*Math.sin(this.angle);
         arrSnow[i].x=this.x;
         arrSnow[i].y=this.y;  
       }
    },

    //雪花绘制器
    snowPainter ={
      radious:this.radious||1,//1为初始值
      x:this.x||0,
      y:this.y||0,

      paint: function(sprite,context){
        context.save();       
        //绘制雪花（圆点，颜色rgba(254,254,254,0.8))
            context.beginPath();
            context.arc(this.x,this.y,this.radious,0,Math.PI*2,false);
            context.fillStyle = 'rgba(254,254,254,0.8)';
            context.fill();

        context.restore();
      }
    };

//下雪
function snow1(){
  i=arrSnow.length;
  snow=new Sprite('snow',snowPainter,[drop]);
  snow.painter.x=Math.random()*canvas.width;
  snow.painter.y=0;
  snow.painter.radious=parseInt(Math.random()*3+1);
  snow.paint(context);
  //建立对象
  arrSnow.push({x:snow.painter.x,y:snow.painter.y,radious:snow.painter.radious,snow:snow});
}


//计算帧速率函数
function calculateFps(now) {
   var fps = 1000 / (now - lastTime1);
   lastTime1 = now;
   return fps; 
}

function erase() {
   context.clearRect(0,0,canvas.width,canvas.height);
}

function drawSky() {
   context.save();
   skyOffset = skyOffset < canvas.width ?
               skyOffset + SKY_VELOCITY/fps : 0;
   context.save();
   context.translate(-skyOffset, 0);//平移画布
   //连续绘制两张图，使canvas上一直有图出现
   //context.drawImage(sky, 0, 0,canvas.width,canvas.height);
   //context.drawImage(sky, canvas.width-3, 0,canvas.width,canvas.height);
   context.restore();
   context.save();
   context.globalAlpha = 0.5;
   context.drawImage(deer,k,0,deer.width/2,deer.height/2);
   k+=2;
   context.restore();

}
//每帧刷新内容
function animate(now) {
    // 初始化界面
    if(k<=canvas.width){
      if (now === undefined) {
        now = +new Date;
      }   

      fps = calculateFps(now);
        erase();//清空画布
        drawSky();//绘制图
      } 
    else{
      fps=0;
      if(now-lastTime>INTERVAL){
    //清除屏幕
    erase();
    drawSky();//绘制图
    drawTree();
    drawText();

    i=arrSnow.length;
    while(i--){
        var snow=arrSnow[i].snow;

        drop.x=arrSnow[i].x;
          drop.y=arrSnow[i].y;
          //更新雪花行为
        snow.update(context);//有雪花新的位置
      snowPainter.x=arrSnow[i].x;
      snowPainter.y=arrSnow[i].y;
      snowPainter.radious=arrSnow[i].radious;
      //绘制雪花
      snow.paint(context);
          //判断是否越界
      if(snowPainter.y>canvas.height||snowPainter.x>canvas.width||snowPainter.x<0){
        //删除飘出的雪花
      arrSnow.splice(i,1);
      }     
    }
    //记录本次时间
    lastTime=now;
    //产生新的雪花
    snow1();
    }
    } 
    requestNextAnimationFrame(animate);//绘制帧动画
}


requestNextAnimationFrame(animate);//绘制帧动画
