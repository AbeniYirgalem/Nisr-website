import { Card, CardContent } from "../../card";

export const LoadingSkeleton = () => (
  <div className="max-w-[1320px] mx-auto px-0 sm:px-8 py-0 sm:py-8">
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 sm:gap-8 animate-pulse">
      {/* Image */}
      <div className="bg-gray-200 rounded-none sm:rounded-[20px] w-full h-64 sm:h-[600px]" />

      {/* Right Column */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <Card className="rounded-none sm:rounded-[15px]">
          <CardContent className="p-4 sm:p-6 space-y-4">
            <div className="h-5 bg-gray-200 rounded w-28 ml-auto" />
            <div className="h-12 bg-gray-300 rounded w-52" />
            <div className="h-5 bg-gray-200 rounded w-32" />
            <div className="space-y-3">
              <div className="h-7 bg-gray-200 rounded w-full" />
              <div className="h-7 bg-gray-200 rounded w-11/12" />
            </div>
            <div className="flex gap-6">
              <div className="h-5 bg-gray-200 rounded w-40" />
              <div className="h-5 bg-gray-200 rounded w-32" />
            </div>
            <div className="h-5 bg-gray-200 rounded w-20" />
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="h-14 bg-gray-300 rounded-[10px]" />
              <div className="h-14 bg-gray-200 rounded-[10px]" />
            </div>
          </CardContent>
        </Card>

        {/* Seller Card */}
        <Card className="rounded-none sm:rounded-[15px]">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full" />
              <div className="flex-1 space-y-3">
                <div className="h-6 bg-gray-300 rounded w-48" />
                <div className="h-4 bg-gray-200 rounded w-32" />
                <div className="h-4 bg-gray-200 rounded w-36" />
              </div>
              <div className="h-10 w-20 bg-gray-200 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="h-12 bg-gray-200 rounded-[10px]" />
              <div className="h-12 bg-gray-200 rounded-[10px]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    {/* Description Card */}
    <Card className="mt-4 rounded-none sm:rounded-[15px]">
      <CardContent className="p-6">
        <div className="h-8 bg-gray-300 rounded w-40 mb-4" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-11/12" />
          <div className="h-4 bg-gray-200 rounded w-10/12" />
        </div>
      </CardContent>
    </Card>
  </div>
);
