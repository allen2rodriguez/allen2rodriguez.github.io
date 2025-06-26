export default function Info() {
    return (
        <header className="info">
            <img src="../../public/headshot.jpg" className="profile-pic" alt="A profile pic of me, Allen Rodriguez" />
            <div className="title-info">
                <h1 className="name">Allen Rodriguez</h1>
                <h2 className="title">Software Engineer</h2>

            </div>
            <div className="business-links">
                <a href="mailto:allenr1002@gmail.com" className="email"><i class='bxr  bxs-envelope' /> Email</a>
                <a href="https://allensland.com/index.html" className="website"><i class='bxs  bxs-globe-alt' /> Website</a>
            </div>
        </header>
    )
}