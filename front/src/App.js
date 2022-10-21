import {useEffect, useState} from "react";
import axios from "axios"
function App() {
    const [hello, setHello] = useState("")
    const url = 'http://my-lb-795679708.us-west-2.elb.amazonaws.com/'
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
