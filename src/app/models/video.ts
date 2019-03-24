export class Video {
  readonly url: string
  readonly rank: number
  readonly title: string
  readonly origin: string
  readonly play?: number
  readonly image?: string
  readonly author?: string
  public favorite: boolean

  constructor(
    url: string = '',
    rank: number = 0,
    title: string = '',
    origin: string = '',
    play: number = 0,
    image: string = '',
    author: string = '',
    favorite: boolean = false
  ) {
    this.url = url
    this.rank = rank
    this.title = title
    this.origin = origin
    this.play = play
    this.image = image
    this.author = author
    this.favorite = false
  }
}
