<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTaxoTechno extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('technos', function (Blueprint $table) {
            $table->boolean('isFramework')->nullable();
            $table->boolean('isCMS')->nullable();
            $table->boolean('isBDD')->nullable();
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
            $table->dropColumn('isFramework');
            $table->dropColumn('isCMS');
            $table->dropColumn('isBDD');
        });
    }
}
