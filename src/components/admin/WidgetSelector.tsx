// src/components/admin/WidgetSelector.tsx
"use client"

import { availableWidgets } from '@/lib/widgetsRegistry';

export default function WidgetSelector({ widgets = [], onChange }) {
  const addWidget = (widgetName) => {
    onChange([...widgets, widgetName]);
  };

  const removeWidget = (index) => {
    const updated = [...widgets];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <div>
      <label className="label">Widgets</label>
      <div className="space-y-2">
        {widgets.map((widget, index) => (
          <div key={index} className="flex items-center justify-between border p-2 rounded">
            <span>{availableWidgets[widget]?.title || widget}</span>
            <button
              className="btn btn-sm btn-error"
              onClick={() => removeWidget(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <div>
          <select className="select select-bordered">
            <option value="">Select a widget...</option>
            {Object.entries(availableWidgets).map(([key, widget]) => (
              <option key={key} value={key}>{widget.title}</option>
            ))}
          </select>
          <button
            className="btn btn-primary ml-2"
            onClick={() => addWidget(document.querySelector('select').value)}
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
}