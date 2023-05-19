<?php

namespace App\Admin\Controllers\Content;

use App\Models\Cate;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class CateController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Cate';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Cate());
        $grid->model()->orderByDesc('sort');

        $grid->column('id', __('编号'))->sortable();
        $grid->column('name', __('名称'))->filter();
        $grid->column('status', __('状态'))->switch();
        $grid->column('sort', __('排序'))->editable()->sortable();

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
        $show = new Show(Cate::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('名称'));
        $show->field('status', __('状态'));
        $show->field('sort', __('排序'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Cate());

        $form->text('name', __('名称'));
        $form->switch('status', __('状态'))->default(1);
        $form->number('sort', __('排序'))->default(0);

        return $form;
    }
}
