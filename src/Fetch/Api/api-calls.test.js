import { findPeople, findPlanets } from './api-calls';

describe('findPeople', () => {
  let mockPeople;

  beforeEach(() => {
    mockPeople = [
      {
        name: 'David',
        language: 'All languages',
        population: 'Too many',
        homeworld: 'Earfh',
        species: 'Human',
        isFavorite: true
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPeople)
      })
    })
  })

  it('should call fetch with the correct url', () => {
    findPeople();

    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people')
  });

  it('should return an array of people (HAPPY)', () => {
    expect(findPeople()).resolves.toEqual(mockPeople)
  });

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(findPeople()).rejects.toEqual(Error('Error fetching people'));
  });

  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'What did you do?'
      })
    })

    expect(findPeople()).rejects.toEqual(Error('What did you do?'));
  })
});

describe('findPlanets', () => {
  let mockPlanets;

  beforeEach(() => {
    mockPlanets = [
      {
        name: 'Earth',
        population: 'A lot',
        terrain: 'water',
        climate: 'snow',
        residents: ['Brandy', 'Sam']
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPlanets)
      })
    })
  })

  it('should call a fetch from the correct URL', () => {
    findPlanets();

    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets')
  })

  it('should return an array of planets (HAPPY)', () => {
    expect(findPlanets()).resolves.toEqual(mockPlanets)
  })

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(findPlanets()).rejects.toEqual(Error('Error fetching planets'))
  })

  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'No Planets...'
      })
    })

    expect(findPlanets()).rejects.toEqual(Error('No Planets...'))
  })

});