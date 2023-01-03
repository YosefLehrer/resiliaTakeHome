import React, { Fragment, useState } from 'react';

export default function App() {
  const [notifications, setNotifications] = useState([])

  const fetchNotifications = async () => {
    const response = await fetch("http://localhost:8081/notifications", {
      method: "GET"
    })
    const responseJson = await response.json();
    setNotifications(responseJson);
  }

  const MappedNotifications = ({notificationsArray}) => {
    return (
      notificationsArray.map((notification, i) => {
        return (
          <div key={i} >{notification}</div>
        )
      }
    ))
  }

  return (<Fragment>
    <br />
    <button onClick={fetchNotifications}>Fetch Notifications</button>
      {!!notifications.length && <MappedNotifications notificationsArray={notifications} />}
    </Fragment>);
}
