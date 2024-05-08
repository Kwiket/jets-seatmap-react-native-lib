interface SeatModel {
  additionalProps: any[];
  classCode: string;
  classType: string;
  color: string;
  features: any;
  leftOffset: number;
  letter: string;
  measurements: any;
  number: string;
  rotation: string;
  rowName: string;
  seatIconType: number;
  seatType: string;
  price: string;
  size: {
    height: number;
    width: number;
  };
  status: string;
  topOffset: number;
  type: string;
  uniqId: any;
  passenger: {
    abbr: string;
    id: string;
    passengerColor: string;
    passengerLabel: string;
    seat: {
      price: number;
      seatLabel: string;
    };
  };
  passengerTypes: any[];
}
