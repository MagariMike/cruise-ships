const Itinerary = require('../src/itinerary');

describe('Itinerary', () => { 
    it('Can be instantiated', () => { 
        expect(new Itinerary()).toBeInstanceOf(Object);
    })
})

