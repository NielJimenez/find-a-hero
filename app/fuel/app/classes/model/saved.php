<?php

class Model_Saved extends Orm\Model {
  protected static $_properties = array(
    'id',
    'event_id',
    'created_by'
  );

  protected static $_table_name = 'saved_events';

  protected static $_belongs_to = array(
    'events' => array(
        'model_to' => 'Model_Event',
        'key_to' => 'id',
        'key_from' => 'event_id'
      ),
      'user' => array(
        'model_to' => 'Model_User',
        'key_to' => 'id',
        'key_from' => 'created_by'
      )
    );
}
