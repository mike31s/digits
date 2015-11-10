/**
 * A list of contact to pre-fill the Collection.
 * @type {*[]}
 */
var contactSeeds = [
  {first: "Phillip", last: "Johnson", address: "123 street name", phone: "1234567", email: "abc@hawaii.edu"},
  {first: "Guy A", last: "A", address: "123 street name", phone: "1234567", email: "abc@hawaii.edu"},
  {first: "Guy B", last: "B", address: "123 street name", phone: "1234567", email: "abc@hawaii.edu"}

];

/**
 * Initialize the Contact collection if empty with seed data.
 */
if (Contact.find().count() === 0) {
  _.each(contactSeeds,  function(contact) {
    Contact.insert(contact);
  });
}
