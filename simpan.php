<?php  
 /*  
 source: belajarwebpedia.com  
 */  
 $namafile = "./database/Data.txt";  
 $orang    = trim($_POST["myname"]);  
 $usia     = trim($_POST["myage"]);
 $jam      = date('D, d-m-Y');
 $file = fopen($namafile,"add");
 fwrite($file,$orang."|".$usia." on ".$jam."\n");
 fclose($file);
 echo "<a href='$namafile' style='font-size:20px;'>Untuk melihat database</a>"
 ?>