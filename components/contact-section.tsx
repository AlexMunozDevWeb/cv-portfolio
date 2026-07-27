"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="border-t border-outline-variant/20 py-24">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
        {/* Left Column: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-text-primary">
              Initiate Contact
            </h3>
            <p className="mt-2 font-mono text-xs tracking-widest text-text-muted uppercase">
              DISCUSS SYSTEM ARCHITECTURE OR ADVISORY
            </p>
          </div>

          <p className="max-w-md font-sans text-sm leading-relaxed text-on-surface-variant/80">
            Whether you have a complex distributed systems challenge, an
            engineering advisory inquiry, or want to discuss technical
            partnership opportunities, send a message.
          </p>

          <div className="space-y-4 pt-4 font-mono text-sm">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <div className="rounded border border-outline-variant/30 bg-surface-container p-2 text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <span>alex@example</span>
            </div>

            <div className="flex items-center gap-3 text-on-surface-variant">
              <div className="rounded border border-outline-variant/30 bg-surface-container p-2 text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <span>Cambridge, MA // San Francisco, CA</span>
            </div>

            <div className="flex items-center gap-3 text-on-surface-variant">
              <div className="rounded border border-outline-variant/30 bg-surface-container p-2 text-primary">
                <Globe className="h-4 w-4" />
              </div>
              <span>PGP: 0x4F92A190C184E</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form with RHF + Zod */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-surface-border bg-surface-elevated p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4 py-12 text-center"
            >
              <div className="mx-auto w-fit rounded-full border border-primary/30 bg-primary/10 p-4 text-primary">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h4 className="text-2xl font-bold text-text-primary">
                Message Encrypted & Transmitted
              </h4>
              <p className="mx-auto max-w-xs text-sm text-text-muted">
                Thank you. Your message has been routed directly to Alex
                Rivera&apos;s primary inbox.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSubmitted(false)}
                className="mt-4"
              >
                Send Another Transmission
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name field */}
              <div className="space-y-2">
                <label className="flex justify-between font-mono text-xs text-text-muted">
                  <span>const sender_name =</span>
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[11px] text-rose-400">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name.message}
                    </span>
                  )}
                </label>
                <Input
                  placeholder="e.g. Satoshi Nakamoto"
                  {...register("name")}
                  className={errors.name ? "border-rose-500/60" : ""}
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="flex justify-between font-mono text-xs text-text-muted">
                  <span>const sender_email =</span>
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[11px] text-rose-400">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email.message}
                    </span>
                  )}
                </label>
                <Input
                  type="email"
                  placeholder="satoshi@bitcoin.org"
                  {...register("email")}
                  className={errors.email ? "border-rose-500/60" : ""}
                />
              </div>

              {/* Subject field */}
              <div className="space-y-2">
                <label className="flex justify-between font-mono text-xs text-text-muted">
                  <span>const topic =</span>
                  {errors.subject && (
                    <span className="flex items-center gap-1 text-[11px] text-rose-400">
                      <AlertCircle className="h-3 w-3" />
                      {errors.subject.message}
                    </span>
                  )}
                </label>
                <Input
                  placeholder="Distributed Consensus Consultation"
                  {...register("subject")}
                  className={errors.subject ? "border-rose-500/60" : ""}
                />
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="flex justify-between font-mono text-xs text-text-muted">
                  <span>const message_body =</span>
                  {errors.message && (
                    <span className="flex items-center gap-1 text-[11px] text-rose-400">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message.message}
                    </span>
                  )}
                </label>
                <Textarea
                  placeholder="Detail your system architecture requirements or engineering proposal..."
                  {...register("message")}
                  className={errors.message ? "border-rose-500/60" : ""}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="mt-4 flex w-full items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-pulse font-mono text-xs">
                    TRANSMITTING...
                  </span>
                ) : (
                  <>
                    <span>TRANSMIT MESSAGE</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
