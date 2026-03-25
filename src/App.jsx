import './App.css'

const links = [
  {
    title: 'Threads',
    subtitle: 'AI 시대, PM의 생각을 나눕니다',
    url: 'https://www.threads.com/@pm_anyway',
    icon: '🧵',
    color: '#000000',
  },
  {
    title: 'AI x 포트폴리오 강의',
    subtitle: '패스트캠퍼스 | AI로 완성하는 실전 포트폴리오',
    url: 'https://fastcampus.co.kr/biz_online_wash',
    icon: '🎓',
    color: '#E02E2E',
  },
  {
    title: '아무튼AI 커뮤니티',
    subtitle: '카카오톡 오픈채팅방',
    url: 'https://open.kakao.com/o/pwQedAii',
    icon: '💬',
    color: '#FEE500',
    textDark: true,
  },
]

function App() {
  return (
    <div className="container">
      <div className="card">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img
              src="/profile.jpg"
              alt="아피 프로필"
              className="profile-image"
            />
          </div>
          <h1 className="profile-name">아무튼PM | 아피</h1>
          <p className="profile-bio">
            네카라쿠배 출신 PM이 AI를 만난 이야기
            <br />
            AI 시대에 살아남는 법, 함께 나눠요
          </p>
        </div>

        {/* Links Section */}
        <div className="links-section">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
              style={{
                '--btn-color': link.color,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <span className="link-icon">{link.icon}</span>
              <div className="link-text">
                <span className="link-title">{link.title}</span>
                <span className="link-subtitle">{link.subtitle}</span>
              </div>
              <span className="link-arrow">→</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2026 아무튼PM</p>
        </footer>
      </div>
    </div>
  )
}

export default App
