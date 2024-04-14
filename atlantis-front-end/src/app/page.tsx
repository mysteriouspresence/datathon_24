import { LampDemo } from "./_components/Lamp";
import { Navbar } from "./_components/Navbar";

export default async function Home() {
  // Load file from public

  return (
    <>
      <Navbar />
      <LampDemo />
    </>
  );
}
