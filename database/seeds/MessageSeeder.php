<?php

use Illuminate\Database\Seeder;
use App\Message;
use App\Apartment;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(Message::class, 100)
    -> make()
    -> each(function($msg){
      $apart = Apartment::inRandomOrder() -> first();
      $msg -> apartment() -> associate($apart);
      $msg -> save();
    });
    }
}
