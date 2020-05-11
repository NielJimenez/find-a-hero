<?php

namespace Fuel\Migrations;

use Fuel\Core\DBUtil;

class Create_User_DB
{
  function up()
  {
    DBUtil::create_table('users', array(
      "id" => array("type" => 'int', 'constraint' => 5, 'auto_increment' => true),
      "email" => array("type" => 'text'),
      "username" => array("type" => 'text'),
      "password" => array("type" => 'text')
    ), array('id'));
  }

  function down()
  {
    DBUtil::drop_table('users');
  }
}
