interface IAction {
  type: string;
  payload: any;
}

export default function AppReducer(state: any, action: IAction) {
  const actionPayload = action.payload;
  switch (action.type) {
    case "SET_VIDEO_LIST":
      return {
        ...state,
        videoList: actionPayload.videoList,
      };

    case "REMOVE_VIDEO":
      return {
        ...state,
        videoList: [
          ...state.videoList.slice(0, actionPayload.videoIndex),
          ...state.videoList.slice(actionPayload.videoIndex + 1),
        ],
      };

    default:
      return state;
  }
}
