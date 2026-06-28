import type { IconType } from "react-icons";

interface DashboardItemCardProps {
  description: string;
  subDescription?: string;
  bgcolor: keyof typeof bgvariants;
  icon: IconType;
  value: number;
}

const bgvariants: Record<string, string> = {
  blue: "bg-blue-500/20",
  orange: "bg-orange-500/20",
  green: "bg-green-500/20",
  purple: "bg-purple-500/20",
};

const iconColors: Record<string, string> = {
  blue: "blue",
  orange: "orange",
  green: "green",
  purple: "purple",
};

export default function DashboardItemCard({
  description,
  subDescription,
  bgcolor,
  icon: Icon,
  value,
}: DashboardItemCardProps) {
  const bg = bgvariants[bgcolor];
  const icon = iconColors[bgcolor];

  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <div className="flex items-center gap-4 px-2">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg}`}
        >
          <Icon color={icon} className="text-2xl text-white" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{value}</h2>
          <p className="text-sm text-gray-500">{description}</p>
          {subDescription && (
            <p className="text-xs text-gray-500">{subDescription}</p>
          )}
        </div>
      </div>
    </div>
  );
}
