import powers from '../data/powers';
export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  getPower(): string {
    return powers.find(p => p.id === this.powerId)?.desc || 'Not found';
  }
}