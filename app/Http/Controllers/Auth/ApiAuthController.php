<?php
namespace App\Http\Controllers\Auth;
use Avatar;
use Storage;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Notifications\SignupActivate;
use Session;
use Cookie;
class ApiAuthController extends Controller
{
    /*public function __construct(){
        $this->middleware('auth:api')->except('login');
    }*/
    public function signup(Request $request) {
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6',
    ]);

    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()],400);
    }
    $user=User::create([
        'name'=>$request->name,
        'email'=>$request->email,
        'password'=>bcrypt($request->password),
        'activation_token' => Str::random(60)]);
/*        $user->notify(new signupActivate($user));
*/
       $user->save();


        return response([ 'user' => $user->name,'success'=>'Please Check your Email For Verification'],200);

}
public function login (Request $request) {
  /*  $validator = Validator::make($request->all(), [
        'email' => 'required|string|email|max:255',
        'password' => 'required|string|min:6',
        'remember_me' => 'boolean'

    ]);
    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()], 400);
    }

    $credentials = request(['email', 'password']);
    $credentials['active'] = 1;
    $credentials['deleted_at'] = null;

if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Your credentials doesnot match'
            ],400);
         $user = $request->user();



        return response()->json([

        'sucess'=>'store'],200)->withCookie('token-access',Str::random(60),60, null, null, false, false);

*/

 $validator = Validator::make($request->all(), [
        'email' => 'required|string|email|max:255',
        'password' => 'required|string|min:6',
        'remember_me' => 'boolean'

    ]);
    if ($validator->fails())
    {
        return response(['errors'=>$validator->errors()->all()], 400);
    }

    $credentials = request(['email', 'password']);
    $credentials['active'] = 1;
    $credentials['deleted_at'] = null;

if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Your credentials doesnot match'
            ],400);


    $user = User::where('email', $request->email)->first();



 if ($user) {
        if (Hash::check($request->password, $user->password)) {
            $token = $user->createToken('Laravel Password Grant Client')->accessToken;
            $response = ['token' => $token];
            return response($response, 200)->withCookie('token-access',Str::random(60),60, null, null, false, false);;
        } else {
            $response = ["message" => "Password mismatch"];
            return response($response, 422);
        }
    } else {
        $response = ["message" =>'User does not exist'];
        return response($response, 422);
    }

















    }


    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
    public function signupActivate($token)
{
    $user = User::where('activation_token', $token)->first();
    if (!$user) {
        return response()->json(['message' => 'This activation token is invalid.'], 404);
    }
    $user->active = true;
    $user->activation_token ='';
    $user->save();
    return $user;
}

   /* $user = User::where('email', $request->email)->first();
    if ($user) {
        if (Hash::check($request->password, $user->password)) {
            $token = $user->createToken('Laravel Password Grant Client')->accessToken;
            $response = [$user,'token' => $token];
            return response($response, 200);
        } else {
            $response = ["message" => "Password mismatch"];
            return response($response, 422);
        }
    } else {
        $response = ["message" =>'User does not exist'];
        return response($response, 422);
}    }*/










    /*public function logout (Request $request) {
    $token = $request->user()->token();
    $token->revoke();
    $response = ['message' => 'You have been successfully logged out!'];
    return response($response, 200);
}*/
public function logout(Request $request)
    {
Cookie::queue(
   Cookie::forget('token-access')
      ) ;

Auth::guard('web')->logout();


        return response()->json(['message' => 'Logged Out'], 200);


}
}
