import Forms from "@/components/Forms";
import GetTodos from "@/components/GetTodos";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-slate-200">
      <div className="flex justify-around flex-col items-center h-1/2 ">
        <h1 className=" text-4xl font-bold mt-12 mb-12">Todos Page</h1>
        <Forms/>
      </div>
      <div className="flex  flex-col items-center h-1/2 ">
        <GetTodos/>
      </div>
    </div>
  );
}
