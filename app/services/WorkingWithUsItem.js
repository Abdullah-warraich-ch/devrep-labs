"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export default function WorkingWithUsItem({ title, index, children }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0.8, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : index * 0.045 }}
    >
      <h3>
        <button type="button" aria-expanded={open} aria-controls={panelId}
          onClick={() => setOpen(!open)}
          className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left font-poppins-m">
          {title}
          <motion.span aria-hidden="true" animate={{ rotate: open ? 90 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>
            <IconArrowRight size={16} />
          </motion.span>
        </button>
      </h3>
      <motion.div id={panelId} aria-hidden={!open} inert={!open} initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
        className="overflow-hidden">
        {children}
      </motion.div>
    </motion.div>
  );
}
