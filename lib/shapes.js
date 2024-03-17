class Shape {
    constructor(color) {
        this.color = color;
    }
}
// renders the circle with specified color and returns the SVG string
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}
// renders the triangle with specified color and returns the SVG string
class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}
// renders the square with specified color and returns the SVG string
class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };