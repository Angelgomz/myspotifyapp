<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    /*
            $table->id();
            $table->string('name');
            $table->string('country');
            $table->string('monthly_listeners');

    */ 
    protected $fillable = [
        'id', 'name', 'country','monthly_listeners'
    ];
    protected $table = 'artists';
}
