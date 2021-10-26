<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaReclamoSugerencia extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reclamos_sugerencias', function (Blueprint $table) {
            $table->bigIncrements('cod_info',5);
            $table->smallInteger('cod_usuario')->unsigned();
            $table->text('texto');
            $table->char('tipo_info',1);
            //FK
            $table->foreign('cod_usuario')->references('cod_usuario')->on('usuarios')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reclamos_sugerencias');
    }
}
