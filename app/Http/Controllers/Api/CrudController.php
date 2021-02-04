<?php
namespace App\Http\Controllers;
use App\Crud;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Validator;
class CrudController extends Controller
{

public function index(){
$contacts=Crud::paginate(4);
return $contacts->toJson();
}

    public function store(Request $request ){
    	$vali = Validator::make($request->all(), [ 
       'fullname'=>'required|min:4',
        'address'=>'required|min:5',
        'age'=>'required|min:3',
        ]);
    	
        if($vali->fails()){
            /*$name=$vali->errors()->all();
            return $name;*/
    
        return response(['errors'=>$vali->errors()->all()], 201);
    }
    	$cus=Crud::create([
    		'name'=>$request->fullname,
    		'address'=>$request->address,
    		'age'=>$request->age
        ]);

        if($cus){
            return response(['status'=>'created',200]);

/*    return response()->json(['status'=>200]);
*/        }
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

