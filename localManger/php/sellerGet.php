<?php
$con = mysqli_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
  }

// some code
  mysqli_select_db($con,"liangren");
  $result=mysqli_query($con, "select money,type,date from employee,orders where employee.id=orders.employee_id order by date desc");
    while($row=mysqli_fetch_array($result)) {
    $money=$row['money'];
  	$type=$row['type'];
  	$date=$row['date'];
  	if($money!="" && $type!="" && $date!="")
      echo "$money,$type,$date,";
  }
  mysqli_close($con);

?>