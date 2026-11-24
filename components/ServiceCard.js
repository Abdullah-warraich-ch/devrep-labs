import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function ServiceCard({ title, description, icon: Icon, href }) {
  return (
    <Link href={href} className="group flex items-start gap-4 border-t border-foreground/20 py-6 transition-colors hover:bg-foreground/[0.025] sm:gap-5">
      <Icon aria-hidden="true" size={24} stroke={1.5} className="mt-1 shrink-0" />
      <div className="flex-1">
        <h3 className="font-poppins-m text-xl leading-tight tracking-tight">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/70">{description}</p>
      </div>
      <IconArrowUpRight aria-hidden="true" size={18} className="mt-1 shrink-0 text-primary" />
    </Link>
  );
}
