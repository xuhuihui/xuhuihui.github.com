<?php 
  header("Content-type:text/html;charset=utf-8");
   header("Content-Type = application/x-www-form-urlencoded"); 
  $host = '127.0.0.1';
  $user = 'root';
  $pass = '';
  $mysqli = new mysqli('localhost','root','');
  mysqli_select_db($mysqli,'liangren');
  $select_name=$_POST["select_name"];
  //$select_name='sanitation';
  $zxs_id=0;

  $result=mysqli_query($mysqli,"
      select id,introduce,job,price,trade,good_comment,credit,online from employee where isuse=1 and name='".$select_name."';
      ");

  while($row=mysqli_fetch_array($result)) {
        $zxs_id=$row['id'];
        $zxs_introduce=$row['introduce'];
        $zxs_job=$row['job'];
        $zxs_price=$row['price'];
        $zxs_volume=$row['trade'];
        $zxs_good=$row['good_comment'];
        $zxs_credit=$row['credit'];
        $zxs_online=$row['online'];

    if($zxs_introduce!=''&&$zxs_job!=''&&$zxs_volume!='') {
        echo "$zxs_introduce^";
        echo "$zxs_job^";
        echo "$zxs_price^";
        echo "$zxs_volume^";
        echo "$zxs_good^";
        echo "$zxs_credit^";
        echo "$zxs_online^";

      }
    }

    $result1=mysqli_query($mysqli,"
        select user_name,content,date from message 
        inner join member on
        use_id=id
        where isuse=1 and employee_id=$zxs_id;
        ");

    while($row=mysqli_fetch_array($result1)) {
          $zxs_name=$row['user_name'];
          $zxs_content=$row['content'];
          $zxs_date=$row['date'];

      if($zxs_name!=''&&$zxs_content!=''&&$zxs_date!='') {
          echo "$zxs_name^";
          echo "$zxs_content^";
          echo "$zxs_date^";
        }
      }

  mysqli_close($mysqli);
?>


