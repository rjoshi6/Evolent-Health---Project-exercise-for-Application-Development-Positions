<?php
include "connectdb.php";
$data=json_decode(file_get_contents("php://input"));
$first_name = $conn->real_escape_string($data->first_name);
$second_name = $conn->real_escape_string($data->second_name);
$email = $conn->real_escape_string($data->email);
$phone_number = $conn->real_escape_string($data->phone_number);
$status = $conn->real_escape_string($data->status);

$query = "UPDATE contact SET 
	first_name = '".$first_name."',
	second_name= '".$second_name."',
	email = '".$email."',
    status = '".$status."'
	WHERE phone_number=".$phone_number;
//echo $query;
if ($conn->query($query) === TRUE) {
    echo "Record Updated";
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
} 
$conn->close();

?>