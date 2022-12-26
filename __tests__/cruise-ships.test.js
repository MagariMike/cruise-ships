const CruiseShip = require('../src/cruise-ships');

describe('constructor',() => { 
    it('returns an object', () => {
        expect(new CruiseShip()).toBeInstanceOf(Object);
        
    })

    
})