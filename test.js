// Hard: Create the tests below for a function that will take in an object of N people. Each person will have a string age property
// and a string location property.  The function will return an entire original object with each person’s age + 5 years. Note that 
// the properties should be returned as a string since they were passed in as a string.
// • Write a test that will verify that the function returns an object with a single person’s age modified correctly.
// • Write a test that will verify that the function returns an object with 5 people with their ages modified correctly.
// • Write a test that will verify that the function returns false if an invalid parameter is passed in.
// • Write a function that will make these tests succeed.
// Example Parameter --
// {
//     Chris: {
//         Age: ’26’,
//         Location: ‘Charlotte',
//     },
//     Jonathan: {
//         Age: ’32’,
//         Location: ‘Atlanta’,
//     },
// }
// Example Returned Object —
// {
//     Chris: {
//         Age: ’31’,
//         Location: ‘Charlotte',
//     },
//     Jonathan: {
//         Age: ’37’,
//         Location: ‘Atlanta’,
//     },
// }

var expect = require('chai').expect;
var _ = require('lodash');

var people = {
  Chris: {
     Age: '26',
     Location: 'Charlotte'
   },
   Jonathan: {
     Age: '32',
     Location: 'Atlanta'
   }
}

var olderPeople;

function agePlusFive(people) {
 
  // Ensure that only objects are used as parameters
  if (typeof people === 'object') {
    // Clone the object to create an entirely new object by value using lodash
    olderPeople = _.cloneDeep(people); 
  
    // Loop through properties (names of people) in olderPeople and use as keys to access their values
    // Their values are the objects containing the Age property
    for (var person in olderPeople) {
      // Convert string Age to integer, add 5, convert back to string
      olderPeople[person].Age = parseInt(olderPeople[person].Age) + 5;
      olderPeople[person].Age = olderPeople[person].Age.toString();
    }
    return olderPeople;
  } else {
    return false;
  }
}

describe('Getting Older', function() {
  it('should verify that the function returns false if an invalid parameter is passed in', function() {
    // Make sure that parameters that are not an object return false
    expect(agePlusFive(1)).to.be.false;
    expect(agePlusFive(undefined)).to.be.false;
    expect(agePlusFive('string')).to.be.false;
    expect(agePlusFive(true)).to.be.false;
  });

  it('should verify that the function returns an object with a single person’s age modified correctly', function() {
    // Use to.deep.equal to make sure that it equals the object, even if it is not the same literal object
    expect(agePlusFive({Chris: {Age: '26', Location: 'Charlotte'}})).to.deep.equal({Chris: {Age: '31', Location: 'Charlotte'}});
  });

  it('should verify that the function returns an object with 5 people with their ages modified correctly', function() {
    // Use to.deep.equal to make sure that it equals the object, even if it is not the same literal object
    expect(agePlusFive({
      Chris: {Age: '26', Location: 'Charlotte'},
      Jonathan: {Age: '20', Location: 'Charlotte'},
      Thomas: {Age: '35', Location: 'Charlotte'},
      Keith: {Age: '25', Location: 'Charlotte'},
      Jacob: {Age: '19', Location: 'Charlotte'}
    })).to.deep.equal({
      Chris: {Age: '31', Location: 'Charlotte'},
      Jonathan: {Age: '25', Location: 'Charlotte'},
      Thomas: {Age: '40', Location: 'Charlotte'},
      Keith: {Age: '30', Location: 'Charlotte'},
      Jacob: {Age: '24', Location: 'Charlotte'}
    });
  });
});
