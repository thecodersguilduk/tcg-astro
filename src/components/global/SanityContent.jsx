import { PortableText } from "@portabletext/react";
import { serializers } from "../../utils/serializers";

const SanityContent = ({ content }) => {
  if (!content) return null;

  return <PortableText value={content} components={serializers} />;
};

export default SanityContent;
