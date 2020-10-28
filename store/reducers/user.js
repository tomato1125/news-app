const initialState = {
  clips: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CLIP':
      return {
        ...state,
        // 前回のstateのclips(state.clips)にaction.clipを追加する。これを新しいNew Stateとして返す
        clips: [...state.clips, action.clip],
      };
    case 'DELETE_CLIP':
      return {
        ...state,
        //前回のstateのclipsからfilterを使って、条件（ここでは「clip.url !== action.clip.url」→actionのclipとURLが一致したら除くという意味）に当てはまる要素を除いた配列を返している。
        clips: state.clips.filter(clip => clip.url !== action.clip.url),
      };
    default:
      return state;
  }
};

export default reducer;