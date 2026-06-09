type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    image:
      'https://64.media.tumblr.com/a56381366ceaab29b760aabe5e88df07/f3b5e9af4d3103f3-97/s2048x3072/caec6beeee2cbeb80b05e88c917b187926749703.jpg',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image:
      'https://64.media.tumblr.com/a56381366ceaab29b760aabe5e88df07/f3b5e9af4d3103f3-97/s2048x3072/caec6beeee2cbeb80b05e88c917b187926749703.jpg',
    id: 'project2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Twitter',
    link: 'https://www.x.com/AtitManandhar',
  },
  {
    label: 'YouTube',
    link: 'https://www.youtube.com/@atitmanandhar',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/atitmanandhar',
  },
]

export const EMAIL = 'atit.manandhar.a9@gmail.com'
