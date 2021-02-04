<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNavbarclientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('navbarclients', function (Blueprint $table) {
        $table->bigIncrements('id');
        $table->string('title');
        $table->integer('parent_id')->Default(null)->nullable();
        $table->string('page')->nullable();
        $table->integer('sort')->nullable();
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('navbarclients');
    }
}
