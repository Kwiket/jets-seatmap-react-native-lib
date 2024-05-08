interface ConfigModel {
  width: number;
  height: number;

  horizontal: boolean;
  rightToLeft: boolean;

  visibleFuselage: boolean;
  visibleWings: boolean;

  builtInDeckSelector: boolean;
  singleDeckMode: boolean;

  builtInTooltip: boolean;
  externalPassengerManagement: boolean;
  lang: string;

  apiUrl: string;
  apiAppId: string;
  apiKey: string;

  colorTheme: {
    deckLabelTitleColor: string;
    deckHeightSpacing: number;

    wingsWidth: number;
    deckSeparation: number;

    floorColor: string;
    seatLabelColor: string;
    seatStrokeColor: string;
    seatStrokeWidth: number;
    seatArmrestColor: string;
    notAvailableSeatsColor: string;

    bulkBaseColor: string;
    bulkCutColor: string;
    bulkIconColor: string;

    defaultPassengerBadgeColor: string;
    fontFamily: string;

    tooltipBackgroundColor: string;
    tooltipHeaderColor: string;
    tooltipBorderColor: string;
    tooltipFontColor: string;
    tooltipIconColor: string;
    tooltipIconBorderColor: string;
    tooltipIconBackgroundColor: string;
    tooltipSelectButtonTextColor: string;
    tooltipSelectButtonBackgroundColor: string;
    tooltipCancelButtonTextColor: string;
    tooltipCancelButtonBackgroundColor: string;

    deckSelectorStrokeColor: string;
    deckSelectorFillColor: string;
    deckSelectorSize: number;

    fuselageStrokeWidth: number;

    fuselageFillColor: string;
    fuselageStrokeColor: string;

    fuselageWindowsColor: string;
    fuselageWingsColor: string;

    exitIconHeight: number;
    exitIconWidth: number;

    exitIconUrlLeft: string;
    exitIconUrlRight: string;
  };
}
