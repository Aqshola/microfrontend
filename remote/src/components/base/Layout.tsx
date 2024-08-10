import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout as AntdLayout, Menu, theme, Typography } from "antd";
import { ElementObjectCssStyle } from "../../types/general";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { Header, Sider, Content } = AntdLayout;
  const {
    token: { colorBgContainer, borderRadiusLG, ...antdToken },
  } = theme.useToken();

  const STYLE = {
    AntdLayout: {
      minHeight: "100vh",
    },
    TitleLayout: {
      color: antdToken.colorWhite,
      textAlign: "center",
      marginTop: "16px",
    },
    HeaderLayout: {
      padding: 0,
      background: colorBgContainer,
    },

    ButtonCollapseLayout: {
      fontSize: "16px",
      width: 64,
      height: 64,
    },

    ContentLayout: {
      margin: "24px 16px",
      padding: 24,
      minHeight: 280,
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    },
  } satisfies ElementObjectCssStyle;

  const MENU_LIST = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];

  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdLayout style={STYLE.AntdLayout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Typography.Title style={STYLE.TitleLayout} level={3}>
          Dash
        </Typography.Title>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={MENU_LIST}
        />
      </Sider>
      <AntdLayout>
        <Header style={STYLE.HeaderLayout}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={STYLE.ButtonCollapseLayout}
          />
        </Header>
        <Content style={STYLE.ContentLayout}>{props.children}</Content>
      </AntdLayout>
    </AntdLayout>
  );
}
