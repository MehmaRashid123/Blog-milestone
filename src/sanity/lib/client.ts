import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "rt7gtozj",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: "skQV5LgP7b0AuooB0I9jGJQyQ33faRwgRu00BAXKpHSDWLFDcyFgHXl7hS16NbCtPBggRc4OarxEKjtnzpBpmhwHuJuOuR7J1mDgbs36XcVPu6wylbCsbY0Rl9XYoaWO4rKoGRQTkvvp3ag2SXCaVQsqeLmzQHsQGpI1b8zLIKmOmxZgws3L",
  useCdn: false,
})
