import Button from "./Button";

function Question({ questionNum, question, options }) {
  return (
    <div className="flex flex-col">
      <h2 className="font-anon text-[34px] italic text-accent-green">
        question 1
      </h2>
      <h3 className="text-[22px] font-anon text-white">This is a question.</h3>
      <div className="flex flex-col gap-4 mt-5">
        <Button text="option 1"></Button>
        <Button text="option 2"></Button>
        <Button text="option 3"></Button>
        <Button text="option 4"></Button>
      </div>
    </div>
  );
}

export default Question;
