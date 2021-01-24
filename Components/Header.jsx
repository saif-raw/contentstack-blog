import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) =>
    window.alert(
      `${value} is a great movie however, Search implementation is for future development`
    );
  let header = props.header[0][0];
  // console.log(props.header);

  return (
    <div className={styles.headerContainer}>
      <Link href={header.navlink[0].href}>
        <a className={styles.companytitle}>{header.navlink[0].title}</a>
      </Link>

      <Space direction="vertical">
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </Space>

      <Link href={header.navlink[1].href}>
        <a>{header.navlink[1].title}</a>
      </Link>
    </div>
  );
}
