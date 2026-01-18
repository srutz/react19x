import { memo } from "react";
import { useApplicationState } from "./useApplicationState";

export const LanguageDisplay = memo(() => {
  console.log("render language diplay");
  const language = useApplicationState((state) => state.language);
  return <div>Language: {language}</div>;
});
