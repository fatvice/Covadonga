<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaUsuario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->smallIncrements('cod_usuario',4);
            $table->string('nombre',70);
            $table->string('rut',9)->nullable();
            $table->string('password',30);
            $table->string('estacionamiento',2);
            $table->string('bodega',2);
            $table->char('moroso',1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
