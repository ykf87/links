<?php

namespace App\Admin\Controllers\Content;

use App\Models\Country;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class CountryController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Country';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Country());
        $grid->model()->orderByDesc('sort');

        $grid->column('id', __('编号'))->sortable();
        $grid->column('name', __('名称'))->filter();
        $grid->column('huobi', __('货币符号'))->editable();
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
        $show = new Show(Country::findOrFail($id));

        $show->field('id', __('编号'));
        $show->field('name', __('名称'));
        $show->field('huobi', __('货币符号'));
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
        $form = new Form(new Country());

        $form->text('name', __('名称'));
        $form->text('huobi', __('货币符号'))->placeholder('默认 $ 美元符号');
        $form->switch('status', __('状态'))->default(1);
        $form->number('sort', __('排序'))->default(0);

        return $form;
    }
}
