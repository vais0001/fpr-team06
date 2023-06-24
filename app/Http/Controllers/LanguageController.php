<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LanguageController extends Controller
{
    public function switchLang(Request $request, $lang)
    {
        App::setLocale($lang);
        Session::put('applocale', $lang);
        return redirect()->back();
    }
}
