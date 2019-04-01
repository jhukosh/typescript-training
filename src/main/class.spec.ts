import { ConsoleReporter } from "jasmine";

describe('class', () => {

  xit('has a constructor for initialization', () => {
    // Create a Musician class
    // Add a constructor that takes one param, the instrument.
    // Set this.instrument to the instrument passed in

    class Musician {
      instrument: string;
      constructor (instrument: string){
        this.instrument = instrument;
      }
    }

    const musician = new Musician('guitar')
    const ringo = new Musician('drums')

    expect(musician.instrument).toBeUndefined()
    expect(ringo.instrument).toBe('drums')
  })

  xit('constructor can have default param values', () => {
    // Create a Musician class with a constructor
    // Make your class default (using default params) the instrument to 'guitar'

    class Musician {
      instrument = 'guitar';
      constructor (instrumentPassed : string){
        this.instrument = instrumentPassed;
      }
    }

    const john = new Musician('guitar');
    const ringo = new Musician('drums');

    expect(john.instrument).toBe('guitar')
    expect(ringo.instrument).toBe('drums')
  })

  xit('can have instance methods', () => {
    // Create a Musician class, pass in the instrument to the constructor,
    // and add a play function to the class definition

  class Musician {  
    instrument: string;
    constructor (instrument: string){
      this.instrument = instrument;
    }

    play() {
      console.log("I\'m playing " + this.instrument);
    }
  }

    const musician = new Musician('drums')

    expect(musician.play).toBeDefined()
    // expect(Musician.play).toBeUndefined()
    expect(musician.play()).toBe("I'm playing drums")
  })

  xit('can have static methods and properties', () => {
    // Create a Musician class, pass in the instrument to the constructor,
    // create a static property instances (that will hold all created instances) and
    // create a static method create that encapsulates calling constructor
    //   and storing the reference (in instances array) and returns the instance

    class Musician {
      instrument : string;
      constructor(instrumentPassed: string) {
        this.instrument = instrumentPassed;
      }
      static instances: Musician[] = [];
      static create(instrumentParam: string): Musician {
        const musician = new Musician(instrumentParam);
        Musician.instances.push(musician);
        return musician;
      }
    }

    expect(Musician.create).toBeDefined()
    expect(Musician.instances.length).toBe(0)

    const john = Musician.create()
    // expect(john.create).toBeUndefined()
    expect(Musician.instances.length).toBe(1)

    const ringo = Musician.create('drums')
    // expect(ringo.create).toBeUndefined()
    expect(Musician.instances.length).toBe(2)
  })

  xit('can extend another class', () => {
    // Create a Musician class
    // Create a Rockman class that extends Musician
    // Add play method to Musician

    class Musician {
      instrument : string;
      constructor (instrumentPassed : string) {
        this.instrument = instrumentPassed;
      }

      play(){
        console.log("I\'m playing " + this.instrument);
      }
    }

    class Rockman extends Musician {
      band : string;
      constructor(instrumentPassed : string, bandPassed: string) {
        super(instrumentPassed);
        this.band = bandPassed;
      }
    }

    const rockman = new Rockman('guitar', 'Black Pistol Fire');

    expect(rockman instanceof Rockman).toBe(true)
    expect(rockman instanceof Musician).toBe(true)
    expect(rockman.play()).toBe("I'm playing guitar")
  })

  xit('can use property setters and getters', () => {
    // Create a Musician class, pass in the instrument to the constructor,
    // Add property getter for description

    class Musician {
      instrument : string;
      description = "this musician plays ";
      constructor (instrumentPassed : string) {
        this.instrument = instrumentPassed;
      }
      play(){
        console.log(this.getter + this.instrument);
      }
    }

    const guitarist = new Musician('guitar')
    const drummer = new Musician('drums')

    expect(guitarist.description).toBe('this musician plays guitar')
    expect(drummer.description).toBe('this musician plays drums')
  })

  xit('can use property setters and getters', () => {
    // Create a Musician class
    // Add property getter for allBands
    // - it will return a string describing all the bands that this musician played in
    // Add property setter for band
    // - it will add this band to the list of musician's bands'. How to store them?

    class Musician {
      instrument : string;
      description = "this musician plays ";
      band : string;

      constructor (instrumentPassed : string) {
        this.instrument = instrumentPassed;
      }

      static bands = [];

      allBands(): Musician {
        const band = this.band;
        Musician.bands.push(band);
        return musician;
      }
    }

    const musician = new Musician('guitarPlayer')

    musician.band = 'ABBA'
    expect(musician.allBands).toBe('this musician played in ABBA')
    musician.band = 'Rolling Stones'
    expect(musician.allBands).toBe('this musician played in ABBA, Rolling Stones')
    musician.band = 'Iron Maiden'
    expect(musician.allBands).toBe('this musician played in ABBA, Rolling Stones, Iron Maiden')
  })
})
