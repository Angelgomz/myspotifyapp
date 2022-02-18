<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtistForSongTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artists_for_song', function (Blueprint $table) {
            $table->id();
           // $table->integer('id_playlist')->references('id')->on('playlists');
           $table->unsignedBigInteger('id_song');
           $table->unsignedBigInteger('id_artist');
            $table->foreign('id_artist')->references('id')->on('artist');
            $table->foreign('id_song')->references('id')->on('songs');
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
        Schema::dropIfExists('artist_for_song');
    }
}
