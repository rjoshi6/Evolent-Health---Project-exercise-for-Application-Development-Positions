<?php
include "connectdb.php";
$data=json_decode(file_get_contents("php://input"));

$first_name = $conn->real_escape_string($data->first_name);
$second_name = $conn->real_escape_string($data->second_name);
$email = $conn->real_escape_string($data->email);
$phone_number =$conn->real_escape_string($data->phone_number);
$status = $conn->real_escape_string($data->status);

$query = "INSERT INTO contact 
(first_name, second_name, email, phone_number, status)
VALUES 
( '".$first_name."','".$second_name."','".$email."','".$phone_number."','".$status."')";

if ($conn->query($query) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
} 
$conn->close();
?>