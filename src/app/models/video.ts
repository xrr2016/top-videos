export enum Origin {
  BILIBILI = 'BILIBILI',
  ACFUN = 'ACFUN',
  TENCENT = 'TENCENT',
  IQIYI = 'IQIYI',
  YOUKU = 'YOUKU'
}

export class Video {
  readonly origin: Origin
  readonly rank: number
  readonly title: string
  readonly url: string
  readonly score?: number
  public favorite: boolean

  constructor(
    origin: Origin,
    rank: number,
    title: string,
    url: string,
    score: number,
    favorite: boolean
  ) {
    this.url = url
    this.origin = origin
    this.rank = rank
    this.title = title
    this.score = score
    this.favorite = false
  }

  toggleFavorite() {
    this.favorite = !this.favorite
    console.log('this.favorite :', this.favorite)
  }
}
