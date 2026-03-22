type SectionLabelProps = {
  label: string;
  variant?: 0 | 1;
  className?: string;
};

const VARIANTS = [
  {
    text: "text-[#22c55e]",
    bg: "bg-[#dcffe5]",
  },
  {
    text: "text-[#f97316]",
    bg: "bg-[rgba(249,115,22,0.18)]",
  },
];

export default function SectionLabel({ label, variant = 0, className = "" }: SectionLabelProps) {
  const styles = VARIANTS[variant % VARIANTS.length];
  return (
    <div className={`flex justify-center w-full text-center ${className}`}>
      <span
        className={`inline-flex items-center justify-center ${styles.bg} ${styles.text} rounded-full px-6 py-2 text-xs font-semibold tracking-[0.4em] uppercase`}
      >
        {label}
      </span>
    </div>
  );
}
