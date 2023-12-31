<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('heading');
            $table->string('slug');
            $table->Biginteger('category_id');
            $table->boolean('status')->default(0);
            $table->boolean('carousel')->default(0);
            $table->boolean('slider')->default(0);
            $table->boolean('maincontent')->default(0);
            $table->string('image');
            $table->text('description');
            $table->softDeletes();
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
        Schema::dropIfExists('posts');
    }

}
