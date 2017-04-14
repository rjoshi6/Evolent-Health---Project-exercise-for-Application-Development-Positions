<?php
include "connectdb.php";
$data=json_decode(file_get_contents("php://input"));
$number = $data->phone_number;
//print_r($number);
 $query="SELECT * FROM contact WHERE phone_number=".$number;
$resultSet = $conn->query($query);

while($row = $resultSet->fetch_array()){
	$data[] = $row;
}
	print json_encode($data);
?>