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
    name: 'Manram Himalayan Voyages',
    description:
      'Website built using WordPress.',
    link: 'https://manramvoyages.com/',
    image:
      '/projects/Manram-Himalayan-Voyages-Home.png',
    id: 'project1',
  },
  {
    name: 'Valley Ornaments',
    description: 'Custom website built using React & Node',
    link: 'https://valleyornaments.com.np/',
    image:
      '/projects/Valley-Ornaments-Nepal-Home.png',
    id: 'project2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  // },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
  // {
  //   title: 'How to Export Metadata from MDX for Next.js SEO',
  //   description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
  //   link: '/blog/example-mdx-metadata',
  //   uid: 'blog-4',
  // },
  {
    title: 'Start with the good',
    description: 'Why start with the good is the best thing you could do?',
    link: '/blog/start-with-the-good',
    uid: 'blog-1',
  },
  {
    title: 'Lost my momentum',
    description: 'Never let your desire for perfection prevent you from finishing something that\'s good.',
    link: '/blog/lost-my-momentum',
    uid: 'blog-2',
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
