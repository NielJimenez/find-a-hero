<?php

namespace Fuel\Migrations;

use Fuel\Core\DB;
use Fuel\Core\DBUtil;

class Seed_User_DB
{
  function up()
  {
    DB::insert('users')->set(
        array(
          'email' => 'admin@mail.com',
          'username' => 'admin_user',
          'password' => 'password'
        )
      )->execute();
  }

  function down()
  {
    DB::delete('users')
      ->where('email','=','admin@mail.com')
      ->execute();
  }
}
