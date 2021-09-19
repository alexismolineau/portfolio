<?php

namespace App\Admin\Controllers;

use App\Models\LienExt;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class LienExtsAdminController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Liens extérieurs';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new LienExt());

        $grid->column('id', __('ID'))->sortable();
        $grid->column('url', __('Url'));
        $grid->column('fa_class', __('Font awesome class'));
        $grid->column('in_footer', __('Dans le footer'))->switch();
        $grid->column('git', __('Lien git'))->switch();
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed   $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(LienExt::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('url', __('Url'));
        $show->field('fa_class', __('Font awesome class'));
        $show->field('in_footer', __('Dans le footer'))->switch();
        $show->field('git', __('Lien git'))->switch();
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        $show->projets('Projet', function($projets){
            $projets->titre();
            $projets->img_path()->image();
            $projets->created_at();
            $projets->updated_at();
        });

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new LienExt());


        $form->display('id', __('ID'));
        $form->text('url', __('Url'));
        $form->text('fa_class', __('Font Awesome Class'));
        $form->switch('in_footer', __('Dans le footer'));
        $form->switch('git', __('Lien git'));


        return $form;
    }
}
