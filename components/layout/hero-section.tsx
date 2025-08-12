"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, Code, Star } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    img: "/avatars/jemy.png",
    fallback: "JP",
    text: "Awesome product!",
    name: "Jemmie Penilla",
  },
  {
    img: "/avatars/angga.png",
    fallback: "AR",
    text: "Money saver 25%",
    name: "Angga Rizky",
  },
  {
    img: "/avatars/petina.png",
    fallback: "PM",
    text: "I love the warranty",
    name: "Petina Malaka",
  },
  {
    img: "/avatars/udin.png",
    fallback: "US",
    text: "Big deals over!",
    name: "Udin Sarifun",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-transparent py-12 px-4 md:px-0">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-4 mt-5">
            <span className="flex items-center gap-2 bg-white text-sm md:text-base font-semibold px-3 py-1 rounded-full">
              <Crown size={14} />
              Most Popular 100th Product in Belanja
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 mt-5">
            Working Faster 10x
          </h1>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Dolor si amet lorem super-power features richer than any other
            platform devices AI integrated.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-6 text-sm md:text-base">
              Add to Cart
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 py-6 text-sm md:text-base"
            >
              View Details
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/laptop.png"
            alt="Laptop"
            width={500}
            height={300}
            className="rounded-lg w-full max-w-[400px] md:max-w-[500px] h-auto"
          />

          {/* Bonus Mac OS */}
          <motion.div
            className="absolute bottom-2 left-2 flex items-center gap-2 bg-white px-3 py-2 rounded-2xl text-xs md:text-sm shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="bg-yellow-400 p-2 rounded-full text-white">
              <Code size={16} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-medium">Bonus Mac OS</span>
              <span className="font-medium">Capitan Pro</span>
            </div>
          </motion.div>

          {/* Include Warranty */}
          <motion.div
            className="absolute top-1/3 right-2 md:right-16 flex flex-col items-center gap-1 bg-white px-3 py-2 rounded-2xl text-xs md:text-sm shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <div className="bg-yellow-400 p-2 rounded-full text-white flex items-center justify-center">
              <Star size={16} />
            </div>
            <span className="font-medium">Include</span>
            <span className="font-medium">Warranty</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Reviews */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-10 px-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
          >
            <Avatar className="border-4 border-white rounded-full w-10 h-10 md:w-12 md:h-12">
              <AvatarImage src={item.img} alt={item.name} />
              <AvatarFallback>{item.fallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-xs md:text-sm">
              <span className="font-semibold">{item.text}</span>
              <span className="text-gray-500">{item.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
