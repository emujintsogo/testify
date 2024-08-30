import Button from "@/components/Button";
import Loader from "@/components/Loader";
import Question from "@/components/Question";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient p-12 pt-36 gap-5">
      <h1 className="font-anon text-5xl text-white">testify</h1>
      <h5 className="font-anon mb-4 text-xl italic text-white">
        how well do you know your music taste?
      </h5>
      <Button text="log in with spotify"></Button>
      <Question></Question>
    </div>
  );
}
