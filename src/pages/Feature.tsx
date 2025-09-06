import { motion } from "framer-motion";
import { Shield, Zap, Globe, BarChart3, CreditCard, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import featuresImg  from "@/assets/images/features.png"
const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Military-grade encryption and biometric authentication keep your funds safe",
    badge: "Secure"
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send money anywhere in the world in seconds, not days",
    badge: "Fast"
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description: "Handle 150+ currencies with real-time exchange rates",
    badge: "Global"
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Track spending patterns and get personalized insights",
    badge: "Smart"
  },
  {
    icon: CreditCard,
    title: "Virtual Cards",
    description: "Create unlimited virtual cards for secure online shopping",
    badge: "Flexible"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Seamless experience across all your devices",
    badge: "Modern"
  }
];

export default function Feature() {
  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wallet-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-wallet-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <Badge 
              variant="outline" 
              className="mb-4 px-4 py-2 text-wallet-primary border-wallet-primary/20 bg-wallet-primary/5"
            >
              Features
            </Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
          >
            Everything You Need
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Experience the future of digital payments with our comprehensive suite of features
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Features Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full bg-wallet-surface-elevated/50 backdrop-blur-sm border-border/50 hover:shadow-feature transition-all duration-300 hover:border-wallet-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {feature.title}
                          </h3>
                          <Badge 
                            variant="secondary" 
                            className="text-xs px-2 py-1 bg-wallet-primary/10 text-wallet-primary border-0"
                          >
                            {feature.badge}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* App Preview */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 scale-105" />
              <img
                src={featuresImg}
                alt="Digital Wallet App Interface"
                className="relative rounded-2xl shadow-feature max-w-md w-full h-auto object-cover"
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-wallet-success rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-wallet-secondary rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}