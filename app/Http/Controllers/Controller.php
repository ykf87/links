<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController{
    use AuthorizesRequests, ValidatesRequests;


    public function success($data = null, string $msg = '', int $code = 200, int $httpcode = 200){
		return $this->response($data, $msg, $code, $httpcode);
	}
	public function error(string $msg = '', $data = null, int $code = 500, int $httpcode = 200){
		return $this->response($data, $msg, $code, $httpcode);
	}
	private function response($data, string $msg, int $code, int $httpcode){
		$responseData 	= [
			'code'	=> $code,
			'data'	=> $data,
			'msg'	=> $msg,
		];
		$request 	= request();
		return response()->json($responseData, $httpcode);
	}
}
