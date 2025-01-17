// Code your solution here
// initializing an object array of names
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
// returns all drivers that match the passed in name
const findMatching = (p,q) => p.filter(p => p.toLowerCase() === q.toLowerCase())
// returns a driver if beginning provided letters match
const fuzzyMatch = (p,q) => p.filter(p => p.charAt(0) === q.charAt(0))
// accesses the data structure to check if name match
const matchName = (p,q) => p.filter(p => p.name === q)