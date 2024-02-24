"use strict";
let guest_list = ['Kiswa', 'Uzma', 'Ajia'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Ms.' + guest_list[i] + ',\n\n\n It is our pleasure to invite you to our party. \n\n Thankyou!\n\n');
// }
let absent_Guest = 'Ajia';
let new_guest = 'Afaq';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
// console.log('Dear Ms.' + guest_list[i] + ',\n\n\n It is our pleasure to invite you to our party. \n\n Thankyou!\n\n');
// }
// console.log(`Ms. ${absent_Guest} is not coming to the party.`);
// console.log('Good news! We have found a biG table so we are inviting more friends.');
guest_list.unshift('Ali');
guest_list.splice(2, 0, 'Imran Khan');
guest_list.push('Nawaz');
// for(let i=0; i<guest_list.length; i++){
//    console.log('Dear Ms.' + guest_list[i] + ',\n\n\n It is our pleasure to invite you to our party. \n\n Thankyou!\n\n');
// }
// console.log('\n\nSorry, we cannot arrange big table. Only two people will be invited');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    // console.log(`Sorry Mr.${remove_guest}, you are not invited for dinner.`);
}
//  for(let i=0; i<guest_list.length; i++){
//      console.log('Dear Ms.' + guest_list[i] + ',\n\n You are still invited. \n\n Thankyou!\n\n');
//  }
// removing guests by slice 
guest_list.splice(0, 2);

// Practical 19
console.log(`Total number of guests are ${guest_list.length}`);
