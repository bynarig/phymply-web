// src/lib/models/pageModel.ts
import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: Object, // Will store TipTap JSON content
    required: true
  },
  layout: {
    type: String,
    enum: ['default', 'full-width', 'sidebar'],
    default: 'default'
  },
  widgets: [String], // References to widget components
  metadata: {
    description: String,
    keywords: String
  },
  published: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Page || mongoose.model('Page', pageSchema);