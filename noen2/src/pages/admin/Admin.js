import { useEffect,useState } from "react";

const NotificationSystem=()=>{

    const [notifications, setNotifications] = useState([]);

    console.log(notifications); // Debugging output
    
    let parsedMessage;
    
    // Check if notifications array is not empty and first element is a valid JSON string
    if (notifications.length > 0 && typeof notifications[0] === "string") {
        try {
            parsedMessage = JSON.parse(notifications[0]).message;
            console.log(parsedMessage, "Parsed message");
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
    
 
    useEffect(()=>{
        const ws=new WebSocket("ws://localhost:5000");

        ws.onopen=()=>{
            console.log("Connected to webSocket server");
        }

        ws.onmessage=(event)=>{
            setNotifications((prev)=>[...prev,event.data]);
        }

        ws.onclose=()=>{
            console.log("webSocket disconnected");
        };

        return ()=>{
            ws.close();
        };
    },[]);

    return (
        <div style={{width:"100px", height:"100px"}}>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((note,index)=>(
                    <li key={index}>{parsedMessage}</li>
                ))}
            </ul>
        </div>
    )
};

export default NotificationSystem;