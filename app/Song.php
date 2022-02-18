<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    protected $fillable = [
        'id', 'name', 'duration','year'
    ];
    protected $table = 'songs';
}
