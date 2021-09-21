<?php

namespace App\Admin\Controllers;

use App\Models\Formation;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class FormationAdminController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Formations';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Formation());

        $grid->column('id', __('ID'))->sortable();
        $grid->column('nom', __('Nom'));
        $grid->column('lieu', __('Lieu'));
        $grid->column('formation_img_path', __('Icone'))->image();
        $grid->column('displayed', __('Affichée'))->switch()->default(0);
        $grid->column('date_debut', __('Date de début'))->sortable();
        $grid->column('date_fin', __('Date de fin'))->sortable();

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
        $show = new Show(Formation::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('nom', __('Nom'));
        $show->field('lieu', __('Lieu'));
        $show->field('formation_img_path', __('Icone'))->image();
        $show->field('img_alt', __('Icone'));
        $show->field('description', __('Description'));
        $show->field('displayed', __('Affichée'))->using([0 => 'Non', 1 => 'Oui']);
        $show->field('date_debut', __('Date de début'))->sortable();
        $show->field('date_fin', __('Date de fin'))->sortable();
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Formation());


        $form->display('id', __('ID'));
        $form->text('nom', __('Nom'));
        $form->text('lieu', __('Lieu'));
        $form->image('formation_img_path', __('Icone'))->uniqueName();
        $form->text('img_alt', __('Alt'));
        $form->textarea('description', __('Description'));
        $form->switch('displayed', __('Affichée'))->default(0);
        $form->date('date_debut', __('Date de début'));
        $form->date('date_fin', __('Date de fin'));


        return $form;
    }
}
