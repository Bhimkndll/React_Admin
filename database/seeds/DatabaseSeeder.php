<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Crud;
use App\Category;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        User::create([
        	'name'=>'bhim',
        	'email'=>'bhi@gmail.com',
        	'password'=>bcrypt('bhimkandel'),
            'activation_token'=>"bhimbhim",
'active'=>1
        ]);
       /* factory(Crud::class,2)->create();
            factory(Category::class,100)->create();
*/
       /* Crud::create([
            'name'=>'bhim',
            'address'=>'Gaindakot',
         'age'=>12,

        ]);*/
    }
}
