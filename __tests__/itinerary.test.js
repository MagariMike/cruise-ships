const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Itinerary', () => { 
    it('Can be instantiated', () => { 
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('has a ports property', () => {
        const dover = new Port('Worthing');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover,calais]);
        expect(itinerary.ports).toEqual([dover,calais]);
    })
})

