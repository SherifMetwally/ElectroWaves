"use client";

import { motion } from "framer-motion";
import Card from "./ui/Card";
import { ceoMessage } from "@/lib/content";

export default function CEOSection() {
  return (
    <section id="ceo" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                {ceoMessage.title}
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8 italic">
                {ceoMessage.message}
              </p>
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-xl font-bold text-primary">{ceoMessage.name}</p>
                <p className="text-neutral-600">{ceoMessage.position}</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

