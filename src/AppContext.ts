import { createContext } from "react";

interface IState {
  videoList: [];
  currentVideo: string;
  dispatch: any;
}

const appState: IState = {
  videoList: [],
  currentVideo: '',
  dispatch: () => {},
};

const AppContext = createContext<IState>({
  ...appState,
});

export default AppContext;
