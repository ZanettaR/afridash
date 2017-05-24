<?php
header("Access-Control-Allow-Origin: *");
require_once('config.php');
$json = json_decode(file_get_contents('php://input'),true);
$email = $json['email'];
$query = "SELECT * FROM users WHERE email = '{$email}' ";
global $connection;
$result = mysqli_query($connection,$query);
confirm_query($result);
while($user = mysqli_fetch_assoc($result)){
  echo json_encode($user);
}
?>
