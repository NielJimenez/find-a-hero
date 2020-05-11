<?php

class Model_Event extends Orm\Model
{
  protected static $_properties = array(
    'id',
    'title',
    'date',
    'description',
    'location',
    'created_by'
  );

  protected static $_belongs_to = array(
    'user' => array(
      'model_to' => 'Model_User',
      'key_to' => 'id',
      'key_from' => 'created_by'
    )
  );
}
