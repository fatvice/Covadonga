<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $primaryKey= 'cod_usuario';

    public function reclamosSugerencias(){
        return $this->hasMany("App\Models\ReclamoSugerencia", "cod_usuario");
    }
    public function pago(){
        return $this->hasMany("App\Models\Pago", "cod_usuario");
    }
    public function deuda(){
        return $this->hasMany("App\Models\Deuda", "cod_usuario");
    }
}
