Higher Order Components : Function that takes a component and returns a component. It takes an existing component and modifies a little bit.

What is React debouncing?
Debouncing is a programming technique that allows time-consuming operations not to trigger too frequently, which might lead to performance concerns. For instance, when a user types something into an input field, you might want to wait until they pause typing before you start filtering or validating the data.



Debouncing:

typing slow = 200ms 
typing fast = 30ms

Perfomance:

for typing "iphone pro max" = 14 letter * 1000 = 140000
with debouncing= 3 API calls * 1000 = 3000
Debouncing with 200ms

if difference between 2 key strokes is <200ms - DECLINE API call
200ms make an API call