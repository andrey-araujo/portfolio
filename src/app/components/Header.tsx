interface HeaderProps {
  className?: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header
      className={`${
        props.className ?? ""
      } flex border w-full items-center justify-center h-20 rounded-2xl gap-10`}
    >
      <div>Home</div>
      <div>About</div>
      <div>Skills</div>
      <div>Projects</div>
      <div>Contacts</div>
    </header>
  );
}
