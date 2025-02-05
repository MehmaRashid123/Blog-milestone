// types.ts (you can create a types file or place this inside your component file)
export interface Blog {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    publishedAt: string;
    // Add any other fields you have in your Sanity blog document
  }
  