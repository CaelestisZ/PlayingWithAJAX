<?php
	extract($_GET);

	$file = fopen("electives.csv","r");
	while($line = fgets($file))
	{
		$modline = trim($line);
		
		$arr = explode(",",$modline);
		$found = false;
		if($dept == $arr[0])
		{
			$found = true;
			break;
		}
	}
	if($found == true)
	{
		echo "parent.obj.populateElectives('$modline');";
	}
?>