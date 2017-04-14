<?php
include "connectdb.php";
$query = "SELECT * FROM CONTACT";
$resultSet = $conn->query($query);

while($row = $resultSet->fetch_array()){
	$data[] = $row;
}
	print json_encode($data);
	
?>