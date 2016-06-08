<?php
$con = mysqli_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
  }

// some code
  mysqli_select_db($con,"liangren");
  $result=mysqli_query($con, "SELECT content FROM message");
    while($row=mysqli_fetch_array($result)) {
    /*$no=$row['no'];
  	$use_id=$row['use_id'];
    $employee_id=$row['employee_id'];*/
  	/*$content=;*/
  	/*$date=$row['date'];*/
    
  	/*if($content!="")*/
      echo "<span>".$row['content']     ."</span>";
  }
  mysqli_close($con);

?>