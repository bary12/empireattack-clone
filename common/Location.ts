export default class Location {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public add(other: Location): Location {
    return new Location(this.x + other.x, this.y + other.y);
  }

  public scale(scalar: number): Location {
    return new Location(this.x * scalar, this.y * scalar);
  }

  public scaleNonLinear(scaleX: number, scaleY: number) {
    return new Location(this.x * scaleX, this.y * scaleY);
  }

  public sub(other: Location): Location {
    return this.add(other.scale(-1));
  }

  public floor(): Location {
    return new Location(Math.floor(this.x), Math.floor(this.y));
  }
}
