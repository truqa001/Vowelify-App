<?php

namespace App\Http\Controllers;

use App\History;
use Illuminate\Http\Request;

class FindVowelsController extends Controller
{
    public function find_vowels(Request $request)
    {
        $word = $request->get('word');
        $word_lowercase = strtolower($word);
        $chars_array = str_split($word);


        $count = 0;
        $vowels_index = array();

        for ($i = 0; $i < strlen($word_lowercase); $i++) {
            if (
                $word_lowercase[$i] === 'a' || $word_lowercase[$i] === 'e'
                || $word_lowercase[$i] === 'i' || $word_lowercase[$i] === 'o'
                || $word_lowercase[$i] === 'u'
            ) {
                array_push($vowels_index, $i);
                $count++;
            }
        }


        //save to db
        History::create([
            'word' => $word,
            'chars_array' => self::convert_array_to_string($chars_array),
            'vowels_count' => $count,
            'vowels_index' => self::convert_array_to_string($vowels_index)
        ]);



        return json_encode([
            'chars_array' => $chars_array,
            'vowels_count' => $count,
            'vowels_index' => $vowels_index
        ]);
    }

    public function fetch_history()
    {
        $histories = History::select("*")->orderBy('created_at', 'desc')->get();
        return json_encode($histories);
    }

    private function convert_array_to_string(array $array)
    {
        return strval(json_encode($array));
    }
}
