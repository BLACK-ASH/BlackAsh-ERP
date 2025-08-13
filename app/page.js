"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      title: "Authentication & User Management",
      desc: "Secure signup/login for students & teachers with role-based dashboards.",
    },
    {
      title: "QR-Based Attendance",
      desc: "Generate unique QR codes for students. Teachers scan to mark attendance instantly.",
    },
    {
      title: "Quiz Module",
      desc: "Teachers create MCQs, students attempt with a timer. Auto-evaluation included.",
    },
    {
      title: "Notice Board",
      desc: "Teachers/Admins post important notices. Students can view and search.",
    },
    {
      title: "Reports",
      desc: "Detailed attendance %, quiz results for students, analytics for teachers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background">
      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-primary mb-6"
        >
          BlackAshERP
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          A powerful ERP solution for schools and colleges — manage attendance, quizzes, reports, and more in one place.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8"
        >
          <Button onClick={() => window.location.href = "/register"} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-primary mb-12"
        >
          Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
