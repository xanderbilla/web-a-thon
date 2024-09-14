"use client";

import React, { useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Editor from "@/components/editor/editor";
import axios from "axios";

type Props = {};

export const defaultValue = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: 'Type "/" to get started',
        },
      ],
    },
  ],
};

export default function ContentForm({}: Props) {
  const [title, SetTitle] = React.useState("");
  const [slug, SetSlug] = React.useState("");
  const [content, setContent] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleClick = async () => {

    const data = {
      title: title,
      content: content,
    };
    console.log(data);
    
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:5000/api/posts/",
        data,
        config
      );
      setMessage("Post created successfully.");

      // Reset input values
      SetTitle("");
      SetSlug("");
      setContent("");
    } catch (error) {
      console.log(error);
      setMessage("An error occurred. Please try again.");
    }

  };

  useEffect(() => {
    const name = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    SetSlug(name);
  }, [title]);

  return (
    <div className="mt-6 flex min-w-full flex-col items-center justify-center gap-4">
      <div className="flex w-1/2 flex-col gap-4">
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Slug"
          value={slug}
          onChange={(e) => SetSlug(e.target.value)}
        />
        <Editor initialValue={defaultValue} onChange={setContent}/>
        <Button onClick={handleClick} className="text-lg h-12">Create</Button>
      </div>
      {
        message && (
          <div className="w-full mt-4 prose my-4 px-2">
            <p>{message}</p>
          </div>
        )
      }
    </div>
  );
}
