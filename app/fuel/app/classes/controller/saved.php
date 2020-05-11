<?php

use Fuel\Core\Controller_Rest;
use Fuel\Core\Input;

class Controller_Saved extends Controller_Rest
{
  public function get_index() {
    $id = Input::get('id');

    $events = Model_Saved::query()
      ->related('events')
      ->related('user')
      ->where('created_by', '=', $id)
      ->get();

    if (is_null($events) || is_null($id)) {
      return $this->response([]);
    }

    $list = [];
    foreach($events as $i => $obj) {
      $list[$i] = $obj->to_array();
    } 

    return $this->response(
      $list
    );
  }

  public function post_index() {
    $post = Input::json();

    $saved_event = new Model_Saved();
    $saved_event->event_id = $post['event_id'];
    $saved_event->created_by = $post['created_by'];
    $saved_event->save();

    return $this->response($saved_event->id);
  }

  public function delete_index() {
    $id = Input::get('id');

    $saved_event = Model_Saved::find($id);
    return $this->response($saved_event->delete());
  }
}
