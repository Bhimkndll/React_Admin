<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use \Carbon\Carbon;
use App\Fotter;
class ClientController extends Controller
{
    public function index(){
$posts= Post::where('status',1)->with('category','tags')->latest()->take(70)->get();
return response(['posts'=>$posts],200);
    }

public function singlepost(Request $request,$id){
	$post=Post::findOrfail($id);
	if($post){

$post= Post::with('category','tags')->where('id',$id)->get();

$posts=Post::where('status',1)->with('category','tags')->latest()->take(70)->get();
$bhim = \Carbon\Carbon::parse($post[0]->created_at)->diffForHumans();
}
return response(['post'=>$post,'date'=>$bhim,'otherposts'=>$posts],200);




}
public function categorypost($id){
	$post=Post::findOrfail($id);
	if($post){
$posts= Post::with('category','tags')->where('category_id',$post->category_id)->get();
return response(['otherposts'=>$posts],200);
	}
	return response(['error'=>'nodata found'],400);



}
public function otherpost(){
	$post=Post::latest()->take(10)->get();
	return response(['otherposts'=>$post],200);
}



public function mainslider(){
    $posts=Post::latest()->take(70)->where("carousel",true)->get();
    return response(['posts'=>$posts,'success'=>'fetching'],200);
}
public function fotter(){
$fotter=Fotter::latest()->take(1)->get();
return response(['footer'=>$fotter],200);
}
}
