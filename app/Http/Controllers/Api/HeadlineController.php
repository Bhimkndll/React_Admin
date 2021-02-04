<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Headline;
class HeadlineController extends Controller
{
     public function store(Request $request)
    {

         $validator = Validator::make($request->all(), [
        'headline' => 'required|string|max:255',

    ]);

    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()], 201);
    }

     Headline::create(['name' => $request->headline]);

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
        $headline = Headline::find($id);
        return response(['headline'=>$headline],200);
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

$categorieee = Headline:: findorfail($id);
$categorieee->delete();

}

public function save(Request $request,$id){

  $headline = headline::find($id);

    $headline->name = $request->headline;

    $headline->save();

}

}
