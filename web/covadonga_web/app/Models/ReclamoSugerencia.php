<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReclamoSugerencia extends Model
{
    use HasFactory;
    public $timestamps = false;
    public function usuario(){
        return $this->belongsTo("App\Models\Usuario", "cod_usuario");
    }
    public $table="reclamos_sugerencias";
}
