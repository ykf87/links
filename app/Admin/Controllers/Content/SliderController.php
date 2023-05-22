<?php

namespace App\Admin\Controllers\Content;

use App\Models\Slider;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class SliderController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Slider';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Slider());
        $grid->model()->orderByDesc('sort')->orderByDesc('id');

        $grid->column('id', __('编号'));
        $grid->column('src', __('图片'))->image('', 60, 60);
        $grid->column('sort', __('排序'))->editable()->sortable();
        $grid->column('status', __('状态'))->switch();
        $grid->column('url', __('跳转地址'))->editable();

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
        $show = new Show(Slider::findOrFail($id));

        $show->field('id', __('编号'));
        $show->field('src', __('图片'));
        $show->field('sort', __('排序'));
        $show->field('status', __('状态'));
        $show->field('url', __('跳转地址'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Slider());

        $form->image('src', __('图片'));
        $form->number('sort', __('排序'))->default(0);
        $form->switch('status', __('状态'))->default(1);
        $form->url('url', __('跳转地址'));

        return $form;
    }
}
