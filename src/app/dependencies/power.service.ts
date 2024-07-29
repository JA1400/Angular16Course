/* we can still import this service even without the @injectable */
export class PowerService {

  calculatePower(value: number, power: number): number {
    return Math.pow(value, power);
  }
}
