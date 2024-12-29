/**
 * Represents a Circle.
 */
class Circle {
  /**
   * Creates a new Circle.
   * @param {number} radius - The radius of the circle.
   */
  constructor(radius) {
    /**
     * The radius of the circle.
     * @type {number}
     */
    this.radius = radius;
  }

  /**
   * Calculates the area of the circle.
   * @returns {number} The area of the circle.
   */
  getArea() {
    return Math.PI * this.radius ** 2;
  }

  /**
   * Calculates the circumference of the circle.
   * @returns {number} The circumference of the circle.
   */
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

export default Circle;
