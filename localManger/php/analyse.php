<?php
$con = mysqli_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
  }

// some code
  mysqli_select_db($con,"liangren");
  $result=mysqli_query($con, "SELECT *FROM gps_road_point order by ROAD_ID");
    while($row=mysqli_fetch_array($result)) {
    $name=$row['ROAD_NAME'];
  	$start_x=$row['START_X'];
  	$end_x=$row['END_X'];
  	$start_y=$row['START_Y'];
  	$end_y=$row['END_Y']
        
  	$id=$row['ROAD_ID'];
  	if($name!="" && $start_x!="" && $end_x!="" && $start_y!="" && $end_y!="" && $id!="")
      echo "$id,$start_x,$end_x,$start_y,$end_y,$name,";
  }
  mysqli_close($con);

?>