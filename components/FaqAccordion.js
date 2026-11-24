"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IconPlus } from "@tabler/icons-react";

export default function FaqAccordion({ faqs }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const transition = { duration: reducedMotion ? 0 : 0.24, ease: "easeOut" };

  return (
    <div className="divide-y divide-foreground/15 border-y border-foreground/15">
      {faqs.map(({ question, answer }, index) => {
        const open = active === index;
        const panelId = `${id}-${index}`;

        return (
          <div key={question}>
            <h3>
              <button type="button" aria-expanded={open} aria-controls={panelId}
                onClick={() => setActive(open ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-poppins-m focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-lg">
                {question}
                <motion.span aria-hidden="true" className={open ? "shrink-0 text-primary" : "shrink-0 text-foreground/65"}
                  initial={false} animate={{ rotate: open ? 45 : 0 }} transition={transition}>
                  <IconPlus size={18} />
                </motion.span>
              </button>
            </h3>
            <motion.div id={panelId} aria-hidden={!open} initial={false}
              animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
              transition={transition} className="overflow-hidden">
              <p className="max-w-xl pb-5 pr-7 text-sm leading-relaxed text-foreground/70">{answer}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
