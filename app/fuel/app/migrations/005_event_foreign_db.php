<?php

namespace Fuel\Migrations;

use Fuel\Core\DB;
use Fuel\Core\DBUtil;

class Event_Foreign_DB
{
  function up()
  {
    DBUtil::add_foreign_key('events', array(
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
