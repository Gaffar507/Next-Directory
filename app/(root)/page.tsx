import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

interface startupCardType {
  _createdAt: string;
  views: number;
  author: { _id: number, name: string };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}

export default async function Home({ searchParams,}: {searchParams: Promise<{ query?: string }>; }) {
  const query = (await searchParams).query || "";

  const posts = [
    {
      _createdAt: "10 january, 2022",
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl capitalize text-white">
          Submit ideas, vote on pitches and get noticed in Virtual competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <h2 className="text-2xl font-bold">
          {query ? `Search result for ${query}` : "All search results"}
        </h2>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: startupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No startups found!</p>
          )}
        </ul>
      </section>
    </>
  );
}
