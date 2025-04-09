interface ContentProps {
  className?: string;
}

export default function Content(props: ContentProps) {
  return (
    <div
      className={`
        ${
          props.className ?? ""
        } flex flex-col items-center justify-center w-full`}
    >
      <div id="about" className="w-full h-96 rounded-2xl border">
        About
      </div>
      <div id="skills" className="w-full h-96 rounded-2xl border">
        Skills
      </div>
      <div id="projects" className="w-full h-96 rounded-2xl border">
        Projects
      </div>
      <div id="contacts" className="w-full h-96 rounded-2xl border">
        Contacts
      </div>
    </div>
  );
}
