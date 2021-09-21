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
        $grid->column('titre', __('Titre'));
        $grid->column('display', __('Affiché'))->switch()->default(0);
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
        $show->field('titre', __('Titre'));
        $show->field('description', __('Description'));
        $show->field('img_path', __('Image'))->image();
        $show->field('img_alt', __('Alt'));
        $show->field('display', __('Affiché'))->using([0 => 'Non', 1 => 'Oui']);
        $show->field('accueil', __('Affiché sur l\'accueil'))->using([0 => 'Non', 1 => 'Oui']);
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
            $lienExts->texte();
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
        $form->text('titre', __('Titre'));
        $form->textarea('description', __('Description'));
        $form->image('img_path', __('Image'))->uniqueName();
        $form->text('img_alt', __('Alt'));
        $form->switch('display', __('Affiché'));
        $form->switch('accueil', __('Affiché sur l\'accueil'));
        $form->multipleSelect('technos', 'Technos')->options(Techno::all()->pluck('nom', 'id'));
        $form->hasMany('lienExts','Liens extérieurs', function (Form\NestedForm $form) {
            $form->url('url', 'url');
            $form->text('texte', 'Texte')->default('');
            $form->text('fa_class', 'Font Awesome Class');
            $form->switch('in_footer', 'Dans le footer')->default(0);
            $form->switch ('git', 'Lien git ?')->default(0);
        });

        return $form;
    }
}
