interface ContentProps {
  className?: string;
}

export default function Content(props: ContentProps) {
  return (
    <div
      className={`
        ${props.className ?? ""} flex border items-center justify-center h-fit`}
    >
      <div className="flex flex-col justify-center gap-20 border w-full mx-60 h-full min-h-dvh pt-28 pb-10">
        <section className="flex justify-center items-center border w-full h-[400px]">
          Apresentação
        </section>

        <section className="flex justify-center items-center border w-full h-[400px]">
          About
        </section>

        <section className="flex justify-center items-center border w-full h-[400px]">
          Habilidades
        </section>

        <section className="flex justify-center items-center border w-full h-[400px]">
          Projetos
        </section>
      </div>
    </div>
  );
}
