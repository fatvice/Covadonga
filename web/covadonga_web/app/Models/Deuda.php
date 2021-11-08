<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deuda extends Model
{
    use HasFactory;
    public $timestamps = false;
    public function usuario(){
        return $this->belongsTo("App\Models\Usuario", "cod_usuario");
    }
    public $table="deudas";
}
