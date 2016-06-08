<!DOCTYPE>
<html>
<head>
    <title>管理员界面</title>
    <script src="jquery-1.12.3.min.js"></script>
    <script src="bootstrap.min.js"></script>
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="css/message.css">
    <script src="js/message.js"></script>
    <scrīpt language='javascrīpt' type='text/javascrīpt' src='php/message_word.php'></scrīpt>
</head>
<body>
    
    <div class="headline"></div>
    <div class="col_mini">
        <div class="miniline"><span id="miniline">消息管理</span></div>
    </div>
    <div class="outbox">
    <ul class="message_list">
    <?php
        $con = @mysqli_connect('127.0.0.1','root','');
        if(!$con){                    
            die('could not connect:' . mysqli_error());
        }
        mysqli_select_db($con,"liangren");
        $sql="select content from message";
        $sql1="select user_name from member,message where message.use_id=member.id order by no";
        //执行数据库
        $result=mysqli_query($con,$sql);
        $result1=mysqli_query($con,$sql1);
        //读取当前行数据
        $x=0;
        $y=0;
        echo "<script> pageAdd('$y');</script>";
         /*这里缺少一个获取y的函数*/
        for(;$x<=4;$x++){
            $num=$y*4+$x;
            $row = mysqli_fetch_array($result);
            $row1 = mysqli_fetch_array($result1);
            echo "<div>";
            echo "<li class='message_item' id='$num'>";
            echo "<img src='img/2.jpg' class='pi' style='width:56px'>";
                /*$content=;*/
                echo "<span class='comment'>".$row['content']."</span>"; 
                echo "<span class='comment_name'>".$row1['0']."</span>"; 
            echo "<div class='bb' id='$num'>";
                echo "<button id='back'>";
                echo "<img src='img/backword.png' style='width:50%'>";
                echo "</button>";
            echo "</div>";
            
            /*echo "<div class='clear'>";
            echo "</div>";*/
        echo "</li>";
        /*echo "<div class='clear'>";
        echo "</div>";*/
            
            
            echo "<div class='replyBox' id='$num'>";
                echo "<textarea type='text' id='textReply'>";
                echo "</textarea>";
                echo "<br />";
                echo "<span class='enterbox'>";
                    echo "<input type='submit' value='发送' id='$num' class='enter'>";
                    /*echo "</button>";*/
                echo "</span>";
                echo "<span class='closebox'>";
                    echo "<button class='close' style='border: 1px solid #000'>收起";
                echo "</button>";
                echo "</span>";
            echo "</div>";
            echo "</div>";
    }
    echo "<input type='button' onclick='javascript:refreshFrame();'  value='上一页' class='lastPage'>";
    
?>
    
    <input type="button" value="下一页" class="nextPage">
        <!--<input type="button" class="turnP">
    <input type="text" class="turnPage">-->
    
    </ul>
    </div>
</body>
</html>