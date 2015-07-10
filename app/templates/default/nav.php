<?php
    $current_page = helpers\Url::lastsegment(helpers\Url::segments());
?>

<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element text-center">
                    <span style="font-size:65px;">
                        <i class="fa <?=$_COOKIE['icon']?>"></i>
                    </span>
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="clear">
                            <span class="block m-t-xs">
                                <strong class="font-bold"><?=$_COOKIE['username']?></strong>
                            </span>
                            <!-- <span class="text-muted text-xs block">Art Director <b class="caret"></b>
                            </span> -->
                        </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a href="#" id="out_link">I'm out</a></li>
                    </ul>

                    <form id="iamout" method="post">
                        <input type="hidden" name="iamout" value="1">
                    </form>
                </div>
                <div class="logo-element">
                    SM
                </div>

            </li>

            <li class="<?=$current_page == '' ? 'active' : ''?>">
                <a href="<?=DIR?>"><i class="fa fa-th-large"></i> <span class="nav-label">Home</span></a>
            </li>
            <li class="<?=$current_page == 'household_ledger' ? 'active' : ''?>">
                <a href="<?=DIR?>household_ledger"><i class="fa fa-credit-card"></i> <span class="nav-label">Household Ledger</span></a>
            </li>

            <li class="<?=$current_page == 'category' ? 'active' : ''?>">
                <a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Settings</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level">
                    <li class="<?=$current_page == 'category' ? 'active' : ''?>"><a href="<?=DIR?>settings/category">Category</a></li>
                </ul>
            </li>
        </ul>

    </div>
</nav>

<div id="page-wrapper" class="gray-bg dashbard-1">
    <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header" style="min-height:60px;">
                <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
            </div>
        </nav>
    </div>