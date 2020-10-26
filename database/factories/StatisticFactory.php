<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use App\Statistic;
use App\Apartment;

$factory->define(Statistic::class, function (Faker $faker) {
    return [
      'apartment_id'      => Apartment::inRandomOrder()->first(),
      'current_date'      => $faker -> dateTimeInInterval($startDate = '-5 days', $interval = '+5 days', $timezone = null),
      'number_of_click'   => $faker -> numberBetween($min=0, $max=10)
    ];
});
