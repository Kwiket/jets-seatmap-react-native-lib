import {Dimensions} from 'react-native'

const CONFIG_MOCK = {
  width: Dimensions.get('window').width,

  horizontal: false,
  rightToLeft: false,

  visibleFuselage: false,
  visibleWings: false,

  builtInDeckSelector: true,
  singleDeckMode: true,

  builtInTooltip: true,
  externalPassengerManagement: false,

  lang: 'EN',

  apiUrl: 'https://sandbox.quicket.io/api/v1',
  apiAppId: 'aff6eb5e-1c83-4e5c-a2a2-seatmaps-com',
  apiKey: 'd5c55bd9-60f0-4e2f-84e0-seatmaps-com',

  colorTheme: {
    deckLabelTitleColor: 'black',
    deckHeightSpacing: 0,

    wingsWidth: 50,
    deckSeparation: 0,

    floorColor: '#595959',
    seatLabelColor: 'black',
    seatStrokeColor: 'rgb(230, 230, 230)',
    seatStrokeWidth: 1,
    seatArmrestColor: '#cccccc',
    notAvailableSeatsColor: 'dimgrey',

    bulkBaseColor: 'dimgrey',
    bulkCutColor: 'lightgrey',
    bulkIconColor: 'darkslategray',

    defaultPassengerBadgeColor: 'darkred',
    fontFamily: 'Montserrat, sans-serif',

    tooltipBackgroundColor: 'rgb(255,255,255)',
    tooltipHeaderColor: '#4f6f8f',
    tooltipBorderColor: 'rgb(255,255,255)',
    tooltipFontColor: '#4f6f8f',
    tooltipIconColor: '#4f6f8f',
    tooltipIconBorderColor: '#4f6f8f',
    tooltipIconBackgroundColor: '#fff',
    tooltipSelectButtonTextColor: '#fff',
    tooltipSelectButtonBackgroundColor: 'rgb(42, 85, 128)',
    tooltipCancelButtonTextColor: '#fff',
    tooltipCancelButtonBackgroundColor: 'rgb(55, 55, 55)',

    deckSelectorStrokeColor: '#fff',
    deckSelectorFillColor: 'rgba(55, 55, 55, 0.5)',
    deckSelectorSize: 30,

    fuselageStrokeWidth: 10,

    fuselageFillColor: 'lightgrey',
    fuselageStrokeColor: 'darkgrey',

    fuselageWindowsColor: 'darkgrey',
    fuselageWingsColor: 'rgba(55, 55, 55, 0.5)',

    exitIconUrlLeft: 'https://panorama.quicket.io/icons/exit-left.svg',
    exitIconUrlRight: 'https://panorama.quicket.io/icons/exit-right.svg',
  },
}

export default CONFIG_MOCK
