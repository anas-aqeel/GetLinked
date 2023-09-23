type Content = {
    type: 'content'
    heading: string
    number: number
    date: string
    paragraph: string
    alignment: string
    paragraph2?: string
  }
  
  type TimelineType = Content[]