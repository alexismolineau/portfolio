<?php

namespace App\Admin\Controllers;

use App\Models\Projet;
use App\Models\Techno;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ProjetAdminController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Projets';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Projet());

        $grid->column('id', __('ID'))->sortable();
        $grid->column('titre', __('titre'));
        $grid->column('display', __('Affiché'))->switch();
        $grid->column('accueil', __('Affiché sur l\'accueil'))->switch();
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
        $show = new Show(Projet::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('titre', __('titre'));
        $show->field('description', __('description'));
        $show->field('img_path', __('Image'))->image();
        $show->field('display', __('Affiché'));
        $show->field('accueil', __('Affiché sur l\'accueil'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));
        $show->technos('technos', function($technos){
            $technos->resource('/admin/technos');
            $technos->nom();
            $technos->created_at();
            $technos->updated_at();
        });

        $show->lienExts('lienExts', function($lienExts){
            $lienExts->resource('/admin/lienExts');
            $lienExts->url();
            $lienExts->in_footer()->switch();
            $lienExts->git()->switch();
            $lienExts->created_at();
            $lienExts->updated_at();
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
        $form = new Form(new Projet());


        $form->display('id', __('ID'));
        $form->text('titre', __('titre'));
        $form->textarea('description', __('description'));
        $form->image('img_path', __('image'))->uniqueName();
        $form->switch('display', __('Affiché'));
        $form->switch('accueil', __('Affiché sur l\'accueil'));
        $form->multipleSelect('technos', 'Technos')->options(Techno::all()->pluck('nom', 'id'));
        $form->hasMany('lienExts','Liens extérieurs', function (Form\NestedForm $form) {
            $form->url('url', 'url');
            $form->text('fa_class', 'Font Awesome Class');
            $form->switch('in_footer', 'Dans le footer');
            $form->switch ('git', 'Lien git ?');
        });

        return $form;
    }
}
