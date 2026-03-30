interface DestinationCardProps {
  /** Zero-padded number label, e.g. "01" */
  number: string;
  title: string;
  description: string;
}

/** Numbered destination info card — reused in the bottom bar */
export default function DestinationCard({
  number,
  title,
  description,
}: DestinationCardProps) {
  return (
    <div className="flex flex-col gap-1 min-w-[200px]">
      <span className="font-heading font-black text-primary text-[12px] uppercase">
        {number}
      </span>
      <h3 className="font-body font-bold text-white text-[18px] leading-[1.55]">
        {title}
      </h3>
      <p className="font-body font-normal text-gray-muted text-[13px] leading-[20px] tracking-[0.5px] max-w-[210px]">
        {description}
      </p>
    </div>
  );
}
