import {useState} from 'react';

export default function Alertbox(props) {
    const [message, setMessage] = useState(props.defaultMessage)

    return <div style={{
        "border":"1px solid brown"
    }}>
        {message}
    </div>
}