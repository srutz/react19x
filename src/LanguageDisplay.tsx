import { useApplicationState } from "./useApplicationState";

export const LanguageDisplay = () => {
  console.log("render language diplay");
  const language = useApplicationState((state) => state.language);
  return <div>Language: {language}</div>;
};
