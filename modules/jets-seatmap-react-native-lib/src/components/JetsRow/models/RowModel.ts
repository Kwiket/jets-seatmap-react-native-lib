interface RowModel {
  seats: SeatModel[]
  top: number
  onPress: (seat: SeatModel) => void
  scrollOffset: number
  flatListHeight: number
  config: any
}
