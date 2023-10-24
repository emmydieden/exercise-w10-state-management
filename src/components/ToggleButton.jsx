import { useLightData } from "../themes/LightTheme"

export const ToggleButton = () => {
    const {light, setLight, toggleLight} = useLightData()

    console.log( {light, setLight, toggleLight})

    return (
        <p>Hej!</p>
    )
}