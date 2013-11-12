<?php
error_reporting(0);

$array=array(
	'type'=>'success',
	'rate'=>$_POST['rate']
	);

/*

$array=array(
	'type'=>'already',
	);

$array=array(
	'type'=>'error'
	
	);

*/

echo json_encode($array);



?>