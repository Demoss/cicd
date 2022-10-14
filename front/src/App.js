import {useEffect, useState} from "react";
import axios from "axios"
function App() {
    const [hello, setHello] = useState("")
    const url = 'http://ec2-35-86-83-50.us-west-2.compute.amazonaws.com:8000'
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
                <b>{hello.message} + for Oleksiy</b>
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
