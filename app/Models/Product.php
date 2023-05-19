<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model{
	use HasFactory;
	public $timestamps		= false;

	public function getImageAttribute($val){
		$res 	= $val ? explode(',', $val) : [];
		foreach($res as &$item){
			if($item && substr($item, 0, 4) != 'http'){
				$item 	= Storage::url($item);
			}
		}
		return $res;
	}

	public function setImageAttribute($val){
		$this->attributes['image'] 	= $val ? implode(',', $val) : null;
	}
}
