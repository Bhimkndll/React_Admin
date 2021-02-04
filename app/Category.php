<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
    Protected $fillable=[
    	'name'];


    


  public function post(){
return $this->hasOne('App\Post');
}
}