<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFrontBackToTechoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('technos', function (Blueprint $table) {
            $table->boolean('isFront');
            $table->boolean('isBack');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('technos', function (Blueprint $table) {
            $table->dropColumn('isFront');
            $table->dropColumn('isBack');
        });
    }
}
