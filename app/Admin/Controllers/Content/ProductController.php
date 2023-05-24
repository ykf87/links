<?php

namespace App\Admin\Controllers\Content;

use App\Models\Product;
use App\Models\Cate;
use App\Models\Country;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ProductController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Product';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Product());
        $grid->model()->orderByDesc('sort')->orderByDesc('id');

        $country    = Country::where('status', 1)->orderByDesc('sort')->pluck('name', 'id')->toArray();
        $cate       = Cate::where('status', 1)->orderByDesc('sort')->pluck('name', 'id')->toArray();

        $grid->column('id', __('编号'));
        $grid->column('image', __('产品图'))->image('', 30,30);
        $grid->column('title', __('标题'))->filter();
        $grid->column('min_price', __('最低价格'))->sortable();
        $grid->column('price', __('价格'))->sortable();
        $grid->column('yongjin', __('佣金率'))->display(function($val){
            return $val ? $val . '%' : '';
        })->sortable();
        $grid->column('sort', __('置顶'))->editable()->sortable()->hide();
        $grid->column('country_id', __('国家'))->using($country)->filter($country);
        $grid->column('cate_id', __('类型'))->filter($cate)->using($cate);
        $grid->column('url', __('地址'))->display(function($val){
            return $val ? '<a href="'.$val.'"><i class="fa fa-link"></i> 打开</a>' : '';
        });
        $grid->column('addtime', __('添加时间'))->display(function($val){
            return $val ? date('Y-m-d H:i:s', $val) : null;
        })->hide();
        $grid->column('status', __('状态'))->switch();

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Product::findOrFail($id));

        $show->field('id', __('编号'));
        $show->field('image', __('产品图'));
        $show->field('title', __('标题'));
        $show->field('min_price', __('最低价'));
        $show->field('price', __('价格'));
        $show->field('yongjin', __('佣金率'));
        $show->field('addtime', __('添加时间'));
        $show->field('status', __('状态'));
        $show->field('sort', __('排序'));
        $show->field('country_id', __('Country id'));
        $show->field('cate_id', __('Cate id'));
        $show->field('url', __('Url'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form       = new Form(new Product());
        $country    = Country::where('status', 1)->orderByDesc('sort')->pluck('name', 'id')->toArray();
        $cate       = Cate::where('status', 1)->orderByDesc('sort')->pluck('name', 'id')->toArray();

        $form->select('country_id', __('国家'))->options($country);
        $form->select('cate_id', __('类型'))->options($cate);
        $form->text('title', __('标题'));
        $form->multipleImage('image', __('产品图'))->removable();
        $form->currency('min_price', __('最低价格'))->help('如果商品就一个价格,最低价格留空即可');
        $form->currency('price', __('价格'))->help('最高价格,一个价只需要填写这个');
        $form->rate('yongjin', __('佣金率'));
        $form->url('url', __('链接'));
        $form->switch('status', __('状态'))->default(1);
        $form->number('sort', __('排序'))->default(0);

        $form->saving(function(Form $form){
            $form->addtime  = time();
        });
        return $form;
    }
}
