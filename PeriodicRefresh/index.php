<?php
    extract($_GET);
    $json_file = file_get_contents('count.json');
    $json = json_encode(json_decode($json_file, true), true);
    echo $json;
?>