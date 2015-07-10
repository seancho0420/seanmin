<?php
namespace controllers;

use core\view;
use core\controller;
use helpers\url;

/*
 * Welcome controller
 *
 * @author David Carr - dave@simplemvcframework.com
 * @version 2.2
 * @date June 27, 2014
 * @date updated May 18 2015
 */
class seanmin extends controller
{
    private $_seanmin;
    /**
     * Call the parent construct
     */
    public function __construct()
    {
        parent::__construct();
        $this->language->load('Welcome');

        if(isset($_POST['iamout']) && $_POST['iamout'] === '1') {
            unset($_COOKIE['username']);
            unset($_COOKIE['icon']);
            setcookie('username', null, -1, '/');
            setcookie('icon', null, -1, '/');

            Url::redirect('user');
        }

        // $this->_seanmin = new \Models\seanmin();
    }

    /**
     * Define Index page title and load template files
     */
    public function index()
    {
        // should be done for all pages except user
        $this->check_cookie();

        $data['title'] = $this->language->get('welcome_text');
        $data['welcome_message'] = $this->language->get('welcome_message');        

        View::renderTemplate('header', $data);
        View::renderTemplate('nav', $data);
        View::render('welcome/index', $data);
        View::renderTemplate('main_bottom', $data);
        View::renderTemplate('footer', $data);
    }

    public function user() {
        if(isset($_POST['username']) && trim($_POST['username']) !== '') {
            $icon_list = array(
                "fa-diamond",
                "fa-connectdevelop",
                "fa-heart",
                "fa-forumbee",
                "fa-bolt",
                "fa-coffee",
                "fa-cube",
                "fa-bug",
                "fa-globe",
                "fa-paw",
                "fa-smile-o",
                "fa-paper-plane",
                "fa-star",
                "fa-dribbble",
                "fa-empire",
                "fa-pagelines",
                "fa-skyatlas",
            );

            $icon = $icon_list[mt_rand(0, sizeof($icon_list) - 1)];

            // set cookie for 1 year
            setcookie('username', trim($_POST['username']), (time() + (86400 * 30)) * 12, "/");
            setcookie('icon', $icon, (time() + (86400 * 30)) * 12, "/");

            Url::redirect('');
        }

        if(isset($_COOKIE['username']) && $_COOKIE['username'] !== '') {
            Url::redirect('');
        }

        View::renderTemplate('header', $data);
        View::render('user/index', $data);
        View::renderTemplate('footer', $data);
    }

    public function household_ledger() {
        $this->check_cookie();

        View::renderTemplate('header', $data);
        View::renderTemplate('nav', $data);
        View::render('household_ledger/index', $data);
        View::renderTemplate('main_bottom', $data);
        View::renderTemplate('footer', $data);
    }

    public function category() {
        $this->check_cookie();

        View::renderTemplate('header', $data);
        View::renderTemplate('nav', $data);
        View::render('settings/category', $data);
        View::renderTemplate('main_bottom', $data);
        View::renderTemplate('footer', $data);
    }

    //helper functions
    private function check_cookie() {
        if(!isset($_COOKIE['username']) || $_COOKIE['username'] === '') {
            Url::redirect('user');
        }
    }

}
