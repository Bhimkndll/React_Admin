<?php

namespace App\Http\Controllers\APi;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Fotter;
class FotterController extends Controller
{
    public function index(Request $requeset){

$footes=Fotter::all()->first();
return response(['fotter'=>$footes],200);

    }




    public function update(Request $request ,$id)
    {
         $validator = Validator::make($request->all(), [
        'callus' => 'required|string|max:255',
         'mailus' => 'required|string|email|max:255',
        'shortdesc' => 'required|string|max:255',
        'subscribe' => 'required|string|max:255',
        'findus' => 'required|string|max:255',
    ]);

    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()], 201);
    }



$fotters=Fotter::find($id);

        if($request->hasFile('image'))
        {
            $fotter=$request->image;

    $fotter_new_name=time().$fotter->getClientOriginalName();
        $fotter->move('uo/fotter',$fotter_new_name);
        $fotters->image='uo/fotter/'.$fotter_new_name;

        }

       $fotters->callus=$request->callus;
       $fotters->mailus=$request->mailus;
       $fotters->shortdesc=$request->shortdesc;
       $fotters->findus=$request->findus;

       $fotters->subscribe=$request->subscribe;



$fotters->save();

return response(['sucess'=>'it is stores'],200);
    }




}
