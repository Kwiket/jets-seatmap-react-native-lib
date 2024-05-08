import React, {useContext, useRef} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {JetsContext} from '../../common';
import {JetsSeat} from '../Seat';
import {TooltipViewModel} from '../TooltipGlobal/TooltipViewModel';
import {getSeatRotationStyle} from '../Seat/models/SeatTypes';

export const JetsRow = ({seats, top, onPress, scrollOffset, flatListHeight, config}: RowModel) => {
  const tooltipViewModel = useContext(TooltipViewModel);

  const {params, colorTheme, onTooltipRequested} = useContext(JetsContext);

  const seatMeasurements: any = useRef({});

  const onSeatLayout = (event: any, seatId: any) => {
    event.target.measureInWindow((x: number, y: number, width: number, height: number) => {
      seatMeasurements.current[seatId] = {x, y, width, height};
    });
  };

  const handlePress = (seat: SeatModel) => {
    const {x, y, width, height} = seatMeasurements.current[seat.uniqId];

    const screenHeight = config.height;

    const tailHeight = y - ((params.innerWidth - colorTheme.wingsWidth * 2) * 240) / 200;

    tooltipViewModel?.topOffset.setState(top + seat.topOffset);
    tooltipViewModel?.xOffset.setState(x / params.scale);

    onPress(seat);
    onTooltipRequested(seat);
    tooltipViewModel?.isActive.setState(true);

    if (flatListHeight - tailHeight > 0 && flatListHeight - tailHeight < screenHeight) {
      tooltipViewModel?.position.setState('bottom');
    } else if (y - scrollOffset * params.scale < screenHeight * 0.5) {
      tooltipViewModel?.position.setState('top');
    } else {
      tooltipViewModel?.position.setState('bottom');
    }
  };

  return (
    <View style={[styles.row]}>
      {seats.map(seat => {
        return (
          <TouchableOpacity
            key={seat.uniqId}
            disabled={seat.type == 'aisle' || seat.status == 'unavailable'}
            onPress={() => handlePress(seat)}
            onLayout={event => onSeatLayout(event, seat.uniqId)}
            children={<JetsSeat seat={seat} />}
            style={[
              {
                height: seat.size.height,
                width: seat.size.width,
                marginTop: seat.topOffset,
              },
              getSeatRotationStyle(seat.rotation),
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
});
