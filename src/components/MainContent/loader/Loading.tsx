import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className=" w-full h-32 px-[40%] absolute flex items-center justify-center">
            <Loader className="w-[340rem]" color="blue" />     
    </div>
  );
};

export default Loading;
