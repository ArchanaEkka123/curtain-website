"use client";

import { useState } from "react";

export default function AdminPage() {
  const [form, setForm] = useState({
    title: "",
    image: "",
    description: "",
    features: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);

      formData.append(
        "features",
        JSON.stringify(
          form.features
            .split(",")
            .map((item) => item.trim())
        )
      );

      formData.append("image", form.image);

      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        // ✅ Reset form
        setForm({
          title: "",
          image: "",
          description: "",
          features: "",
        });

        // reset file input manually handled by key trick below

        // ✅ Show message
        setMessage("Submitted Successfully ✅");

        // message auto hide after 3 sec
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      setMessage("Something went wrong ❌");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Add Product</h1>

      {/* ✅ Success Message */}
      {message && (
        <p className="mb-4 text-green-600 font-semibold">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-3 w-full"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        {/* ✅ File input reset fix using key */}
        <input
          key={form.image ? "file-filled" : "file-empty"}
          type="file"
          accept="image/*"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({ ...form, image: e.target.files[0] })
          }
        />

        <textarea
          placeholder="Description"
          className="border p-3 w-full"
          rows={4}
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Features separated by commas"
          className="border p-3 w-full"
          rows={4}
          value={form.features}
          onChange={(e) =>
            setForm({
              ...form,
              features: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}