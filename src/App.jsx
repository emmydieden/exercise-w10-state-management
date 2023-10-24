import { CreateYourComponentsHere } from "./components/CreateYourComponentsHere";
import { LightDarkProvider } from "./themes/LightTheme"
import { ToggleButton } from "./components/ToggleButton";

export const App = () => {
  return (
    <>
  <CreateYourComponentsHere />
  <LightDarkProvider> 
      <ToggleButton />
  </LightDarkProvider>
  </>
  )
};
