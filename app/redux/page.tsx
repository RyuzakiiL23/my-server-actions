import Counter from "./_components/Counter";
import ResetButton from "./_components/ResetButton";
import Result from "./_components/Result";

export default function Redux() {
  return (
    <div className="w-screen flex flex-col gap-10 mt-10 items-center">
      <h1 className="text-center font-bold text-2xl text-gray-600">
        Redux Counter
      </h1>
      <div className="flex flex-col gap-4 items-center">
        <h1>Component 1</h1>
        <Counter />
        <Result />
      </div>
      <ResetButton />
    </div>
  );
}
