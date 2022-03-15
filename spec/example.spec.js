describe('Hello, Jest World!', () => {
  beforeEach(() => {
    console.log(new Date().toLocaleString())
  })

  it('My first spec', () => {
    expect(1 + 1).toBe(2)
  })
})
