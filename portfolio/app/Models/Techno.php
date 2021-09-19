<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Techno extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected string $table = 'technos';

    protected string $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];



    public function projets()
    {
        return $this->belongsToMany(Projet::class);
    }

}
