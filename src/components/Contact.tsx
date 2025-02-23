
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest mb-2">Contact</h2>
        <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input placeholder="Your Name" required />
          </div>
          <div>
            <Input type="email" placeholder="Your Email" required />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              className="min-h-[150px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
