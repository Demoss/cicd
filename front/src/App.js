import {useEffect, useState} from "react";
import axios from "axios"
function App() {
    const [hello, setHello] = useState("")
    const url = 'https://www.dev.artem.premia.vhost.kiev.ua/api'
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
                <b>{hello.message})</b>
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
