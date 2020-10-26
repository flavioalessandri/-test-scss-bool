<?php

use Illuminate\Database\Seeder;
use App\Sponsorship;

class SponsorshipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $sponsorships = [
          [
            'type'  => 'basic',
            'price' => '2.99',
            'time'  => '24h'
          ],
          [
            'type'  => 'medium',
            'price' => '5.99',
            'time'  => '72h'
          ],
          [
            'type'  => 'top',
            'price' => '9.99',
            'time'  => '144h'
          ]
        ];

        foreach ($sponsorships as $spo) {

            Sponsorship::create([
              'type_of_sponsorship'   => $spo['type'],
              'price'                 => $spo['price'],
              'deadline'              => $spo['time']
            ]);

        }
    }
}
