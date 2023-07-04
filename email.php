<?php
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        if(isset($_GET['submit'])){
            $destinataire = "info@rehobothconstructionlogistic.net";
            $objet = "New contact message for Rehoboth S.A.R.L";
            $nom = $_GET['nom'];
            $email = $_GET['email'];
            $phone = $_GET['phone'];
            $message = $_GET['message'];

            $contenu = "Name: " . $nom . "\n";
            $contenu.= "Email: " . $email . "\n";
            $contenu.= "Phone Number: " . $phone . "\n";
            $contenu.= "Message: " . $message . "\n";

            //Envoi de l'email
            
            $headers = "From: " . $email;

            if(mail($destinataire, $objet, $contenu, $headers)){
                echo "Emai sended succesfully";
            }
            else{
                echo "Error while sending your message. please try again";
            }
        }
    }
?>