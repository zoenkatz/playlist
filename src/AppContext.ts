import { createContext } from "react";

interface IState {
  videoList: [];
  dispatch: any;
}

const appState: IState = {
  videoList: [],
  dispatch: () => {},
};

const AppContext = createContext<IState>({
  ...appState,
});

export default AppContext;
