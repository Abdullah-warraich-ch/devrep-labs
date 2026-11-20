"use client";

import Link from "next/link";
import { Children, useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconLoader2, IconCheck, IconSparkles, IconUser, IconWallet, IconClock, IconLayout, IconBriefcase, IconCode, IconPalette, IconShoppingCart, IconDots, IconSun, IconMoon } from "@tabler/icons-react";

const stepIcons = {
  Service: IconBriefcase, Budget: IconWallet, Project: IconLayout,
  "Meeting time": IconClock, "Your details": IconUser,
};

function InquiryProgress({ labels, current }) {
  const reduced = useReducedMotion();
  return (
    <ol aria-label="Form progress" className="mb-10 flex w-full items-center sm:mb-14">
      {labels.map((label, index) => {
        const done = index < current;
        const Icon = done ? IconCheck : stepIcons[label];
        return (
          <li key={label} aria-current={index === current ? "step" : undefined}
            className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5 sm:flex-row sm:gap-2">
              <motion.span key={String(done)} initial={reduced ? false : { opacity: 0, rotate: -12 }}
                animate={{ opacity: 1, rotate: 0 }}
                className={`grid size-8 place-items-center rounded-full ${done ? "bg-primary text-white" : index === current ? "bg-primary/10 text-primary ring-1 ring-primary" : "bg-foreground/5 text-foreground/55"}`}>
                <Icon size={17} aria-hidden="true" />
              </motion.span>
              <span className="text-xs font-poppins-m sm:text-sm">{label}{done && <span className="sr-only"> completed</span>}</span>
            </div>
            {index < labels.length - 1 && <span aria-hidden="true" className="mx-2 h-px flex-1 bg-foreground/20 sm:mx-6">
              <motion.span initial={false} animate={{ scaleX: done ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.35 }}
                className="block h-full origin-left bg-primary" />
            </span>}
          </li>
        );
      })}
    </ol>
  );
}

export function InquirySuccess({ labels, title, description, action, href, onRestart }) {
  const actionClass = "mt-7 cursor-pointer rounded-full border border-foreground/20 px-5 py-3 text-sm hover:bg-foreground/5";
  const reduced = useReducedMotion();
  return (
    <>
      <InquiryProgress labels={labels} current={labels.length} />
      <div className="my-auto flex flex-col items-center px-2 pb-12 text-center">
        <div aria-hidden="true" className="mb-6 grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
          <svg viewBox="0 0 32 32" className="size-9" fill="none">
            <motion.path
              d="m7 16 6 6 12-13"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduced ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: reduced ? 0 : 0.32, ease: "easeOut" }}
            />
          </svg>
        </div>
        <motion.div role="status" initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-poppins-sb tracking-tight sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-md text-foreground/70">{description}</p>
        </motion.div>
        {href ? (
          <Link href={href} className={actionClass}>{action}</Link>
        ) : (
          <button type="button" onClick={onRestart} className={actionClass}>{action}</button>
        )}
      </div>
    </>
  );
}

const optionIcons = {
  "Web Development": IconCode, "UI/UX Design": IconPalette, "AI Solutions": IconSparkles,
  "E-Commerce": IconShoppingCart, "Custom Software": IconLayout, Other: IconDots,
  "New Website": IconLayout, "Web Application": IconCode, "AI Automation": IconSparkles,
  "Site Redesign": IconPalette, "Morning (9am - 12pm)": IconSun,
  "Afternoon (12pm - 4pm)": IconSun, "Evening (4pm - 8pm)": IconMoon,
  "Flexible / Anytime": IconClock, "Not sure yet": IconDots,
};

export function InquiryChoices({ name, options, value, onChange }) {
  const reduced = useReducedMotion();
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {options.map((option, index) => {
        const Icon = optionIcons[option] || IconWallet;
        const selected = value === option;
        return (
          <motion.label
            key={option}
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduced ? 0 : index * 0.035 }}
            className="relative flex min-h-32 cursor-pointer flex-col items-start justify-between gap-4 rounded-2xl border border-foreground/15 p-4 transition-colors hover:bg-foreground/5 has-checked:border-primary has-checked:bg-primary/5 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary sm:min-h-36 sm:p-5"
          >
            <input type="radio" name={name} value={option} checked={selected}
              onChange={onChange} required className="sr-only" />
            <Icon size={32} stroke={1.8} aria-hidden="true" className={selected ? "text-primary" : "text-foreground"} />
            <span className="font-poppins-m text-sm leading-snug sm:text-base">{option}</span>
            {selected && (
              <motion.span
                aria-hidden="true"
                initial={reduced ? false : { opacity: 0, y: -3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute right-3 top-3 grid size-6 place-items-center rounded-full bg-primary text-white"
              >
                <IconCheck size={15} stroke={3} />
              </motion.span>
            )}
          </motion.label>
        );
      })}
    </div>
  );
}

export default function InquirySteps({ labels, titles, children, onSubmit, busy, error, submitLabel }) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const focusHeading = useCallback((node) => {
    if (node && direction) node.focus();
  }, [direction]);
  const reduceMotion = useReducedMotion();
  const last = step === titles.length - 1;

  function move(offset) {
    setDirection(offset);
    setStep(step + offset);
  }

  function advance(event) {
    event.preventDefault();
    if (busy) return;
    if (last) onSubmit(event);
    else move(1);
  }

  return (
    <form className="flex flex-1 flex-col" onSubmit={advance} aria-busy={busy}>
      <InquiryProgress labels={labels} current={step} />
      <motion.section key={step} initial={{ opacity: 0, x: reduceMotion ? 0 : direction * 18 }}
        animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.22 }}>
        <h2 id="inquiry-question" tabIndex={-1} ref={focusHeading}
          className="mb-8 text-balance font-poppins-sb text-[clamp(2.25rem,5.2vw,5.5rem)] leading-[1.05] tracking-[-0.055em] outline-none sm:mb-10">
          {titles[step]}
        </h2>
        <fieldset aria-labelledby="inquiry-question" disabled={busy} className="space-y-5">{Children.toArray(children)[step]}</fieldset>
      </motion.section>
      {last && error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}
      <div className="mt-auto flex items-center justify-between gap-4 pt-8">
        <button type="button" disabled={step === 0 || busy} onClick={() => move(-1)}
          className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-foreground/25 px-5 text-sm font-poppins-m transition-colors enabled:hover:bg-foreground/5 disabled:cursor-default disabled:opacity-40">
          <IconArrowLeft size={18} aria-hidden="true" /> Back
        </button>
        <button type="submit" disabled={busy}
          className="ml-auto flex min-h-12 cursor-pointer items-center justify-center gap-3 rounded-full bg-foreground px-8 text-sm font-poppins-m text-background transition-opacity hover:opacity-85 disabled:opacity-60">
          {busy ? "Sending..." : last ? submitLabel : "Continue"}
          {busy ? <IconLoader2 size={18} className="motion-safe:animate-spin" /> : <IconArrowRight size={18} />}
        </button>
      </div>
    </form>
  );
}
