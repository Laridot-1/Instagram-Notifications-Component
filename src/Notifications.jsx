import Notification from './Notification.jsx'
import data from './data.jsx'

function App() {
  let seven = data.filter(({time}) => time < 7)
  let thirty = data.filter(({time}) => time > 6)

  return (
    <div className="container">
      if (seven.length > 0) {
        <section className="group">
          <h4>Last 7 Days</h4>
          {
            seven.map(({img, fmt, action, username, type}, index) => {
                if (type === "react") {
                  return (
                    <Notification img={img} username={username} key={index} fmt={fmt} action={action}>
                      <div className="reaction"></div>
                    </Notification>
                  )
                } else if (type === "follow") {
                  return (
                    <Notification img={img} username={username} key={index} fmt={fmt} action={action}>
                      <button type="button" className="follow">
                        follow
                      </button>
                    </Notification>
                  )
                } else {
                  return (
                    <Notification img={img} username={username} key={index} fmt={fmt} action={action} />
                  )
                }
            })
          }
        </section>
      } else {
        ""
      }
      
      if (thirty.length > 0) {
        <section className="group">
          <h4>Last 30 Days</h4>
          {
            thirty.map(({img, fmt, action, username, type}, index) => {
              if (type === "react") {
                return (
                  <Notification img={img} username={username} key={index} fmt={fmt} action={action}>
                    <div className="reaction"></div>
                  </Notification>
                )
              } else if (type === "follow") {
                return (
                  <Notification img={img} username={username} key={index} fmt={fmt} action={action}>
                    <button type="button" className="follow">
                      follow
                    </button>
                  </Notification>
                )
              } else {
                return (
                  <Notification img={img} username={username} key={index} fmt={fmt} action={action} />
                )
              }
            })
          }
        </section>
      } else {
        ""
      }
    </div>
  )
}

export default App
