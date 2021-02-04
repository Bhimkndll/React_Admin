<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use App\Crud;
$factory->define(Crud::class, function (Faker $faker) {
    return [
        
        'name' => $faker->name,
        'address' => $faker->name,
         'age'=>$faker->randomDigit,
    ];
    
});
