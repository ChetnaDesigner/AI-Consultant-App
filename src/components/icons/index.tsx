import type { ReactNode } from "react";

type IconProps = {
  className?: string;
  size?: number;
};

function IconBase({
  children,
  className = "",
  size = 20,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={className}
    >
      {children}
    </svg>
  );
}

export function SparklesIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M10 2.5 11.2 7.8 16.5 9 11.2 10.2 10 15.5 8.8 10.2 3.5 9 8.8 7.8 10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.5 16.5 5.5 18.5 6 16.5 6.5 16 8.5 15.5 6.5 13.5 6 15.5 5.5 16 3.5Z"
        fill="currentColor"
      />
    </IconBase>
  );
}

export function ClipboardIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <rect
        x="5.5"
        y="4"
        width="9"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7.5 4V3.5C7.5 2.67 8.17 2 9 2h2c.83 0 1.5.67 1.5 1.5V4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </IconBase>
  );
}

export function SettingsIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <circle cx="10" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 2.5v1.8M10 15.7v1.8M17.5 10h-1.8M4.3 10h-1.8M15.1 4.9l-1.3 1.3M6.2 13.8l-1.3 1.3M15.1 15.1l-1.3-1.3M6.2 6.2 4.9 4.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

export function CheckCircleIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 10.2 8.8 12.5 13.5 7.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function MapIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M3.5 5.5 7 4l6 2 3.5-1.5v11l-3.5 1.5-6-2-3.5 1.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M7 4v11M13 6v11" stroke="currentColor" strokeWidth="1.5" />
    </IconBase>
  );
}

export function ClockIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 6v4l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function UsersIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <circle cx="7" cy="7.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="13.5" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 16.5c0-2.2 1.8-3.5 3.5-3.5s3.5 1.3 3.5 3.5M11.5 16.5c.2-1.6 1.4-2.8 3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

export function CurrencyIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.5 8.5h4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H8.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M10 6v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconBase>
  );
}

export function LayersIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M10 3.5 16.5 7 10 10.5 3.5 7 10 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 10 10 13.5 16.5 10M3.5 13 10 16.5 16.5 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function AlertIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M10 3.5 16.5 15.5H3.5L10 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 8v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13.5" r="0.75" fill="currentColor" />
    </IconBase>
  );
}

export function CloudIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M6.5 14.5h7.5c1.9 0 3.5-1.4 3.5-3.2S15.4 8 13.5 8c-.4-2.2-2.4-3.8-4.7-3.8-2.1 0-3.9 1.3-4.6 3.2-2 .3-3.5 2-3.5 4 0 2.2 1.8 3.1 3.8 3.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function DashboardIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </IconBase>
  );
}

export function HistoryIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M4 10a6 6 0 1 1 1.8 4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 6.5V10h3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function StarIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M10 3.5 11.8 7.8 16.5 8.3 13 11.5 14.1 16.1 10 13.7 5.9 16.1 7 11.5 3.5 8.3 8.2 7.8 10 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function TemplatesIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <rect x="3" y="4" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 4v12M13 4v12" stroke="currentColor" strokeWidth="1.5" />
    </IconBase>
  );
}

export function CrownIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M3.5 14.5h13M5 14.5V8l2.5 2 2.5-4 2.5 4 2.5-2v6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function BotIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <rect x="4" y="6" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="10.5" r="1" fill="currentColor" />
      <circle cx="12" cy="10.5" r="1" fill="currentColor" />
      <path d="M10 3.5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="3" r="0.75" fill="currentColor" />
    </IconBase>
  );
}

export function DocumentIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M6 3.5h5l3 3v10.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M11 3.5V7h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </IconBase>
  );
}

export function WrenchIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M13.5 4.5a3.2 3.2 0 0 0-4.3 4.3L4.5 13.5l2 2 4.7-4.7a3.2 3.2 0 0 0 2.3-5.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function BrainIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M7.5 4.5C5.8 4.5 4.5 6 4.5 7.8c0 1 .4 1.8 1 2.4-.6.6-1 1.5-1 2.5 0 1.8 1.3 3.3 3 3.3h1M12.5 4.5c1.7 0 3 1.5 3 3.3 0 1-.4 1.8-1 2.4.6.6 1 1.5 1 2.5 0 1.8-1.3 3.3-3 3.3h-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M10 4.5v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconBase>
  );
}

export function ArrowDownIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M10 4.5v9M6.5 11 10 14.5 13.5 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function BrandLogoIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <rect x="3" y="5" width="14" height="2" rx="1" fill="currentColor" />
      <rect x="3" y="9" width="10" height="2" rx="1" fill="currentColor" />
      <rect x="3" y="13" width="6" height="2" rx="1" fill="currentColor" />
    </IconBase>
  );
}

export function PlusIcon({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M10 4.5v11M4.5 10h11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </IconBase>
  );
}
