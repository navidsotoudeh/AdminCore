import { Text } from "@/components/UIKit";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-x-60 p-4">
      <div className="flex h-[300px] w-[400px] items-start justify-center">
        <Text variant="h1">داشبورد</Text>
      </div>
    </div>
  );
};

export default HomePage;
