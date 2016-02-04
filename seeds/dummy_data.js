
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('bucketlist').del(),

    // Inserts seed entries
    knex('bucketlist').insert({id: 1, user_id: 1, title: 'Hang Gliding', description: "Can't wait!", resourceUrlA: null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"hang gliding"}),
    knex('bucketlist').insert({id: 2, user_id: 1, title: 'Skydiving', description: "It's gonna be great!", resourceUrlA: "https://www.google.com", resourceA: "My favorite skydiving site", resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle: "skydiving"}),
    knex('bucketlist').insert({id: 3, user_id: 1, title: 'Visit Paris', description: "Gonna be fun!", resourceUrlA: "https://www.google.com", resourceA:"My favorite Paris site", resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle: "visit paris"}),
    knex('bucketlist').insert({id: 4, user_id: 1, title: 'Backpacking', description: "Gonna be fun!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle: "backpacking"}),
    knex('bucketlist').insert({id: 5, user_id: 1, title: 'Run a marathon', description: "It's gonna be great!", resourceUrlA: "https://www.google.com", resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle: "run a marathon"}),
    knex('bucketlist').insert({id: 6, user_id: 1, title: 'Deep sea fishing', description: "Gonna be fun!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle: "deep sea fishing"}),
    knex('bucketlist').insert({id: 7, user_id: 1, title: 'Climb Everest', description: "It's gonna be great!", resourceUrlA: "https://www.google.com", resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle: "climb everest"}),
    knex('bucketlist').insert({id: 8, user_id: 1, title: 'Own a cat', description: "Gonna be fun!", resourceUrlA: "https://www.google.com", resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"own a cat"}),
    knex('bucketlist').insert({id: 9, user_id: 1, title: 'Read Ulysses', description: "It's gonna be great!", resourceUrlA: "https://www.google.com", resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"read ulysses"}),
    knex('bucketlist').insert({id: 10, user_id: 1, title: 'Fight an MMA match', description: "Gonna be fun!", resourceUrlA: "https://www.google.com", resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"fight an mma match"}),
    knex('bucketlist').insert({id: 11, user_id: 2, title: 'Play in a rock band', description: "It's gonna be great!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"play in a rock band"}),
    knex('bucketlist').insert({id: 12, user_id: 2, title: 'Climb Everest', description: "Gonna be fun!", resourceUrlA: "https://www.google.com", resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"climb everest"}),
    knex('bucketlist').insert({id: 13, user_id: 2, title: 'Buy a Lamboroghini', description: "It's gonna be great!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"buy a lamboroghini"}),
    knex('bucketlist').insert({id: 14, user_id: 2, title: 'Go fishing and catch a Marlin', description: "Gonna be fun!", resourceUrlA: "https://www.google.com", resourceA: "Check it out", resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"go fishing and catch a marlin"}),
    knex('bucketlist').insert({id: 15, user_id: 2, title: 'Backpack in the Yukon', description: "It's gonna be great!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"backpack in the yukon"}),
    knex('bucketlist').insert({id: 16, user_id: 2, title: 'Eat a sea urchin', description: "Gonna be fun!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"eat a sea urchin"}),
    knex('bucketlist').insert({id: 17, user_id: 2, title: 'Find a leprechaun', description: "It's gonna be great!", resourceUrlA: "https://www.google.com", resourceA: "Check it out", resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"find a leprechaun"}),
    knex('bucketlist').insert({id: 18, user_id: 2, title: 'Go to Ibiza', description: "Gonna be fun!", resourceUrlA: "https://www.google.com", resourceA: "Check it out", resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"go to ibiza"}),
    knex('bucketlist').insert({id: 19, user_id: 2, title: 'Triathalon', description: "It's gonna be great!", resourceUrlA: "https://www.google.com", resourceA: "Check it out", resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"triathalon"}),
    knex('bucketlist').insert({id: 20, user_id: 2, title: 'Vacation in Spain', description: "Gonna be fun!", resourceUrlA: "https://www.google.com", resourceA: "Check it out", resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"vacation in spain"}),
    knex('bucketlist').insert({id: 21, user_id: 3, title: 'Buy a Corvette', description: "It's gonna be great!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"buy a corvette"}),
    knex('bucketlist').insert({id: 22, user_id: 3, title: 'Win a dog show', description: "It's gonna be great!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"win a dog show"}),
    knex('bucketlist').insert({id: 23, user_id: 3, title: 'Fly to the Moon', description: "Gonna be fun!", resourceUrlA: "Check it out", resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"fly to the moon"}),
    knex('bucketlist').insert({id: 24, user_id: 3, title: 'Go ghost hunting', description: "It's gonna be great!", resourceUrlA: "https://www.google.com", resourceA:"Check it out", resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"go ghost hunting"}),
    knex('bucketlist').insert({id: 25, user_id: 3, title: 'Visit Petra', description: "It's gonna be great!", resourceUrlA: "https://www.google.com", resourceA: "Check it out", resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"visit petra"}),
    knex('bucketlist').insert({id: 26, user_id: 3, title: 'Kayak through caves', description: "It's gonna be great!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"kayak through caves"}),
    knex('bucketlist').insert({id: 27, user_id: 3, title: 'Walk the Golden Gate Bridge', description: "It's gonna be great!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"walk the golden gate bridge"}),
    knex('bucketlist').insert({id: 28, user_id: 3, title: 'Climb Kilamanjaro', description: "Gonna be fun!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"climb kilamanjaro"}),
    knex('bucketlist').insert({id: 29, user_id: 3, title: 'Learn to water ski', description:"Gonna be fun!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"learn to water ski"}),
    knex('bucketlist').insert({id: 30, user_id: 3, title: 'Ride on a jet ski', description: "Can't wait!", resourceUrlA:null, resourceA:null, resourceUrlB:null, resourceB:null, resourceUrlC:null, resourceC:null, lowertitle:"ride on a jet ski"})
  );
};
