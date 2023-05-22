<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Slider extends Model{
	use HasFactory;
	public $timestamps		= false;

	public function getSrcAttribute($val){
		if(!$val){
			return '';
		}
		$four 		= strtolower(substr($val, 0, 4));
		if($four != 'http'){
			$val 	= Storage::url($val);
		}
		return $val;
	}
}
