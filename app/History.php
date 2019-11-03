<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    protected $table = 'history';
    protected $fillable = ['word', 'chars_array', 'vowels_count','vowels_index'];
}
