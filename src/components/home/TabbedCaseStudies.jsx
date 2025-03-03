
import { useState } from "react";
import Button from "../global/Button";
import { client } from "../../data/sanity";

const fetchCaseStudies = async () => {
  const query = `*[_type == "caseStudies" && !(_id in path("drafts.**"))] {
    ...,
     metrics[]{
       description,
       "image": image.asset->url
     },
     "situation": {
       "text": situation.text,
       "image": situation.image.asset->url
     },
     "task": {
       "text": task.text,
       "image": task.image.asset->url
     },
     "result": {
       "text": result.text,
       "image": result.image.asset->url
     },
     "featuredImage": {
       "src": featuredImage.asset->url,
       "alt": featuredImage.alt
     },
     testimonial->{
       client,
       testimonial,
       occupation,
       "avatar": avatar.asset->url,
     },
     pdfLink{
       "link": asset->url,
     },
     "author": authors[0]->{name},
     "avatar": authors[0]->image.asset->url,
     publishedAt,
     categories[]->{name},
     tags
 } | order(publishedAt desc)`;
  const caseStudies = await client.fetch(query);
  return caseStudies;
};
const caseStudies = await fetchCaseStudies();
console.log(caseStudies);

const tabs = [
  {
    id: "employers",
    label: "Employers",
    content:
      "Employers benefit from skilled learners who are job-ready. We provide tailored training programs to meet industry needs.",
    image: "/images/employers.jpg",
  },
  {
    id: "learners",
    label: "Learners",
    content: "Learners gain hands-on experience and industry connections, helping them secure meaningful careers.",
    image: "/images/learners.jpg",
  },
  {
    id: "funders",
    label: "Funders",
    content: "Funders enable accessible education for all, driving social mobility and economic growth.",
    image: "/images/funders.jpg",
  },
];


const TabbedCaseStudies = () => {
  const [activeTab, setActiveTab] = useState("employers");

  return (
    <section className="container mx-auto p-6">
      <div className="flex space-x-4 border-b">
        {
          tabs.map((tab) => (
            <Button
              key={tab.id}
              className={`py-2 px-4 cursor-pointer font-medium transition-colors ${activeTab === tab.id ? "bg-blue-200 text-white" : "bg-white text-blue-200"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))
        }
      </div>
      <div className="mt-6 flex items-center space-x-6">
        {caseStudies.map((caseStudy) => (
          caseStudy.tags.value === activeTab &&
          <div key={caseStudy._id} className="w-1/3 p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">{caseStudy.title}</h3>
            <p className="text-gray-600">{caseStudy.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  )
};

export default TabbedCaseStudies;




