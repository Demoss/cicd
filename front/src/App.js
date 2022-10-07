import {useEffect, useState} from "react";
import axios from "axios"
function App() {
    const [hello, setHello] = useState("")
    const url = 'http://localhost:8080'
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setHello(res.data)
            })
    },[url])
    console.log(hello)
    if(hello)
    {
        return (
            <div>
                <b>{hello.message}</b>
            </div>
        )
    }
    return (
        <div>
            <strong>Not found</strong>
        </div>
    );
}

export default App;
