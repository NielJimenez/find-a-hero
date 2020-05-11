<?php
/**
 * Fuel is a fast, lightweight, community driven PHP 5.4+ framework.
 *
 * @package    Fuel
 * @version    1.8.2
 * @author     Fuel Development Team
 * @license    MIT License
 * @copyright  2010 - 2019 Fuel Development Team
 * @link       https://fuelphp.com
 */

use Fuel\Core\Controller_Rest;
use Fuel\Core\Input;

/**
 * The Welcome Controller.
 *
 * A basic controller example.  Has examples of how to set the
 * response body and status.
 *
 * @package  app
 * @extends  Controller
 */
class Controller_Events extends Controller_Rest
{
	public function get_list() {
		$event = Model_Event::find('all', array('related' => array('user')));

		return $this->response($event);
	}

	public function get_index()
	{
		$id = Input::get('id');

		$event = Model_Event::find($id, array('related' => array('user')));

		return $this->response($event);
	}

	public function post_index()
	{
		$post = Input::json();
		
		$event = new Model_Event();
		$event->title = $post['title'];
		$event->date = $post['date'];
		$event->description = $post['description'];
		$event->location = $post['location'];
		$event->created_by = $post['created_by'];
		$event->save();

		return $this->response($event->id);
	}

	public function put_index()
	{
		$put = Input::json();

		$event = new Model_Event();
		$event = $event->find($put['id']);
		$event->title = $put['title'];
		$event->date = $put['date'];
		$event->description = $put['description'];
		$event->location = $put['location'];
		$event->created_by = $put['created_by'];

		return $this->response($event->save());
	}
}
