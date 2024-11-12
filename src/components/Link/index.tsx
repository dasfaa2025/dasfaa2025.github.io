import { cn } from "../../utils";

const Link = ({
  href,
  target = "_blank",
  margin = false,
  children,
}: {
  href: string;
  target?: string;
  margin?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <a
      className={cn("link break-all", margin ? "ms-0.5" : "")}
      target={target}
      rel="noreferrer noopener"
      href={href}
    >
      {children ?? href}
    </a>
  );
};

export default Link;
