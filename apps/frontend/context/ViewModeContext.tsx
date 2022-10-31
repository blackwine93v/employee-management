import React from 'react';
import { getFromLocal, saveToLocal } from '../helpers/localStorage';

const VIEWMODE_KEY_LOCAL = 'viewmode_config';

export enum ViewMode {
  Grid = 'grid',
  Table = 'table',
}

export const ViewModeContext = React.createContext({
  mode: ViewMode.Grid,
  changeMode: () => null,
});

interface Props {
  children: React.ReactNode;
}

export function ViewModeProvider({ children }: Props) {
  const [mode, setMode] = React.useState(ViewMode.Grid);
  const handleChangeMode = () => {
    setMode((currentMode) => {
      const newMode =
        currentMode === ViewMode.Grid ? ViewMode.Table : ViewMode.Grid;

      // persist this config to local storage
      saveToLocal(VIEWMODE_KEY_LOCAL, newMode);
      return newMode;
    });
  };

  React.useEffect(() => {
    // load previous config from local storage
    const savedViewMode =
      getFromLocal(VIEWMODE_KEY_LOCAL) === ViewMode.Table
        ? ViewMode.Table
        : ViewMode.Grid;

    if (savedViewMode) {
      setMode(savedViewMode);
    }
  }, []);

  return (
    <ViewModeContext.Provider
      value={{
        mode,
        changeMode: handleChangeMode,
      }}
    >
      {children}
    </ViewModeContext.Provider>
  );
}

export default ViewModeProvider;
