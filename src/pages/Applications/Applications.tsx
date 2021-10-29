import { openBrowser } from '../../utils/inAppBroswer'

const Applications: React.FC = () => {
  return (
    <div>
      <p>Applications</p>
      <a onClick={() => openBrowser('https://www.facebook.com/')}>Facebook</a>
      <a onClick={() => openBrowser('https://www.instagram.com/')}>Facebook</a>
    </div>
  )
}

export default Applications
