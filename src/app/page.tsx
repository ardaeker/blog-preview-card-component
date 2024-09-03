import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      {/* The W3C Markup Validation Service will throw an error if the <h1> element is empty. 
          To avoid this, we can add visually hidden text to the <h1> element. 
          This is only necessary in this example; in a real-world scenario, we will likely have a title. */}
      <h1 className="sr-only">Product Preview Card Component</h1>
      <article className="border-black max-w-card rounded-card border bg-white p-6 shadow-card transition-shadow has-[h2:hover]:shadow-card-active">
        <figure>
          <img
            src="/illustration-article.svg"
            alt="HTML & CSS foundations"
            className="h-thumbnail w-full rounded-thumbnail object-cover"
          />
        </figure>

        <header className="mt-6 space-y-3">
          <div className="bg-yellow max-w-max rounded px-3 py-1">
            <p className="text-black text-xs font-extrabold sm:text-sm">
              Learning
            </p>
          </div>
          <p className="text-black text-xs font-medium sm:text-sm">
            Published <time dateTime="2023-12-21">21 Dec 2023</time>
          </p>
          <h2 className="text-black hover:text-yellow max-w-max text-xl font-extrabold transition-colors sm:text-2xl sm:leading-9">
            <Link href="/">HTML & CSS foundations</Link>
          </h2>
        </header>
        <section className="mt-3">
          <p className="text-gray text-sm font-medium sm:text-base">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </section>

        <footer className="mt-6">
          <figure className="flex items-center gap-x-3">
            <img
              src="/image-avatar.webp"
              alt="Greg Hooper Avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <figcaption className="text-black text-sm font-extrabold">
              Greg Hooper
            </figcaption>
          </figure>
        </footer>
      </article>
    </main>
  );
}
