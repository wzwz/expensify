import moment from 'moment';

export default [{
  id: '1',
  description: 'A',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'B',
  note: '',
  amount: 123,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'C',
  note: '',
  amount: 145,
  createdAt: moment(0).add(3, 'days').valueOf()
}, {
  id: '4',
  description: 'D',
  note: '',
  amount: 166,
  createdAt: moment(0).add(1, 'days').valueOf()
}, {
  id: '5',
  description: 'E',
  note: '',
  amount: 23,
  createdAt: moment(0).subtract(1, 'days').valueOf()
}];