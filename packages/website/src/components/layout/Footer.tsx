import { Col, Row, Typography } from "antd"
import { FC } from "react"
import { Link } from "react-router-dom"

const Footer: FC = () => (
  <Row justify={"space-between"}>
    <Col>
      <Link to={"/"}>{window.location.hostname}</Link>
    </Col>
    <Col>
      <Typography.Text type={"secondary"}>{new Date().toUTCString()}</Typography.Text>
    </Col>
  </Row>
)

export { Footer }
