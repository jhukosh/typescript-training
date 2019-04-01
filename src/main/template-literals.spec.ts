describe('Template literals', () => {

  it('should support string interpolation', () => {
    const personPL = {
      name: 'Jarosław',
      friends: ['Antoni', 'Andrzej', 'Krystyna', 'Wiktor']
    }
    const personEN = {
      name: 'Darren',
      friends: ['Greg', 'Sebastian', 'Chloe']
    }
    // construct an arrow function using template literal string interpolation
    const friendsStr = person => `${person.name} has 4 friends: ${person.friends[0]}, ${person.friends[1]}, ${person.friends[2]}, ${person.friends[3]}`

    expect(friendsStr(personPL)).toBe(
      'Jarosław has 4 friends: Antoni, Andrzej, Krystyna, Wiktor'
    )
    expect(friendsStr(personEN)).toBe(
      'Darren has 3 friends: Greg, Sebastian, Chloe'
    )
  })

  it('should support multi-line strings', () => {
    // construct a string with multiple lines without needing escaped newline characters, 
    const multiLine = ` 
    Oh 
    my 
    dear 
    so much fun!`;

    expect(multiLine).toBe('\n    Oh\n    my\n    dear\n    so much fun!')
  })

  it('should support string escaping', () => {
    // escape a string in a template literal for each of these
    let str1 = `Hi 
    there!`;
    let str2 = 'This is `escaped` backtics';
    expect(str1).toBe('Hi\nthere!')
    expect(str2).toBe('This is `escaped` backtics')
  })

  // you likely wont often use tagging, but it can be handy!
  it('should call the tagging function', () => {
    const noun = 'World'
    const emotion = 'happy'
    const hello = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`
    expect(hello).toBe('Hello dear World! Are you feeling really happy today?')

    const name = 'John'
    const action = 'take a seat'
    const result = tagIt`Welcome ${name}, feel comfortable and ${action}!`
    expect(result).toBe('Welcome dear John, feel comfortable and really take a seat!')

    function tagIt(literalString, ...interpolatedParts) {
      // implement this function to make the test pass
      return `${literalString[0]} dear ${interpolatedParts[0]} ${literalString[1]} really ${interpolatedParts[1]} ${literalString[2]}`;
    }
  })

  it('can be curried', () => {
    // Using tagged template strings, write journey function
    // that will accept following 3 template strings
    // and return a string describing the journey
    const journey = (arr : any[]) => {
      return `${arr[0]}, then ${arr[1]} and finally ${arr[2]}!`;
    }

    expect(journey `Warsaw` `Poznan` `Berlin`).toBe('Warsaw, then Poznan and finally Berlin!')
    expect(journey `Poland` `Czech` `Austria`).toBe('Poland, then Czech and finally Austria!')
    expect(journey `Europe` `Asia` `Australia`).toBe('Europe, then Asia and finally Australia!')
  })

})
