<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Departamento;

class DepartamentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($e=1;$e<=5;$e++){
            for ($i = 1; $i <= 8; $i++) {
                for($j=1;$j<=2;$j++){
                    $departamento = new Departamento();
                    $departamento->numero_depto=strval($e). strval($i) . strval($j);
                    $departamento->numero_torre= strval($e);
                    $departamento->estado=strval(random_int(0,3));
                    $departamento->save();
                }
            }
        }
        
    }
}
