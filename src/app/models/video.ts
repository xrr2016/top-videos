export enum Origin {
  BILIBILI = 'BILIBILI',
  ACFUN = 'ACFUN',
  IQIYI = 'IQIYI',
  TENCENT = 'TENCENT',
  YOUKU = 'YOUKU'
}

export class Video {
  readonly origin: Origin
  readonly rank: number
  readonly title: string
  readonly url: string
  readonly image?: string
  readonly score?: number
  readonly description?: string
  public favorite: boolean

  constructor(
    origin: Origin,
    image: string = '',
    rank: number,
    title: string,
    description: string,
    url: string,
    score: number,
    favorite: boolean
  ) {
    this.url = url
    this.image = image
    this.origin = origin
    this.rank = rank
    this.title = title
    this.description = description
    this.score = score
    this.favorite = false
  }

  toggleFavorite() {
    this.favorite = !this.favorite
    console.log('this.favorite :', this.favorite)
  }
}
