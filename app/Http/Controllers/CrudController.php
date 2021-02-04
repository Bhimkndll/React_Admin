<?php
namespace App\Http\Controllers;
use App\Crud;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;

class CrudController extends Controller
{
/*public function__Construct(){
$this->middleware('auth');
}*/

public function wel(){
    return view('welcome')->with('Cruds',Crud::all('name'));
}
public function index(){
$contacts=Crud::paginate(1);    
        return $contacts->toJson();
}public function bhim(){

return view('welcome');
}

    public function store(Request $request ){
    	$this->validate($request,[
    	'fullname'=>'required|min:4',
    	'address'=>'required|min:5',
    	'age'=>'required|min:3',
]);
    	$cus=Crud::create([
    		'name'=>$request->fullname,
    		'address'=>$request->address,
    		'age'=>$request->age


    	]);

        if($cus){

    return response()->json(['status'=>200]);
        }
    }
public function edit($id){
    $contact=Crud::find($id);
    return $contact->toJson();
}




public function update(Request $request,$id){

    $crud=Crud::find($id);
    $crud->name=$request->fullname;
    $crud->address=$request->address;
    $crud->age=$request->age;
    $crud->save();
}
    public function delete($id){
    $c=Crud::find($id);
    $c->delete();

}
}

