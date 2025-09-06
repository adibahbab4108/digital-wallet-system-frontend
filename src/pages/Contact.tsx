import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Shield } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["456 Agrabad Commercial Area", "Chattogram, Bangladesh"],
    color: "text-wallet-primary"
  },
  {
    icon: Phone,
    title: "Phone Support",
    details: ["+880 181818181818", "24/7 Support Available"],
    color: "text-wallet-secondary"
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["adib.ahbab00@gmail.com", "Response within 2 hours"],
    color: "text-wallet-success"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Sat - Thu: 9:00 AM - 6:00 PM", "Friday: 10:00 AM - 4:00 PM"],
    color: "text-wallet-warning"
  }
];


  const supportFeatures = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join our user community for tips and updates"
    },
    {
      icon: Shield,
      title: "Security Help",
      description: "Dedicated security support for your account"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help you with any questions about your digital wallet. 
            Reach out to our support team for assistance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-wallet-surface-elevated border-0 shadow-feature">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-wallet-primary flex items-center gap-2">
                  <Send className="h-6 w-6" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="bg-wallet-surface border-wallet-primary/20 focus:border-wallet-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="bg-wallet-surface border-wallet-primary/20 focus:border-wallet-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-wallet-surface border-wallet-primary/20 focus:border-wallet-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      className="bg-wallet-surface border-wallet-primary/20 focus:border-wallet-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-wallet-primary mb-8">
              Contact Information
            </h2>
            
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-wallet-surface-elevated border-0 shadow-feature hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-gradient-subtle ${info.color}`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Support Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-wallet-primary mb-8">
            Additional Support Options
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => (
              <Card key={index} className="bg-wallet-surface-elevated border-0 shadow-feature hover:shadow-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-wallet-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}