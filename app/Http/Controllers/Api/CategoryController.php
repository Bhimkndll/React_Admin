<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;

use Illuminate\Http\Request;
use App\Category;
use Cache;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
$categories=Category::all('id','name');
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
        'category' => 'required|string|max:255',

    ]);

    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()], 201);
    }

     $category = new Category;
     $category->name = $request->category;
     $category->save();

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
        $category = Category::find($id);
        return response(['category'=>$category],200);
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

$categorieee = Category:: findorfail($id);
$categorieee->delete();

}

public function save(Request $request,$id){

  $category = Category::find($id);

    $category->name = $request->category;

    $category->save();

}

}
