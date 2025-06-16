import { useForm, ValidationError } from '@formspree/react';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xkgbbavd");
  const { toast } = useToast();

  if (state.succeeded) {
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
  );
};

export default ContactForm;
