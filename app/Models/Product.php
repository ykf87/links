<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model{
	use HasFactory;
	public $timestamps		= false;

	public function getImageAttribute($val){
		return $val ? explode(',', $val) : [];
	}

	public function setImageAttribute($val){
		$this->attributes['image'] 	= $val ? implode(',', $val) : null;
	}
}
