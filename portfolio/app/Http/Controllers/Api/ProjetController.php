<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Projet;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProjetController extends Controller
{

    private array $message = ['message' => 'methode non supportée'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Response
     */
    public function index()
    {
        $projets = Projet::with(['technos', 'lienExts'])->get();
        $projetsToReturn = [];
        foreach ($projets as $projet){
            if($projet->display === 1){
                $projetsToReturn[] = $projet;
            }
        }

        return $projetsToReturn;

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
     * @param Projet $projet
     * @return \Illuminate\Http\Response
     */
    public function show(Projet $projet)
    {

        $projet->load(['technos', 'lienExts']);
        if($projet->display === 1){
            return $projet;
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
