<?php

namespace App\Admin\Controllers;

use App\Models\Projet;
use App\Models\Techno;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class TechnoAdminController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Technos';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Techno());

        $grid->column('id', __('ID'))->sortable();
        $grid->column('nom', __('Nom'));
        $grid->column('isFront', __('Front'))->switch();
        $grid->column('isBack', __('Back'))->switch();
        $grid->column('created_at', __('Created at'))->sortable();
        $grid->column('updated_at', __('Updated at'))->sortable();

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
        $show = new Show(Techno::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('nom', __('Nom'));
        $show->field('fa_class', __('Font Awesome Class'));
        $show->field('isFront', __('Front'))->using([0 => 'Non', 1 => 'Oui']);
        $show->field('isBack', __('Back'))->using([0 => 'Non', 1 => 'Oui']);
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));
        $show->projets('projets', function($projets){
            $projets->resource('/admin/projets');
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
        $form = new Form(new Techno());


        $form->display('id', __('ID'));
        $form->text('nom', __('Nom'));
        $form->text('fa_class', __('Font Awesome Class'));
        $form->switch('isFront', __('Front'));
        $form->text('isBack', __('Back'));
        $form->multipleSelect('projets', 'Projets')->options(Projet::all()->pluck('titre', 'id'));

        return $form;
    }
}
