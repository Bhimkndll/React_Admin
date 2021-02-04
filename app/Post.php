<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
  use SoftDeletes;
   protected $hidden = [
        'updated_at','pivot'
    ];

protected $fillable=[
'description','category_id','image','heading','slug','status','carousel','slider'
];
public function getfeaturedAttribute($featured)
{

	return asset($featured);
}
protected $dates=['deleted-at'];

  public function category(){
return $this->BelongsTo(Category::class);
}
public function tags(){

	return $this->belongsToMany('App\Tag');
}
public function users(){
    return $this->belongsToMany(User::class);
}


public function articleTitles() {
    return $this->hasMany('App\Article')->select(['id', 'title', 'user_id']);
}
}

