<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected string $table = 'projets';

    protected string $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['*'];

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    public function technos()
    {
        return $this->belongsToMany(Techno::class);
    }

    public function lienExts()
    {
        return $this->hasMany(LienExt::class, 'projet_id');
    }





}
