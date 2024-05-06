const AVAILABILITY_MOCK = [
  {
    currency: 'USD',
    label: '31C',
    price: 33,
    onlyForPassengerType: ['ADT', 'CHD', 'INF'],
    additionalProps: [
      {
        label: 'Test prop for all',
        icon: null,
      },
      {
        label: 'Another test prop for all',
        icon: 'wifi',
      },
    ],
    color: 'green',
  },
  {
    currency: 'USD',
    label: '40A',
    price: 33,
    onlyForPassengerType: ['ADT', 'CHD', 'INF'],
    additionalProps: [
      {
        label: 'Clear air',
        icon: null,
      },
      {
        label: 'USB plug',
        icon: 'power',
      },
    ],
    color: 'red',
  },
  {
    currency: 'USD',
    label: '31A',
    price: 33,
    onlyForPassengerType: ['ADT', 'CHD', 'INF'],
    color: 'magenta',
  },
  {
    currency: 'USD',
    label: '31B',
    price: 13,
    onlyForPassengerType: ['ADT', 'CHD', 'INF'],
  },
  {
    currency: 'USD',
    label: '31J',
    price: 13,
    onlyForPassengerType: ['CHD', 'INF'],
  },
  {
    currency: 'USD',
    label: '35K',
    price: 1337,
    onlyForPassengerType: ['CHD', 'INF'],
  },
  {
    currency: 'EUR',
    label: '70E',
    price: 1488,
  },
  
]
export default AVAILABILITY_MOCK
