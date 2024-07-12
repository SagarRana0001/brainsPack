import { Blog } from "@/types/blog";
import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NutshellBlog = ({ blog }: { blog: Blog }) => {
  const { title, icon, paragraph, tags, publishDate } = blog;
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="pb-5 pt-5">{icon}</CardTitle>

        <CardTitle className="pb-2 leading-6">{title}</CardTitle>
        <CardDescription className="  text-gray-400">
          {paragraph}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
export default NutshellBlog;
