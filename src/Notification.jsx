function Notification ({img, username, action, fmt, children}) {
  return (
    <article className="notification">
      <img src={img} alt={username} />
      <div className="about">
        <p>
          <span>{username} </span>
          <span>{action}. </span>
          <span>{fmt}</span>
        </p>
      </div>
      {children}
    </article>
  )
}

export default Notification
