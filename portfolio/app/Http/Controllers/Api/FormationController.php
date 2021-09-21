<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Formation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FormationController extends Controller
{

    private array $message = ['message' => 'methode non supportée'];


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $formations = Formation::all();
        $formationsToReturn = [];
        foreach ($formations as $formation){
            if($formation->displayed  === 1){
                $formationsToReturn[] = $formation;
            }
        }
        return $formationsToReturn;
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
     * @param Formation $formation
     * @return \Illuminate\Http\Response
     */
    public function show(Formation $formation)
    {
        if($formation->displayed === 1){
            return $formation;
        }
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
