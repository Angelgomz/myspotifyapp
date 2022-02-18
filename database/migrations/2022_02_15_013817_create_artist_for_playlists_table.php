<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtistForPlaylistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artist_for_playlists', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_playlist');
            $table->unsignedBigInteger('id_artist');
            $table->foreign('id_playlist')->references('id')->on('playlists');
            $table->foreign('id_artist')->references('id')->on('artist');
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
        Schema::dropIfExists('artist_for_playlists');
    }
}
