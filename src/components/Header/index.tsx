import { Divider, Dropdown } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  CaretDownOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { cn } from "../../utils";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "ahooks";

const Menu = ({
  children,
  to,
  subMenu,
  active,
}: {
  children: React.ReactNode;
  to?: string;
  subMenu?: { href: string; label: string }[];
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
            <Link to={e.href} className="text-base">
              {e.label}
            </Link>
          ),
          key: e.href,
        })),
      }}
      placement="bottomLeft"
    >
      <Link to={subMenu[0].href} className={className}>
        {children} <CaretDownOutlined />
      </Link>
    </Dropdown>
  ) : null;
};

const OrganizationMenu = [
  {
    href: "/organization/steering-committee",
    label: "Steering Committee",
  },
  {
    href: "/organization/organizing-committee",
    label: "Organizing Committee",
  },
];
const CallsMenu = [
  {
    href: "/calls/research-papers",
    label: "Call for Research Papers",
  },
  {
    href: "/calls/industry-papers",
    label: "Call for Industry Papers",
  },
  {
    href: "/calls/workshops",
    label: "Call for Workshops",
  },
  {
    href: "/calls/demo-papers",
    label: "Call for Demo Papers",
  },
  {
    href: "/calls/tutorial-proposal",
    label: "Call for Tutorial Proposal",
  },
  {
    href: "/calls/hpd-consortium-paper",
    label: "Call for PhD Consortium Paper",
  },
];

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    setMobileMenuVisible(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useClickAway((e: PointerEvent) => {
    if (e.pageY > 48) {
      setMobileMenuVisible(false);
    }
  }, menuRef);

  return (
    <div
      ref={menuRef}
      className={cn(
        "fixed top-0 left-0 w-full bg-white/75 backdrop-blur-xl shadow-lg z-[100] transition-all duration-500 ease-in-out max-sm:max-h-12 overflow-y-hidden",
        mobileMenuVisible ? "max-sm:max-h-[600px]" : "",
      )}
    >
      <div className="flex items-center justify-start p-2 space-x-4 w-[650px] mx-auto max-sm:justify-between max-sm:w-full">
        <Link
          className="w-24 h-8 bg-[#595959] rounded leading-8 text-white"
          to="/"
        >
          DASFAA
        </Link>
        <div className="flex space-x-4 items-center max-sm:hidden">
          <Menu to="/" active={pathname === "/"}>
            Home
          </Menu>
          <Menu
            active={pathname.startsWith("/organization")}
            subMenu={OrganizationMenu}
          >
            Organization
          </Menu>
          <Menu active={pathname.startsWith("/calls")} subMenu={CallsMenu}>
            Calls
          </Menu>
          <Menu to="/important-dates" active={pathname === "/important-dates"}>
            Important Dates
          </Menu>
        </div>
        <div className="hidden max-sm:block pr-2">
          {mobileMenuVisible ? (
            <CloseOutlined
              id="menu-btn"
              onClick={() => setMobileMenuVisible(false)}
            />
          ) : (
            <MenuOutlined
              id="menu-btn"
              onClick={() => setMobileMenuVisible(true)}
            />
          )}
        </div>
      </div>
      <div
        className={cn(
          "hidden max-sm:flex flex-col items-center space-y-1 py-2",
        )}
      >
        <Menu to="/" active={pathname === "/"}>
          Home
        </Menu>
        <Divider>
          <div className="text-black/40">Organization</div>
        </Divider>
        {OrganizationMenu.map((e) => (
          <Menu
            key={`mobile-${e.href}`}
            to={e.href}
            active={pathname === e.href}
          >
            {e.label}
          </Menu>
        ))}
        <Divider>
          <div className="text-black/40">Calls</div>
        </Divider>
        {CallsMenu.map((e) => (
          <Menu
            key={`mobile-${e.href}`}
            to={e.href}
            active={pathname === e.href}
          >
            {e.label}
          </Menu>
        ))}
        <Divider />
        <Menu to="/important-dates" active={pathname === "/important-dates"}>
          Important Dates
        </Menu>
      </div>
    </div>
  );
};

export default Header;
