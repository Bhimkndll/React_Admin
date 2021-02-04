<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\DB;
class Apiloginmiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

$secret=DB::table('outh_clients')->where('id',2)->pluck('secret')->first();
$request->merge([
'grant_type'=>'password',
'client_id'=>2,
'client_server'=>$secret]);
return $next($request);
    }
}
