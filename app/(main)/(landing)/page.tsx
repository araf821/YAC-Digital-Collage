import Collage from "@/components/Collage";

export default function Home() {
  return (
    <div className="relative">
      {/* Background effects */}
      {/* Row 1 */}
      {/* <div className="fixed left-[20vw] top-[10vh] h-80 w-80 rounded-full bg-orange-500/50 blur-3xl" />
      <div className="fixed left-[40vw] top-[10vh] h-80 w-80 rounded-full bg-rose-500/50 blur-3xl" />
      <div className="fixed left-[60vw] top-[10vh] h-80 w-80 rounded-full bg-violet-500/50 blur-3xl" />
      <div className="fixed left-[80vw] top-[10vh] h-80 w-80 rounded-full bg-fuchsia-500/50 blur-3xl" /> */}

      {/* Row 2 */}
      {/* <div className="fixed left-[20vw] top-[30vh] h-80 w-80 rounded-full bg-sky-500/50 blur-3xl" />
      <div className="fixed left-[40vw] top-[30vh] h-80 w-80 rounded-full bg-red-500/50 blur-3xl" />
      <div className="fixed left-[60vw] top-[30vh] h-80 w-80 rounded-full bg-emerald-500/50 blur-3xl" />
      <div className="fixed left-[80vw] top-[30vh] h-80 w-80 rounded-full bg-orange-500/50 blur-3xl" /> */}

      {/* <div className="fixed left-0 top-0 h-screen w-full bg-white">
        <div
          className={`moving-bg h-full w-full rounded-md bg-gradient-to-br`}
        />
      </div> */}

      <Collage />
    </div>
  );
}
