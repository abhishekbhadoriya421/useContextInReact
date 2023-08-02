import { useContext } from "react"
import UseColor from "../UseContext"

export default function GrandChildComponent (){
    const color = useContext(UseColor);

    return(<>
        <h1
            style={{
                color:color
            }}
        ><span>Color: </span> <span>{color}</span></h1>
    </>)
}