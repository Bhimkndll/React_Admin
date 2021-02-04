<?php

namespace App\Http\Middleware;
use Session;
use Closure;
use Cookie;
use User;
class Check
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
if($request->user())
{
        
    return $next($request);
}
return response(['users'=>'you are the fake users']);
}
}