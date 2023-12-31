<?php

namespace App\Http\Middleware;

use Closure;

class SecureAuth
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
        
    if ($request->cookie('token')) {
        $request->headers->set('Authorization', 'Bearer ' . $request->cookie('token'));

    }

    return $next($request);
}
    }

