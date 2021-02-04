<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Follow;
use Auth;
use Illuminate\Support\Facades\DB;

class FollowController extends Controller
{
 public function index(){
 	$users=DB::table('users')->select('id','name')->where('id','<>',1)->get()->toArray();
 	$fri=DB::table('follows')->select('self_id')->where('user_id',Auth::user()->id)->get()->toArray();


return response(['users'=>$users,'friends'=>$fri],200);
 }

public function friend($id){
$user=Auth::user();

$follow=new Follow;
$follow->user_id=$user->id;
$follow->self_id=$id;
$follow->save();
}

public function followers($id){
 $followers=User::with('follows')->where('id',$id)->get(['id']);

         return response(['followers'=>$followers,200]);
}
}


