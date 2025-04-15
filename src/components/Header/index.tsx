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
import { LogoDASFAA2025 } from "../../assets";

const Menu = ({
  children,
  to,
  subMenu,
  active,
  href = true,
}: {
  children: React.ReactNode;
  to?: string;
  subMenu?: { href: string; label: string; opts?: any }[];
  active?: boolean;
  href?: boolean;
}) => {
  const className = cn(
    "py-2 px-2 text-black/80 text-lg rounded-lg font-medium transition-all cursor-pointer hover:text-[#936bff]",
    active ? "text-[#936bff]" : "",
  );
  return to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : subMenu ? (
    <Dropdown
      menu={{
        items: subMenu?.map((e) => ({
          label: (
            <Link to={e.href} className="text-base" {...e.opts}>
              {e.label}
            </Link>
          ),
          key: e.href,
        })),
      }}
      placement="bottomLeft"
    >
      {href ? (
        <Link to={subMenu[0].href} className={className}>
          {children} <CaretDownOutlined />
        </Link>
      ) : (
        <div className={className + " cursor-pointer"}>
          {children} <CaretDownOutlined />
        </div>
      )}
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
const WorkshopsMenu = [
  {
    href: "https://gdma2025.github.io/",
    label: "Graph Data Management and Analysis (GDMA 2025)",
    opts: {
      target: "_blank",
      rel: "noreferrer noopener",
    },
  },
  {
    href: "https://yan20191113.github.io/DASFAA2025.github.io/",
    label: "Big Data Management and Service (BDMS 2025)",
    opts: {
      target: "_blank",
      rel: "noreferrer noopener",
    },
  },
];
const ProgramMenu = [
  {
    href: "/program/program-at-a-glance",
    label: "Program at a Glance",
  },
  {
    href: "/program/session-details",
    label: "Session Details",
  },
  {
    href: "/program/keynotes",
    label: "Keynotes",
  },
  {
    href: "/program/tutorials",
    label: "Tutorials",
  },
  {
    href: "/program/research",
    label: "Research Papers",
  },
  {
    href: "/program/industrial",
    label: "Industrial Papers",
  },
  {
    href: "/program/demo",
    label: "Demo Papers",
  },
];
const ParticipateMenu = [
  {
    href: "https://eventregistration.smu.edu.sg/Q0WLmb/",
    label: "Registration",
    opts: {
      target: "_blank",
      rel: "noreferrer noopener",
    },
  },
  {
    href: "/participate/hotel-information",
    label: "Hotel Information",
  },
  {
    href: "/participate/presenter-instructions",
    label: "Presenter Instructions",
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
    if (e.clientY > 48) {
      setMobileMenuVisible(false);
    }
  }, menuRef);

  return (
    <div
      ref={menuRef}
      className={cn(
        "fixed top-0 left-0 w-full bg-white/75 backdrop-blur-xl shadow-lg z-[100] transition-all duration-500 ease-in-out max-sm:max-h-12 overflow-y-hidden",
        mobileMenuVisible ? "max-sm:max-h-[90vh]" : "",
      )}
    >
      <div className="flex items-center justify-center px-0 py-3 space-x-0 mx-auto max-sm:justify-between max-sm:w-full max-sm:px-4">
        <Link to="/">
          <img
            src={LogoDASFAA2025}
            className="block h-[18px] min-w-[180px] w-auto object-contain"
          />
        </Link>
        <div className="flex space-x-4 items-center max-sm:hidden pl-4">
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
          <Menu active={pathname.startsWith("/program")} subMenu={ProgramMenu}>
            Program
          </Menu>
          <Menu subMenu={WorkshopsMenu} href={false}>
            Workshops
          </Menu>
          <Menu to="/important-dates" active={pathname === "/important-dates"}>
            Important Dates
          </Menu>
          <Menu subMenu={ParticipateMenu} href={false}>
            Participate
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
          "hidden max-sm:flex flex-col items-center space-y-1 py-2 px-4 h-[80vh] overflow-y-auto",
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
        <Divider>
          <div className="text-black/40">Program</div>
        </Divider>
        {ProgramMenu.map((e) => (
          <Menu
            key={`mobile-${e.href}`}
            to={e.href}
            active={pathname === e.href}
          >
            {e.label}
          </Menu>
        ))}
        <Divider>
          <div className="text-black/40">Workshops</div>
        </Divider>
        {WorkshopsMenu.map((e) => (
          <Menu
            key={`mobile-${e.href}`}
            to={e.href}
            active={pathname === e.href}
          >
            {e.label}
          </Menu>
        ))}
        <Divider></Divider>
        <Menu to="/important-dates" active={pathname === "/important-dates"}>
          Important Dates
        </Menu>
        <Divider>
          <div className="text-black/40">Participate</div>
        </Divider>
        {ParticipateMenu.map((e) => (
          <Menu
            key={`mobile-${e.href}`}
            to={e.href}
            active={pathname === e.href}
          >
            {e.label}
          </Menu>
        ))}
      </div>
    </div>
  );
};

export default Header;
