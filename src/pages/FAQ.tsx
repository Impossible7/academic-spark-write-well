import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from 'lucide-react';

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is Writosphere?",
        answer: "Writosphere is a comprehensive academic writing service that provides professional assistance for students, researchers, and professionals across multiple disciplines. We offer services ranging from assignment writing to PhD thesis completion and journal publication assistance."
      },
      {
        question: "What subjects do you cover?",
        answer: "We cover a wide range of academic disciplines including Law, Management, Computer Science, Engineering, Medicine, Social Sciences, Literature, Psychology, Business Administration, and many more. Our team includes experts from various fields to ensure quality across all subjects."
      },
      {
        question: "How do I place an order?",
        answer: "You can place an order by filling out our order form on the website, contacting us via WhatsApp, email, or phone. Provide your requirements, deadline, and academic level, and we'll assign the most suitable writer for your project."
      }
    ]
  },
  {
    category: "Quality & Originality",
    questions: [
      {
        question: "How do you ensure originality?",
        answer: "All our work is written from scratch by our expert writers. We use advanced plagiarism detection tools like Turnitin and Copyscape to ensure 100% originality. Each paper comes with a free plagiarism report."
      },
      {
        question: "What if I'm not satisfied with the work?",
        answer: "We offer unlimited free revisions within 30 days of delivery if the work doesn't meet your original requirements. Our goal is to ensure complete customer satisfaction."
      },
      {
        question: "Do you provide quality guarantees?",
        answer: "Yes, we guarantee high-quality, well-researched content that meets academic standards. Our multi-tier quality check process ensures that every document is thoroughly reviewed before delivery."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "How much do your services cost?",
        answer: "Our pricing depends on various factors including academic level, deadline, word count, and complexity. We offer competitive rates starting from $10 per page for standard assignments. Contact us for a custom quote."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including credit/debit cards, PayPal, bank transfers, and cryptocurrency. All payments are processed through secure, encrypted channels."
      },
      {
        question: "Do you offer discounts?",
        answer: "Yes, we offer various discounts including first-time customer discounts, bulk order discounts, and seasonal promotions. We also have a loyalty program for returning customers."
      }
    ]
  },
  {
    category: "Deadlines & Delivery",
    questions: [
      {
        question: "Can you handle urgent orders?",
        answer: "Yes, we can handle urgent orders with deadlines as short as 3 hours for certain types of assignments. However, we recommend placing orders in advance for the best quality and rates."
      },
      {
        question: "How is the work delivered?",
        answer: "Work is delivered via email in your preferred format (Word, PDF, etc.). You'll also receive access to our client portal where you can track progress and download your files."
      },
      {
        question: "What if you miss the deadline?",
        answer: "We take deadlines very seriously and have a 99.5% on-time delivery rate. In the rare case of a delay, we offer compensation and priority service for future orders."
      }
    ]
  },
  {
    category: "Publication Services",
    questions: [
      {
        question: "What is Scopus journal publication assistance?",
        answer: "We help researchers publish their work in Scopus-indexed journals. Our services include manuscript preparation, journal selection, submission assistance, and response to reviewer comments."
      },
      {
        question: "How long does the publication process take?",
        answer: "The publication timeline varies depending on the journal and field. Typically, it can take 3-12 months from submission to publication. We guide you through each step of the process."
      },
      {
        question: "Do you guarantee publication acceptance?",
        answer: "While we cannot guarantee acceptance (as this depends on journal reviewers), we significantly increase your chances by ensuring your manuscript meets high academic standards and journal requirements."
      }
    ]
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        question: "Is my personal information secure?",
        answer: "Absolutely. We use advanced encryption and security measures to protect your personal information. We never share your details with third parties and maintain strict confidentiality."
      },
      {
        question: "Will anyone know I used your service?",
        answer: "No, we maintain complete confidentiality. Your identity and the fact that you used our services remain strictly confidential. We never disclose client information to anyone."
      },
      {
        question: "How do you handle my academic work?",
        answer: "All submitted materials and completed work are handled with utmost confidentiality. We delete client files from our servers after the retention period and never reuse or resell any work."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <HelpCircle className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl opacity-90 mb-8">
                Find answers to common questions about our academic writing services
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">
                    {category.category}
                  </h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:bg-background-light">
                          <span className="font-semibold text-text-dark">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 bg-background-light">
                          <p className="text-text-dark/80 leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-background-light p-8 rounded-xl text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h3>
                <p className="text-text-dark/80 mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our friendly customer support team is here to help you with any questions about our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="https://wa.me/1234567890" 
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQ;