<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{   

  protected $fillabe=['Tag_name'];
  protected $hidden = [
        'created_at','updated_at','pivot'
    ];

public function posts(){
return $this->BelongsTOMany('App\Tag');
}
}