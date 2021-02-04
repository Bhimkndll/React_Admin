<?php

namespace App\Http\Controllers\Api;
use App\Tag;
use App\Category;
 use App\Post;
 use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;
use Image;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Cache;
class PostsController extends Controller
{

public function index()
    {
$posts= Post::with('category')->get();

return response(['posts'=>$posts,'sucess'=>'ready to insert'],200);
}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
{
$posts= Post::with('category')->get();

$categories = Category::all();
$tags=Tag::all();

return response(['posts'=>$posts,'categories'=>$categories,'tags'=>$tags,'sucess'=>'ready to insert'],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         $validator = Validator::make($request->all(), [
        'heading' => 'required',
        'image' => 'required',
        'slug' => 'required',
        'description' => 'required',
        'category' => 'required',
        'tags' => 'required',
    ]);

    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()], 400);
    }
if($request->hasFile('image'))
        {

            $featured=$request->image;

        $featured_new_name=time().$featured->getClientOriginalName();
        $featured->move('uo/posts',$featured_new_name);


$image=Image::make(public_path('uo/posts/'.$featured_new_name))->fit(487,333);

$image->save();

        }

      $Post = Post::create([

      'heading'=>$request->heading,
      'description'=>$request->description,
      'category_id'=>$request->category,
      'image'=>'uo/posts/'.$featured_new_name,
      'slug'=>Str::slug($request->heading)
]);
      $string = $request->tags;
     $str_arr = explode (",", $string);
      $Post->tags()->attach($str_arr);
    return response(['sucesss'=>'it is stored '],200);

}
public function destroy($id)
    {
        $post=Post::find($id);
        $post->delete();
       return response(['sucesss'=>'post is just trashed']);
    }

public function switch($id,$pid){
    $post=Post::find($pid);

$post->status = ! $post->status;
$post->save();

}
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

      $post=Post::find($id);
$tags = $post->tags()->where('post_id',$post->id)->get()->toarray();

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $post=Post::with('tags')->where('id',$id)->get(['heading','id','category_id','description','slug']) ;

         return response(['posts'=>$post,200]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function save(Request $request, $id)
    {


 $validator = Validator::make($request->all(), [
        'heading' => 'required',
        'slug' => 'required',
        'description' => 'required',
        'category' => 'required',
        'tags' => 'required',
    ]);

    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()], 400);
    }
       $post=Post::find($id);

        if($request->hasFile('image'))
        {




            $featured=$request->image;

        $featured_new_name=time().$featured->getClientOriginalName();
        $featured->move('uo/posts',$featured_new_name);
        $post->image='uo/posts/'.$featured_new_name;

        }

       $post->heading=$request->heading;
       $post->category_id=$request->category;
       $post->description=$request->description;
        $post->slug=Str::slug($request->heading);

 $string = $request->tags;
     $str_arr = explode (",", $string);
$post->tags()->sync($str_arr);
$post->save();

return response(['sucess'=>'it is stores'],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


public function trashed()
{

$post=Post::onlyTrashed()->get();
return view('admin.posts.trashed')->with('posts',$post);

}
public function kill($id)

{

    $post=Post::withTrashed()->where('id',$id)->first();

    $post->forceDelete();

    Session::flash('success','You have delete the post permanently');
return redirect()->back();
}

public function restore($id)

{

$post=Post::withTrashed()->where('id',$id)->first();
$post->restore();

Session::flash('success','The post is restore');
return redirect()->route('postss');


}
public function slider($id){
    $post=Post::find($id);

$post->slider = ! $post->slider;
$post->save();

}
public function carousel($id){
    $post=Post::find($id);

$post->carousel = ! $post->carousel;
$post->save();

}
public function maincontent($id){
    $post=Post::find($id);

$post->maincontent = ! $post->maincontent;
$post->save();

}



}
