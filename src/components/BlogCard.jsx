import React from "react"

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="shrink-0">
            <img className="h-48 w-full object-cover" src={blog.mainImage} alt={blog.title} />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
            {blog.categories.map(category => (
                <p className="text-sm font-medium text-indigo-600">
                    <a href="#" className="hover:underline">
                    {category.name}
                    </a>
                </p>
            ))}
            <a href={`/blog/${blog.slug.current}`} className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">{blog.title}</p>
                <p className="mt-3 text-base text-gray-500">
                {blog.excerpt}
                </p>
            </a>
            </div>
            <div className="mt-6 flex items-center">
            <div className="shrink-0">
                <a href="#">
                <span className="sr-only">{blog.authors[0].name}</span>
                <img
                    className="size-10 rounded-full"
                    src={blog.avatar}
                    alt=""
                />
                </a>
            </div>
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">
                    {blog.authors[0].name}
                </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                <time datetime="2020-03-16">{blog.publishedAt}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{blog.time} min read</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
};

export default BlogCard;
