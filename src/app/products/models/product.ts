import * as moment from 'moment';

export type Product = {
  id: string,
  name: string,
  description: string,
  dateAdded: moment.Moment,
  isActive: boolean
}