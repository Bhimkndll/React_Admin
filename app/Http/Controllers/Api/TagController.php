<?php

namespace App\Http\Controllers\APi;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Tag;
use Cache;
use App\Category;
class TagController extends Controller
{

    public function index()    {
      
        $categories=Tag::all('id','Tag_name');
        Cache::set('bhim',$categories);

return response(['categories'=>Cache::get('bhim')],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
   

        /**
        * Store a newly created resource in storage.
        *
        * @param  \Illuminate\Http\Request  $request
        * @return \Illuminate\Http\Response
        */
    public function store(Request $request)
    {
        
         $validator = Validator::make($request->all(), [
        'tag' => 'required|string|max:255',
        
    ]);
 
    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()], 201);
    }
     
     $tag = new Tag;
     $tag->Tag_name = $request->tag;
     $tag->save();
     
return response(['status'=>'it is inserted',200]);
        
      }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tag = Tag::find($id);
        return response(['tag'=>$tag],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
   

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
public function delete($id)
{

$categorieee = Tag:: findorfail($id);
$categorieee->delete();

}

public function save(Request $request,$id){

  $tag = tag::find($id);

    $tag->Tag_name = $request->tag;

    $tag->save();

}

}




