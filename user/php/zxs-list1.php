<?php 
  header("Content-type:text/html;charset=utf-8");
   header("Content-Type = application/x-www-form-urlencoded"); 
  $host = '127.0.0.1';
  $user = 'root';
  $pass = '';
  $mysqli = new mysqli('localhost','root','');
  mysqli_select_db($mysqli,'liangren');
  $select_type=$_POST["select_type"];
  $select_zxs=$_POST["select_zxs"];

if($select_type!=0) {
    if($select_zxs=='价格') {
      $result=mysqli_query($mysqli,"
          select name,introduce,job,price,trade from employee where isuse=1 and type=$select_type order by price desc;
          ");
    }
    else if($select_zxs=='信用值') {
        $result=mysqli_query($mysqli,"
            select name,introduce,job,price,trade from employee where isuse=1 and type=$select_type order by credit desc;
            ");
      }
    else if($select_zxs=='好评率') {
        $result=mysqli_query($mysqli,"
            select name,introduce,job,price,trade from employee where isuse=1 and type=$select_type order by good_comment desc;
            ");
      }
    else if($select_zxs=='交易量') {
      $result=mysqli_query($mysqli,"
          select name,introduce,job,price,trade from employee where isuse=1 and type=$select_type order by trade desc;
          ");
    }
    else if($select_zxs=='综合排序') {
      $result=mysqli_query($mysqli,"
          select name,introduce,job,price,trade from employee where isuse=1 and type=$select_type order by price*3+credit*2+good_comment*2+trade*3 desc;
          ");
    }
    else {
      $result=mysqli_query($mysqli,"
          select name,introduce,job,price,trade from employee where isuse=1 and type=$select_type;
          ");
    }
}
else if($select_type==0){
  if($select_zxs=='价格') {
    $result=mysqli_query($mysqli,"
        select name,introduce,job,price,trade from employee where isuse=1 order by price desc;
        ");
  }
  else if($select_zxs=='信用值') {
      $result=mysqli_query($mysqli,"
          select name,introduce,job,price,trade from employee where isuse=1 order by credit desc;
          ");
    }
  else if($select_zxs=='好评率') {
      $result=mysqli_query($mysqli,"
          select name,introduce,job,price,trade from employee where isuse=1 order by good_comment desc;
          ");
    }
  else if($select_zxs=='交易量') {
    $result=mysqli_query($mysqli,"
        select name,introduce,job,price,trade from employee where isuse=1 order by trade desc;
        ");
  }
  else if($select_zxs=='综合排序') {
    $result=mysqli_query($mysqli,"
        select name,introduce,job,price,trade from employee where isuse=1 order by price*3+credit*2+good_comment*2+trade*3 desc;
        ");
  }
  else {
    $result=mysqli_query($mysqli,"
        select name,introduce,job,price,trade from employee where isuse=1;
        ");
  }
}

  while($row=mysqli_fetch_array($result)) {
        $zxs_name=$row['name'];
        $zxs_introduce=$row['introduce'];
        $zxs_job=$row['job'];
        $zxs_price=$row['price'];
        $zxs_volume=$row['trade'];
    if($zxs_name!=''&&$zxs_introduce!=''&&$zxs_job!=''&&$zxs_volume!='') {
        echo "$zxs_name,";
        echo "$zxs_introduce,";
        echo "$zxs_job,";
        echo "$zxs_price,";
        echo "$zxs_volume,";
      }
    }
  mysqli_close($mysqli);
?>


