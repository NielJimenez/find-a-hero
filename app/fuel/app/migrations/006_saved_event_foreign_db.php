<?php

namespace Fuel\Migrations;

use Fuel\Core\DB;
use Fuel\Core\DBUtil;

class Saved_Event_Foreign_DB
{
  function up()
  {
    DBUtil::add_foreign_key('saved_events', array(
      'key' => 'event_id',
      'reference' => array(
        'table' => 'events',
        'column' => 'id'
      )
    ));

    DBUtil::add_foreign_key('saved_events', array(
      'key' => 'created_by',
      'reference' => array(
        'table' => 'users',
        'column' => 'id'
      )
    ));
  }

  function down()
  {

  }
}
