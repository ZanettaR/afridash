<?php
//Conection to the database using mysqli as the plugin
$dbhost = "localhost";
$dbuser = "afridash";
$dbname = "afridash";
$dbpass = "afr!D4sh";
$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if(mysqli_connect_errno()){
	die("Database connection failed: ". mysqli_connect_error(). "(".mysqli_connect_errno().")");
}
function confirm_query($result){
	if(!$result){
	 return false;
}else{
  return true;
}
}
?>
