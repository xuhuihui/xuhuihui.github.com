<!DOCTYPE>
<html>
<head>
    <title>管理员界面</title>
    <link rel="stylesheet" href="css/manger.css">
    <script src="jquery-1.12.3.min.js"></script>
    <link rel="stylesheet" href="bootstrap.css">
    <script src="bootstrap.min.js"></script>
    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/jquery.onoff.css" media="screen" />
	<style type="text/css">
	    .onoffswitch { margin: 100px auto; }
	  </style>
</head>
<body>
    
    <div class="col_mini">
        <div class="miniline"><span id="miniline">用户管理</span></div>
        <!--<div class="htmleaf-content bgcolor-8">
			<input type="checkbox" checked />
		</div>-->
        <input type="text" placeholder="用户昵称" id="ask">
        <a id="search"><img src="img/search.png" id="sear" style="height:100%;"></a>
        <div id="box"><span id="box_word">全部用户</span></div>
        <div id="hostBox">
            <table class="host" cellspacing="0">
                <thead class="thead" style="background-color: #F4F5F9;">
                    <tr>
                        <label class="select_host">
                            <input type="checkbox" name="check" id="check">全选
                        </label>
                    </tr>
                </thead>
                <!--<tbody>
                    <tr>
                        <td class="table_lleft">
                             <input type="checkbox" id="choose">
                        </td>
                        <td class="table_left">
                            <div class="mangerline">
                                <img src="img/1.jpg" id="ppp">
                                <span id="name">hhh</span>
                                
                        </td>
                        <td class="table_rright">
                            <div class="dropdown" id="drop" >
                                    <button type="button" class="btn dropdown-toggle" id="dropdownMenu1" 
      data-toggle="dropdown">
      
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                    <li role="presentation">
                                        <a role="menuitem" tabindex="-1" href="#">顾客</a>
                                    </li>
                                    <li role="presentation">
                                        <a role="menuitem" tabindex="-1" href="#">设计师</a>
                                    </li>
                                </div>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>-->
                <?php
                $con = @mysqli_connect('127.0.0.1','root','');
                if(!$con){                    
                    die('could not connect:' . mysqli_error());
                }
                mysqli_select_db($con,"liangren");
                $sql="select user_name,sex from member";
                $result=mysqli_query($con,$sql);
                for($x=0;$x<=6;++$x){
                    $row = mysqli_fetch_array($result);
                    echo "<div class='item'>";
                        echo "<input type='checkbox' id='check'>";
                        echo "<img src='img/2.jpg' class='pi' style='width:70px'>";
                        echo "<span class='name'>".$row['0']."</span>";
                        if($row['1']==1)
                            echo "<img src='img/man.png' class='pi' style='width:25px'>";
                    else
                        echo "<img src='img/women.png' class='pi' style='width:25px'>";
                    echo "</div>";
                    echo "<div class='change'>";
                        echo "<span id='change'>改标签</span>";
                    echo "</div>";
                }
                ?>
            </table>
            
        </div>
        <!--<div id="yonghuBox">
            <div id="yonghu_line">
                <button type="button" id="selectAll">全选</button>
            </div>
            <div class="yonghu"></div>
        </div>-->
    </div>
</body>
</html>