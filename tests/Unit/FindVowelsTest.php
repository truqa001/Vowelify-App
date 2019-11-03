<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FindVowelsTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_index_page_return_status()
    {
        $response = $this->call('GET', '/');
        $response->assertStatus(200);
    }

    public function test_find_vowels_api()
    {
        $response = $this->call('GET', '/');

        $response = $this->call('POST', '/find', ['_token' => csrf_token(), 'word' => 'Amplify']);
        $response
            ->assertExactJson([
                'chars_array' => ['A', 'm', 'p', 'l', 'i', 'f', 'y'],
                'vowels_count' => 2,
                'vowels_index' => [0, 4]
            ]);
    }

    public function test_fetch_history_api()
    {
        $response = $this->call('GET', '/fetch-history');
        $response
            ->assertStatus(200)
            ->assertJson([]);
    }
}
