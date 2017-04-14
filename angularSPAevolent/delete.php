<?php

 include "connectdb.php";
 
$data=json_decode(file_get_contents("php://input"));


$number = $data->phone_number;
//print_r($email);
 
$query="DELETE FROM contact WHERE phone_number=".$number;
echo $query;
if ($conn->query($query) === TRUE) {
    echo "Record deleted";
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
} 
$conn->close();
   
?>