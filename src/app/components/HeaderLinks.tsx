"use client";

interface HeaderLinkProps {
  name: string;
  sectionId?: string;
  onClick?: () => void;
}

export default function HeaderLink(props: HeaderLinkProps) {
  const handleClick = () => {
    if (props.sectionId) {
      const element = document.getElementById(props.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="cursor-pointer hover:text-pink-500 transition-colors"
      onClick={handleClick}
    >
      {props.name}
    </div>
  );
}
