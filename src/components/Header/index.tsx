import { Dropdown } from "antd";
import { Link, useLocation } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { cn } from "../../utils";
import { useEffect } from "react";

const Menu = ({
  children,
  to,
  subMenu,
  active,
}: {
  children: React.ReactNode;
  to?: string;
  subMenu?: { key: string; label: string }[];
  active?: boolean;
}) => {
  const className = cn(
    "py-2 px-3 text-black/80 text-base rounded-lg font-medium transition-all cursor-pointer hover:text-[#2f54eb]",
    active ? "text-[#2f54eb]" : "",
  );
  return to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : subMenu ? (
    <Dropdown
      // overlayStyle={{ top: 64 }}
      menu={{
        items: subMenu?.map((e) => ({
          label: (
            <Link to={e.key} className="text-base">
              {e.label}
            </Link>
          ),
          key: e.key,
        })),
      }}
      placement="bottomLeft"
    >
      <Link to={subMenu[0].key} className={className}>
        {children} <CaretDownOutlined />
      </Link>
    </Dropdown>
  ) : null;
};

const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white/75  backdrop-blur-xl shadow-lg z-[100]">
      <div className="flex items-center justify-start p-2 space-x-4 w-[650px] mx-auto">
        <Link
          className="w-24 h-8 bg-[#595959] rounded leading-8 text-white"
          to="/"
        >
          DASFAA
        </Link>
        <div className="flex space-x-4 items-center">
          <Menu to="/" active={pathname === "/"}>
            Home
          </Menu>
          <Menu
            active={pathname.startsWith("/organization")}
            subMenu={[
              {
                key: "/organization/steering-committee",
                label: "Steering Committee",
              },
              {
                key: "/organization/organizing-committee",
                label: "Organizing Committee",
              },
            ]}
          >
            Organization
          </Menu>
          <Menu
            active={pathname.startsWith("/calls")}
            subMenu={[
              {
                key: "/calls/research-papers",
                label: "Call for Research Papers",
              },
              {
                key: "/calls/industry-papers",
                label: "Call for Industry Papers",
              },
              {
                key: "/calls/workshops",
                label: "Call for Workshops",
              },
              {
                key: "/calls/demo-papers",
                label: "Call for Demo Papers",
              },
              {
                key: "/calls/tutorial-proposal",
                label: "Call for Tutorial Proposal",
              },
              {
                key: "/calls/hpd-consortium-paper",
                label: "Call for PhD Consortium Paper",
              },
            ]}
          >
            Calls
          </Menu>
          <Menu to="/important-dates" active={pathname === "/important-dates"}>
            Important Dates
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
