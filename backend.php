<?php
$method = $_SERVER['REQUEST_METHOD'];
$body = file_get_contents("php://input");


if ($method == 'POST') {
	$request = json_decode($body, true); // 2. Umwandeln zu asso. Array
		
	if ($request != null) {
	
		## Mysql CONNECT
		$conn = mysqli_connect('localhost', 'gente', 'gl$DB$', 'GenteLatina');
		if(!$conn) {echo json_encode(['error' => "Connection failed"]); exit;}
		
	 	## Mysql INSERT
 		$firstname = $request['firstname'];
 		$lastname = $request['lastname'];
 		$email = $request['email'];
 		$total = $request['total'];
 		$desired_date = $request['desired_date'];

		$query = "INSERT INTO solicitations (firstname, lastname, email, total, desired_date) 
 		VALUES (?,?,?,?,?)";
 
 		$stmt = mysqli_prepare($conn, $query);
 		if($stmt) {
 			mysqli_stmt_bind_param($stmt, 'sssis', $firstname, $lastname, $email, $total, $desired_date);
 			mysqli_stmt_execute($stmt);
 		}
 		else {
 			echo json_encode(['error' => "Preparing query failed"]);
 		}
 
 		$result = "Danke ".$firstname."! Deine Anfrage wurde gespeichert und ich werde mich sobald wie möglich bei dir melden.";
 		echo json_encode($result);
		
// 		$result = "hallo ".$firstname;
// 		echo json_encode($result);
 			
			
	}
	else {
	$error = ['error' => "JSON-Eingabe konnte nicht geparst werden"];
			echo json_encode($error);
    	http_response_code(400);
    	exit;
	}
			
}
?>