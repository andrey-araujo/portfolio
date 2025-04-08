interface HeaderProps {
  className?: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="flex border w-full items-center justify-center h-20 fixed top-0 z-40">
      Menu
    </header>
  );
}
