<?php

namespace Fuel\Migrations;

use Fuel\Core\DBUtil;

class Create_Event_DB
{
  function up()
  {
      DBUtil::create_table('events', array(
        "id" => array("type" => 'int', 'constraint' => 5, 'auto_increment' => true),
        "title" => array("type" => 'text'),
        "date" => array("type" => 'text'),
        "description" => array("type" => 'text'),
        "location" => array("type" => 'text'),
        "created_by" => array("type" => 'int', 'constraint' => 5)
      ),
      array('id')
    );
  }

  function down()
  {
    DBUtil::drop_table('events');
  }
}
