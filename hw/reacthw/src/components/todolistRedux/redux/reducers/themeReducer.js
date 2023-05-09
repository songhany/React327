import { THEME_DARK, THEME_LIGHT } from "../actions";

export default function themeReducer(state = "light", action) {
  switch (action.type) {
    case THEME_LIGHT:
      return "light";
    case THEME_DARK:
      return "dark";
    default:
      return state;
  }
}