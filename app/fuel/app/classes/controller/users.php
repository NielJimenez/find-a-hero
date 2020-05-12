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
class Controller_Users extends Controller_Rest
{

	public function post_auth() {
		$post = Input::post();
		$query = Model_User::query()
			->where('email', '=', $post['email'])
			->where('password', '=', $post['password'])
			->get_one();
		
		if(is_null($query)) {
			return $this->response(null);
		}
		
		return $this->response($post);
	}

	public function get_index()
	{
		$id = Input::get('id');

		$user = new Model_User();
		return $this->response($user->find($id));
	}

	public function post_index()
	{
		$post = Input::json();
		
		$user = new Model_User();
		$user->username = $post['username'];
		$user->email = $post['email'];
		$user->password = $post['password'];
		$user->save();

		return $this->response($user->id);
	}

	public function put_index()
	{
		$put = Input::json();

		$user = new Model_User();
		$user = $user->find($put['id']);
		$user->username = $put['username'];
		$user->email = $put['email'];

		if(isset($put['password'])) {
			$user->password = $put['password'];
		}

		return $this->response($user->save());
	}
}
