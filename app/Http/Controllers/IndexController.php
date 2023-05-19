<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cate;
use App\Models\Country;
use App\Models\Product;

class IndexController extends Controller{
	public function index(Request $request){
		$deflimit 	= 5;
		$cate 		= (int)$request->input('cate', 0);
		$country 	= (int)$request->input('country', 0);
		$sort 		= (int)$request->input('sort', 0);
		$picker 	= (int)$request->input('getpicker', 0);
		$page 		= (int)$request->input('page', 1);
		$limit 		= (int)$request->input('limit', $deflimit);
		$page 		= $page < 1 ? 1 : $page;
		$limit 		= $limit < 1 ? $deflimit : $limit;

		$arr 		= [];
		if($picker === 1){
			$cates 		= Cate::where('status', 1)->orderByDesc('sort')->get()->toArray();
			$countries 	= Country::where('status', 1)->orderByDesc('sort')->get()->toArray();
			array_unshift($cates, ['name' => '全部', 'id' => 0]);
			array_unshift($countries, ['name' => '全部', 'id' => 0]);
			$sorts 		= [
				['name' => '全部', 'id' => 0],
				['name' => '价格低到高', 'id' => 1],
				['name' => '价格高到低', 'id' => 2],
				['name' => '佣金率低到高', 'id' => 3],
				['name' => '佣金率高到低', 'id' => 4]
			];
			$arr['pickers']		= [
				['text' => '国家', 'origin' => $countries, 'index' => 0, 'col' => 'country'],
				['text' => '类别', 'origin' => $cates, 'index' => 0, 'col' => 'cate'],
				['text' => '排序', 'origin' => $sorts, 'index' => 0, 'col' => 'sort'],
			];
		}

		$products 	= Product::select('products.*', 'b.huobi as symbol')
						->where('products.status', 1)
						->leftJoin('countries as b', 'products.country_id', '=', 'b.id');
		if($cate > 0){
			$products 	= $products->where('cate_id', $cate);
		}
		if($country > 0){
			$products 	= $products->where('country_id', $country);
		}
		switch($sort){
			case 1:
				$products 	= $products->orderBy('price');
			break;
			case 2:
				$products 	= $products->orderByDesc('price');
			break;
			case 3:
				$products 	= $products->orderBy('yongjin');
			break;
			case 4:
				$products 	= $products->orderByDesc('yongjin');
			break;
		}
		$products 		= $products->offset(($page - 1) * $limit)->limit($limit)->get();

		$arr['list']	= $products;
		$arr['page']	= $page;
		$arr['limit']	= $limit;
		return $this->success($arr);
	}

	public function product(Request $request){
		$id 	= (int)$request->input('id', 0);

		if($id < 1){
			return $this->error('产品不存在!');
		}
		$row 	= Product::find($id);
		if(!$row){
			return $this->error('产品不存在!');
		}
		return $this->success($row);
	}
}
