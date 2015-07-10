<?php

use Helpers\Assets;
use Helpers\Url;
use Helpers\Hooks;

//initialise hooks
$hooks = Hooks::get();
?>
</div>

<!-- JS -->
<?php
Assets::js(array(
	'//code.jquery.com/jquery-1.11.3.min.js',
	'//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js',
	'//code.jquery.com/ui/1.11.2/jquery-ui.js',
	Url::templatePath() . 'js/plugins/metisMenu/jquery.metisMenu.js',
	Url::templatePath() . 'js/inspinia.js',
	Url::templatePath() . 'js/plugins/pace/pace.min.js',
	Url::templatePath() . 'js/plugins/fullcalendar/fullcalendar.min.js',
	Url::templatePath() . 'js/custom.js',
));

//hook for plugging in javascript
$hooks->run('js');

//hook for plugging in code into the footer
$hooks->run('footer');
?>

</body>
</html>
