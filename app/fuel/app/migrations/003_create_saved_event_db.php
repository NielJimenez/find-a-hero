<?php

namespace Fuel\Migrations;

use Fuel\Core\DBUtil;

class Create_Saved_Event_DB
{
  function up()
  {
    DBUtil::create_table('saved_events', array(
      "id" => array(
        "type" => 'int',
        "constraint" => 5,
        "auto_increment" => true
      ),
      "event_id" => array("type" => 'int', 'constraint' => 5),
      "created_by" => array("type" => 'int', 'constraint' => 5)
      ),
      array('id')
    );
  }

  function down()
  {
    DBUtil::drop_table('saved_events');
  }
}
