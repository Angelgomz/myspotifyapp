<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plays', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_song');
            $table->unsignedBigInteger('id_playlist');
            $table->unsignedBigInteger('id_user');
            $table->foreign('id_song')->references('id')->on('songs');
            $table->foreign('id_user')->references('id')->on('users');
            $table->foreign('id_playlist')->references('id')->on('playlists');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plays');
    }
}
