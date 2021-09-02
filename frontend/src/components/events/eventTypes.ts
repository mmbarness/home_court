export interface Attendee {
  createdAt: string
  email: string
  eventList: string[]
  password: string
  updatedAt: string
  username: string
  __v: number
}

export interface Event {
    attendees: Attendee[]
    dateCreated: string
    description: string
    endDate: string
    lat: {$numberDecimal: string}
    lng: {$numberDecimal: string}
    postedBy: string
    sport: string
    startDate: string
    title: string
    visible: boolean
    __v: number,
    _id: number
}