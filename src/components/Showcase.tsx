export default function Showcase({ title, author, publishDate, preContent }: { title: string, author: string, publishDate: string, preContent: string}) {
    return (
        <article className="min-h-40 rounded-xl bg-gray-900 p-6 shadow-sm flex flex-col">
            <header>
                <h1 className="text-2xl font-bold">{title}</h1>
            </header>
            <section>
                <p className="text-m text-gray-300">{preContent}</p>
            </section>
            <footer>
                <p className="text-sm text-gray-400">{author + " " + publishDate}</p>
            </footer>
        </article>
    )
}