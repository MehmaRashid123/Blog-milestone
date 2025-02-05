import BlogDetailPage from "./blog/[slug]/page";
import BlogPage from "./blog/page";
import Hero from "./component/Hero";
import Testimonial from "./component/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BlogPage/>
      <Testimonial />
      
    </div>
  );
}
