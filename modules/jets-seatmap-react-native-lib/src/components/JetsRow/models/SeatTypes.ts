export const getStyleByNumber = (number: number) => {
  switch (number) {
    case 5:
      return {top: '28%'}
    case 6:
      return {top: '28%'}
    case 8:
      return {marginLeft: 12}
    case 9:
      return {marginRight: 12}
    case 10:
      return {marginLeft: 60}
    case 11:
      return {marginRight: 60}
    case 12:
      return {top: '25%', marginRight: 106}
    case 13:
      return {top: '25%', marginLeft: 106}
    case 15:
      return {marginLeft: 38}
    case 16:
      return {marginRight: 38}
    case 17:
      return {marginLeft: 72}
    case 18:
      return {marginRight: 72}
    case 20:
    case 21:
      return {top: '65%'}
    case 22:
    case 23:
      return {top: '60%'}
    case 24:
    case 25:
      return {top: '55%'}
    case 26:
      return {top: '30%', marginRight: 50}
    case 27:
      return {top: '30%', marginLeft: 50}
    case 28:
      return {top: '45%', marginRight: 62}
    case 29:
      return {top: '45%', marginLeft: 62}
    case 30:
      return {top: '60%', marginRight: 62}
    case 31:
      return {top: '60%', marginLeft: 62}
    case 32:
      return {top: '60%', marginRight: 58}
    case 33:
      return {top: '60%', marginLeft: 58}
    case 34:
      return {top: '40%', marginLeft: 27}
    case 35:
      return {top: '40%', marginRight: 27}
    case 36:
      return {top: '62%', marginRight: 122}
    case 37:
      return {top: '62%', marginLeft: 122}
    case 38:
      return {top: '28%', marginRight: 122}
    case 39:
      return {top: '28%', marginLeft: 122}
    case 42:
      return {top: '70%', marginLeft: 260}
    case 43:
      return {top: '70%', marginRight: 242}
    case 44:
      return {top: '18%', marginRight: 254}
    case 45:
      return {top: '18%', marginLeft: 260}
    default:
      return {}
  }
}

export const getContainerStyleByNumber = (number: number) => {
  switch (number) {
    case 5:
      return {top: '28%'}
    case 6:
      return {top: '28%'}
    case 12:
      return {top: '25%'}
    case 13:
      return {top: '25%'}
    case 20:
    case 21:
      return {top: '65%'}
    case 22:
    case 23:
      return {top: '60%'}
    case 24:
    case 25:
      return {top: '55%'}
    case 26:
      return {top: '30%'}
    case 27:
      return {top: '30%'}
    case 28:
      return {top: '45%'}
    case 29:
      return {top: '45%'}
    case 30:
      return {top: '60%'}
    case 31:
      return {top: '60%'}
    case 32:
      return {top: '60%'}
    case 33:
      return {top: '60%'}
    case 34:
      return {top: '40%'}
    case 35:
      return {top: '40%'}
    case 36:
      return {top: '62%'}
    case 37:
      return {top: '62%'}
    case 38:
      return {top: '28%'}
    case 39:
      return {top: '28%'}
    case 42:
      return {top: '70%'}
    case 43:
      return {top: '70%'}
    case 44:
      return {top: '18%'}
    case 45:
      return {top: '18%'}
    default:
      return {}
  }
}

export const getSeatRotationStyle = (direction: string) => {
  switch (direction) {
    case 'nw':
      return {
        transform: [{rotate: '-20deg'}],
        childTransform: {transform: [{rotate: '20deg'}]},
      }
    case 'nw45':
      return {
        transform: [{rotate: '-45deg'}],
        childTransform: {transform: [{rotate: '45deg'}]},
      }
    case 'ne':
      return {
        transform: [{rotate: '20deg'}],
        childTransform: {transform: [{rotate: '-20deg'}]},
      }
    case 'ne45':
      return {
        transform: [{rotate: '45deg'}],
        childTransform: {transform: [{rotate: '-45deg'}]},
      }
    case 's':
      return {
        transform: [{rotate: '180deg'}],
        childTransform: {transform: [{rotate: '-180deg'}]},
      }
    case 'se':
      return {
        transform: [{scale: 0.8}, {rotate: '160deg'}],
        childTransform: {transform: [{rotate: '-160deg'}]},
      }
    case 'sw':
      return {
        transform: [{scale: 0.8}, {rotate: '-160deg'}],
        childTransform: {transform: [{rotate: '160deg'}]},
      }
    default:
      return {transform: []} // No transformation
  }
}
