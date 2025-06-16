import { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm('xkgbbavd');
  const { toast } = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form fields
      formRef.current?.reset();
    }
  }, [state.succeeded, toast]);

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left flex flex-col justify-center h-full space-y-8">
            <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation. Feel free to reach out!
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                  placeholder="your@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                  placeholder="Your message..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
