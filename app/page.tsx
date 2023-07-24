import {
  BlogSection,
  Customers,
  Hero,
  TestImg,
  Testimonials,
  TryHelpScout,
  WhatsHelp,
  WhyDifference,
} from "@/components";
import MobileItems from "@/components/navbarItems/MobileItems";





export default function Home() {
  return (
    <main className="  w-full min-h-[100vh]  ">
       
      <section className="w-full grid items-center justify-center">
        <Hero />
      
      </section>
      <section className="w-full  h-auto grid items-center justify-center">
        <Customers />
      </section>
    
        <WhatsHelp />
    

      
        <WhyDifference />
     
       <TestImg/>
        <Testimonials />
      
      <section>
        <BlogSection />
      </section>
      <section className="w-full ">
        <TryHelpScout />
      </section>
  
    </main>
  );
}
