<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Navbarclient;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
 use Carbon;

class NavbarclientController extends Controller
{

Public function create(Request $request){

         $validator = Validator::make($request->all(), [
        'nav' => 'required|string|max:255',

    ]);

    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()], 201);
    }

     $nav = new Navbarclient;
     $nav->title = $request->nav;

     $nav->save();
     return response(['status'=>'it is inserted',200]);
        }
Public function save(){

}
Public function fire(){

}
 function index()
    {
       $menu='';
     $menu.=self::indexx();

     $b = $menu;


//echo  json_encode(['navs'=>$b]);
   return response(['navs'=>$b],200);


}

public function indexx($parent=NULL)
{
$menu='';

    if(is_null($parent))
    {
    $navbar=Navbarclient::Select('title','id')
                ->where('parent_id','=',($parent))
                ->get();

    }
   if(!is_null($parent))
    {
        $navbar=Navbarclient::Select('title','id')
                ->where('parent_id','=',($parent))
                ->get();


            }
        Foreach($navbar as $nav=>$items)
        {

            if(Navbarclient::where('parent_id','=',($items->id))->first())
                {






 $menu .='<li class="has-child"><a href="/contact"id="bhim">'. $items->title.'<span class="caret"></span></a>';



}
else
{

               $menu .='<li><a href="">'. $items->title.'</a>';


}


        $menu .='<ul class="menu-ul">'.self::indexx($items->id).'</ul>';

        $menu.='</li>';
    }


return  $menu;
}



}



