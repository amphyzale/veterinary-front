import * as moment from 'moment';

export function dateTimeFormat(value: string): string {
  return moment(value).format('YYYY-MM-DD')
}
