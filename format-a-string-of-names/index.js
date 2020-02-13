
/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

// My solution
function list(names){

    const nonly=names.map(n => n.name);
    const end=nonly.slice(nonly.length-2, nonly.length)
    const front=nonly.slice(0, nonly.length-2)
    
    return front.map(x => x+', ').join('') +  end.join(' & ');
  }


var list2 = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")
