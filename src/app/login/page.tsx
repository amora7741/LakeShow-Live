"use client";

import type React from "react";

import { useState } from "react";
import ShaderBackground from "@/components/ShaderBackground";
import { motion } from "motion/react";

export default function LoginPage() {
  const [passcode, setPasscode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
    setPasscode(value);
  };

  return (
    <ShaderBackground>
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className=" bg-white/5 border w-full max-w-md border-white/10 rounded-2xl p-8 shadow-2xl">
            <h1 className="text-4xl font-bold text-white mb-2 text-center">
              Enter Passcode
            </h1>
            <p className="text-white/60 text-center mb-8">
              Please enter your 6-digit passcode to continue
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={passcode}
                  onChange={handleChange}
                  placeholder="000000"
                  className="w-full px-6 py-4 text-center text-3xl font-mono tracking-[0.5em] bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/20 transition-all"
                  maxLength={6}
                  autoFocus
                />
                <div className="mt-2 text-sm text-white/40 text-center">
                  {passcode.length}/6 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={passcode.length !== 6}
                className="w-full py-4 text-white cursor-pointer bg-purple-700/50 font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </ShaderBackground>
  );
}
