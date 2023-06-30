// For testing your SVG output:
// You would create a file and write tests to see if your code is properly outputting svg code to create a shape
// You could just use a single shape for your tests, so you'd only need to import one shape (e.g. const { Square } = require("./shapes");)


const fs = require('fs');
const Logo = require('./index');
const { Circle, Triangle, Square } = require('../Lib/shapes');

// Mock the inquirer.prompt function
jest.mock('inquirer', () => ({
  prompt: jest.fn().mockResolvedValue({
    shape: 'circle',
    color: 'blue',
    letters: 'ABC',
  }),
}));

describe('Logo', () => {
  it('generates the correct SVG file', async () => {
    const logo = new Logo();
    logo.setText('ABC');

    // Mock the render function of the shape object
    const mockRender = jest.fn().mockReturnValue('<mocked-shape>');
    logo.setShape({ render: mockRender });

    // Mock the fs.writeFile function
    const mockWriteFile = jest.spyOn(fs, 'writeFile').mockImplementation((path, data, callback) => {
      expect(path).toBe('logo.svg');
      expect(data).toContain('<svg');
      expect(data).toContain('<mocked-shape>');
      expect(data).toContain('<text class="letters"');

      // Simulate successful write
      callback(null);
    });

    // Execute the code
    await logo.generateLogo();

    // Verify the function calls
    expect(mockRender).toHaveBeenCalled();
    expect(mockWriteFile).toHaveBeenCalledWith('logo.svg', expect.any(String), expect.any(Function));
  });
});