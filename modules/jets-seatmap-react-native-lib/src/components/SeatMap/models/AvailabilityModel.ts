interface AvailabilityModel {
  currency: string
  label: string
  price: number
  onlyForPassengerType: string[]
  additionalProps: {
    label: string
    icon: any
  }[]
  color: string
}
