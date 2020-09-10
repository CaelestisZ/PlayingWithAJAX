<?php
    extract($_GET);
    if($jsonarr!='{}') {
        file_put_contents('count.json', $jsonarr);
    }
    $json_file = file_get_contents('count.json');
    $json = json_encode(json_decode($json_file, true), true);
    echo $json;
?>