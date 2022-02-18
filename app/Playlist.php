<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    protected $fillable = [
        'id', 'name', 'created_by'
    ];
    protected $table = 'playlists';
}