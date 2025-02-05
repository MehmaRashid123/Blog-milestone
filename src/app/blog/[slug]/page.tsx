// app/blog/[slug]/page.tsx

import { client } from "@/sanity/lib/client"; // Adjust path if needed
import imageUrlBuilder from '@sanity/image-url';
import { notFound } from 'next/navigation';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface Blog {
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: Array<any>;
  mainImage: any;
  category: string;
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch the blog post by slug
  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{title, slug, publishedAt, body, mainImage, category}`,
    { slug }
  );

  if (!blog) {
    notFound(); // Show 404 page if the blog doesn't exist
  }

  // Function to render the blocks from the body
  const renderBody = (body: Array<any>) => {
    return body.map((block: any, index: number) => {
      if (block._type === 'block' && block.children) {
        return (
          <p key={index} className="mb-4">
            {block.children.map((child: any, childIndex: number) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Blog Title and Image */}
        <h1 className="text-3xl font-semibold text-gray-900">{blog.title}</h1>
        <h2 className="text-lg text-gray-500">{blog.category} | {new Date(blog.publishedAt).toLocaleDateString()}</h2>

        <img
          className="w-full object-cover object-center mt-6"
          src={urlFor(blog.mainImage).url()}
          alt={blog.mainImage?.alt || "Blog Image"}
        />

        {/* Blog Body Content */}
        <div className="mt-6">
          {renderBody(blog.body)}
        </div>
      </div>
    </section>
  );
}
