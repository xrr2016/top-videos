export interface Channel {
  id: number
  title: string
}

export class Origin {
  label: string
  channels: Channel[]

  constructor(label: string = '', channels: Channel[] = []) {
    this.label = label
    this.channels = channels
  }
}

// export enum Origin {
//   PEAR = 'PEAR',
//   ACFUN = 'ACFUN',
//   BILIBILI = 'BILIBILI'
// }
