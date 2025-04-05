// src/components/admin/PageEditor.tsx
"use client"

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from '@/components/ui/Button';

export default function PageEditor({ initialData, onSave }) {
  const [page, setPage] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    layout: initialData?.layout || 'default',
    published: initialData?.published || false,
    widgets: initialData?.widgets || []
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: initialData?.content || '<p>Start writing your content...</p>',
  });

  const handleSave = async () => {
    const content = editor.getJSON();
    const pageData = { ...page, content };

    await onSave(pageData);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-2">
        <div>
          <label className="label">Title</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={page.title}
            onChange={(e) => setPage({...page, title: e.target.value})}
          />
        </div>
        <div>
          <label className="label">URL Slug</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={page.slug}
            onChange={(e) => setPage({...page, slug: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className="label">Layout</label>
        <select
          className="select select-bordered w-full"
          value={page.layout}
          onChange={(e) => setPage({...page, layout: e.target.value})}
        >
          <option value="default">Default</option>
          <option value="full-width">Full Width</option>
          <option value="sidebar">With Sidebar</option>
        </select>
      </div>

      <div>
        <label className="label">Content</label>
        <div className="border rounded-lg p-4 min-h-[400px] bg-white">
          <EditorContent editor={editor} />
        </div>
      </div>

      <WidgetSelector
        widgets={page.widgets}
        onChange={(widgets) => setPage({...page, widgets})}
      />

      <div className="flex justify-end space-x-2">
        <Button onClick={() => setPage({...page, published: false})}>
          Save Draft
        </Button>
        <Button onClick={() => setPage({...page, published: true})}>
          Publish
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
}