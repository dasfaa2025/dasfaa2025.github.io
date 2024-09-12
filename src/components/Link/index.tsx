import { cn } from "../../utils";

const Link = ({
  href,
  margin = false,
  children,
}: {
  href: string;
  margin?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <a
      className={cn("link", margin ? "scroll-ms-0.5" : "")}
      target="_blank"
      rel="noreferrer noopener"
      href={href}
    >
      {children ?? href}
    </a>
  );
};

export default Link;
