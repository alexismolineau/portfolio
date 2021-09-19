<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LienExt;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LienExtController extends Controller
{

    private array $message = ['message' => 'methode non supportée'];


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LienExt::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return new JsonResponse($this->message);
    }

    /**
     * Display the specified resource.
     *
     * @param LienExt $lienExt
     * @return \Illuminate\Http\Response
     */
    public function show(LienExt $lienExt)
    {
        return $lienExt;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return new JsonResponse($this->message);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return new JsonResponse($this->message);
    }
}
