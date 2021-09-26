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
        $grid->column('isFront', __('Front'))->switch()->default(0);
        $grid->column('isBack', __('Back'))->switch()->default(0);
        $grid->column('isFramework', __('Framework'))->switch()->default(0);
        $grid->column('isCMS', __('CMS'))->switch()->default(0);
        $grid->column('isBDD', __('BDD'))->switch()->default(0);
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
        $show->field('bg_img', __('Image de fond'));
        $show->field('isFront', __('Front'))->using([0 => 'Non', 1 => 'Oui']);
        $show->field('isBack', __('Back'))->using([0 => 'Non', 1 => 'Oui']);
        $show->field('isFramework', __('Framework'))->using([0 => 'Non', 1 => 'Oui']);
        $show->field('isCMS', __('CMS'))->using([0 => 'Non', 1 => 'Oui']);
        $show->field('isBDD', __('BDD'))->using([0 => 'Non', 1 => 'Oui']);
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
        $form->image('bg_img', __('Image de fond'))->uniqueName();
        $form->switch('isFront', __('Front'))->default(0);
        $form->switch('isBack', __('Back'))->default(0);
        $form->switch('isFramework', __('Framework'))->default(0);
        $form->switch('isCMS', __('CMS'))->default(0);
        $form->switch('isBDD', __('BDD'))->default(0);
        $form->multipleSelect('projets', 'Projets')->options(Projet::all()->pluck('titre', 'id'));

        return $form;
    }
}
