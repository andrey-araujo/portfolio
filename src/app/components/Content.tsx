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
      <div className="w-full h-40 rounded-2xl border">About</div>
      <div className="w-full h-40 rounded-2xl border">Skills</div>
      <div className="w-full h-40 rounded-2xl border">Projects</div>
      <div className="w-full h-40 rounded-2xl border">Contacts</div>
    </div>
  );
}
