import { Layout, Typography } from "antd"
import { FC } from "react"
import { useOutletContext } from "react-router-dom"

import BreadCrumb from "src/components/section/breadcrumb"
import { HeroSection } from "../../components/section"

const Home: FC = () => {
  const props = useOutletContext<{ hero: ComponentUiCard }>()
  return (
    <Layout.Content>
      <Typography.Paragraph>
        <div>
          <h2>welcome to App</h2>
        </div>
        <BreadCrumb />
      </Typography.Paragraph>
    </Layout.Content>
  )
}

export { Home as default }
