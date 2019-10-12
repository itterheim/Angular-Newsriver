export class Filter {
  constructor(
    public text: string,
    public type: string = 'title', // 'text',
    public sortBy: '_score' | 'discoverDate' | 'metadata.readTime.seconds' = '_score',
    public sortOrder: 'ASC' | 'DESC' = 'DESC',
    public limit: number = 5
  ) { }
}
