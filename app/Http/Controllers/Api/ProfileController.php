<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Auth;
class ProfileController extends Controller
{
  public function index(){
if(Auth::check())

return response(['userprofile'=>Auth::user()],200);

else
	return response(['users'=>'You are hacker you might not have luck today ']);

  }
  public function save(Request $request,$id){
$user=User::find($id);

    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email',


    ]);
    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()], 401);
    }
$user->name=$request->name;
$user->email=$request->email;
$user->save();
  }

}
