<?php

use Helpers\Assets;
use Helpers\Url;
use Helpers\Hooks;

//initialise hooks
$hooks = Hooks::get();
?>
<!DOCTYPE html>
<html lang="<?=LANGUAGE_CODE; ?>">
<head>

	<!-- Site meta -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php
	//hook for plugging in meta tags
	$hooks->run('meta');
	?>
	<title><?=SITETITLE;?></title>

	<!-- CSS -->
	<?php
	Assets::css(array(
		'//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css',
		'//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css',
		Url::templatePath() . 'css/plugins/fullcalendar/fullcalendar.css',
		Url::templatePath() . 'css/plugins/fullcalendar/fullcalendar.print.css',
		Url::templatePath() . 'css/animate.css',
		Url::templatePath() . 'css/style.css',
		Url::templatePath() . 'css/custom.css',
	));

	//hook for plugging in css
	$hooks->run('css');
	?>

</head>
<body>
<?php
//hook for running code after body tag
$hooks->run('afterBody');
?>

<div id="wrapper">