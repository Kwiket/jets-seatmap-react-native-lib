import {ReactElement, createContext, ReactNode} from 'react';
import {$State} from '../../common/State';

interface TooltipViewModelInterface {
  isActive: {state: boolean; setState: any};
  topOffset: {state: number; setState: any};
  xOffset: {state: number; setState: any};
  position: {state: 'top' | 'bottom'; setState: any};
}

export const TooltipViewModelProvider = ({children}: {children: ReactNode}): ReactElement => {
  const isActive = $State(false);

  const topOffset = $State(0);

  const xOffset = $State(0);

  const position = $State('top');

  return (
    <TooltipViewModel.Provider
      children={children}
      value={{
        isActive,
        topOffset,
        xOffset,
        position,
      }}
    />
  );
};

export const TooltipViewModel = createContext<TooltipViewModelInterface | undefined>(undefined);
