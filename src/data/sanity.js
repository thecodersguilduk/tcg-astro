import dotenv from 'dotenv';

dotenv.config();
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID, // Find this in your Sanity project settings
  dataset: 'production',        // This should match the dataset in your Sanity project
  useCdn: true,      
  token: process.env.SANITY_TOKEN           // `false` if you need to get fresh data (not cached)
})
