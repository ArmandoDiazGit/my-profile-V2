import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../libs/Card";
import { Button } from "../libs/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Label } from "../ui/Label";
import { personalInfo, contactFormSubmit } from "../libs/Data";
import { toast } from "../hooks/use-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await contactFormSubmit(formData);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Interested in working together or have a role that fits my
              experience? Let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-2 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <Mail size={24} />
                    Email Me
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Feel free to reach out directly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-lg text-white hover:text-cyan-400 transition-colors font-medium"
                  >
                    {personalInfo.email}
                  </a>
                </CardContent>
              </Card>

              <div className="bg-linear-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Let's Build Something Great
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I'll try my best to get back to you!
                </p>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-2 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form and I'll respond as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                      className="bg-slate-900/50 border-2 border-slate-600 text-white placeholder:text-gray-500 focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                      className="bg-slate-900/50 border-2 border-slate-600 text-white placeholder:text-gray-500 focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      disabled={isSubmitting || isSubmitted}
                      className="bg-slate-900/50 border-2 border-slate-600 text-white placeholder:text-gray-500 focus:border-cyan-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="mr-2" size={20} />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
