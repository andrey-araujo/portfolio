import HeaderLink from "./HeaderLinks";

interface HeaderProps {
  className?: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header
      className={`${
        props.className ?? ""
      } flex border w-full items-center justify-center h-20 rounded-2xl gap-10 font-bold`}
    >
      <HeaderLink name="Home" sectionId="home" />
      <HeaderLink name="About" sectionId="about" />
      <HeaderLink name="Skills" sectionId="skills" />
      <HeaderLink name="Projects" sectionId="projects" />
      <HeaderLink name="Contacts" sectionId="contacts" />
    </header>
  );
}
