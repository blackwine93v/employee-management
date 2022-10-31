import React from 'react';

export enum ViewMode {
  Grid,
  Table,
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
    setMode((currentMode) =>
      currentMode === ViewMode.Grid ? ViewMode.Table : ViewMode.Grid
    );
  };

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
