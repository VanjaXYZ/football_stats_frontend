import { Skeleton } from "@/components/ui/skeleton";

export const TableLoading = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Skeleton className="w-[320px] h-[50px] text-4xl mt-12" />
      <div className="space-y-2 w-full">
        <Skeleton className="w-full h-14" />
        <Skeleton className="w-full h-14" />
        <Skeleton className="w-full h-14" />
        <Skeleton className="w-full h-14" />
      </div>
    </div>
  );
};
