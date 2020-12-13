<?php
// Check for empty fields
if(empty($_POST['firstName'])  		||
   empty($_POST['email'])	||
   empty($_POST['phone']) 		||
   empty($_POST['lastName'])	||
   empty($_POST['adress']) 		||
   
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Please fill up the form Properly, Maybe you have missed something!";
	return false;
   }



// Property location
   $location = $_POST['location'];
   $condition = $_POST['condition'];
   $price = $_POST['price'];

// Property Details
   $type = $_POST['type'];
   $preferred_size = $_POST['preferred_size'];
   $rooms = $_POST['rooms'];
   $bath = $_POST['bath'];
   $garden = $_POST['garden'];
   $garden_size = $_POST['garden_size'];
   $balconies = $_POST['balconies'];
   $balconiesNo = $_POST['balconiesNo'];
   $furnitures = $_POST['furnitures'];
   $pFurnitures = $_POST['pFurnitures'];
   $floor = $_POST['floor'];
   $seaDistance = $_POST['seaDistance'];
   $centrumDistance = $_POST['centrumDistance'];
   $seaView = $_POST['seaView'];
   $mountainView = $_POST['mountainView'];

// Usage
   $pUsage = $_POST['pUsage'];
   $gUsage = $_POST['gUsage'];
   
  //  Personal information
    $first_name = $_POST['firstName'];
    $lastname = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $adress = $_POST['adress'];







	
// Create the email and send the message

$to = 'tripkeys@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Turkey Property Quote Engine:  $first_name";
$email_body = "You have received a new message from your Turkey Property Quote Engine .\n\n"."Here are the details:\n\n First Name: $first_name\n\n Last Name: $lastname \n\n  Phone: $phone\n\n Email: $email\n\n  Address: $adress

\n\n\n Here is the Quote Request: \n \n
Location: $location\n  
Condition: $condition \n 
Price Range: $price \n  \n

Property Details \n
Type: $type \n 
Preferred Size: $preferred_size \n 
Rooms: $rooms \n 
Bath + WC: $bath \n 
Garden: $garden \n 
Garden Size: $garden_size \n 
Balconies & Terraces: $balconies \n 
Balconies & Terraces Number: $balconiesNo \n 
Furniture: $furnitures \n 
Preferred Furniture: $pFurnitures \n 
Floor Material: $floor \n 
Sea Distance: $seaDistance \n 
Centrum Distance: $centrumDistance \n 
Sea View: $seaView \n 
Mountain View: $mountainView \n \n
Usage \n
Private Usage: $pUsage \n 
General Usage: $gUsage \n " ;

$headers = "From: noreply@urbanlink.co.uk/\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.

$headers .= "Reply-To: $email";	
mail($to,$email_subject,$email_body,$headers);

// echo "<h4>The details have been sent and a member of staff will be in touch shortly!</h4>";

header("Location: ./thank-you.html");
return true;	

?>