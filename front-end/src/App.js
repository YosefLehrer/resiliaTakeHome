import React, { Fragment, useState } from 'react';

export default function App() {
  const [notifications, setNotifications] = useState([])

  const fetchNotifications = async () => {

    const response = await fetch("http://localhost:8081/notifications", {
      method: "GET"
    })
    .then(response => response.json())
    .then(data => {
      setNotifications(data)
      console.log(data)});
  }

  const MappedNotifications = notifications.map(notification => {
    console.log('notification :>> ', notification);
    return (
      <div>sup</div>
    )
  })

  return (<Fragment>
    Hello World!
    <br />
    <button onClick={fetchNotifications}>Fetch Notifications</button>
    {/* {!!notifications.length && } */}
    <MappedNotifications />
    </Fragment>);
}
