<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Play extends Model
{
   /* $table->id();
    $table->unsignedBigInteger('id_song');
    $table->unsignedBigInteger('id_playlist');
    $table->unsignedBigInteger('id_user');
    $table->foreign('id_song')->references('id')->on('songs');
    $table->foreign('id_user')->references('id')->on('users');
    $table->foreign('id_playlist')->references('id')->on('playlists');
    $table->timestamps(); */ 
    protected $fillable = [
        'id', 'id_song', 'id_playlist'
    ];
    public function user()
    {
        return $this->hasOne('App\User');
    }
    public function song()
    {
        return $this->hasOne('App\Song');
    }
    public function playlist()
    {
        return $this->hasOne('App\Playlist');
    }
    protected $table = 'plays';
}
