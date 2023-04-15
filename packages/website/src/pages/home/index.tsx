import { Layout, Typography } from "antd"
import { FC } from "react"
import { useOutletContext } from "react-router-dom"

import { HeroSection } from "../../components/section"

const Home: FC = () => {
  const props = useOutletContext<{ hero: ComponentUiCard }>()
  return (
    <Layout.Content>
      <Typography.Paragraph>
        <div>
          <h2>welcome to App</h2>
        </div>
      </Typography.Paragraph>
    </Layout.Content>
  )
}

export { Home as default }
