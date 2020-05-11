<?php

use Fuel\Core\Model;

class Model_User extends Orm\Model
{
  protected static $_properties = array(
    'id',
    'email',
    'username',
    'password'
  );

  protected static $_has_one = array(
    'event' => array(
      'model_to' => 'Model_Event',
      'key_from' => 'id',
      'key_to' => 'created_by'
    ),
    'saved_event' => array(
      'model_to' => 'Model_Saved',
      'key_from' => 'id',
      'key_to' => 'created_by'
    )
  );
}
