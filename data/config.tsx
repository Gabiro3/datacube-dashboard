import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'
const currentYear = new Date().getFullYear();
const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Ireme AI',
    description: 'Talk to your Documents Now',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: 'https://iremeai.pythonanywhere.com/login',
      },
      {
        label: 'Sign Up',
        href: 'https://iremeai.pythonanywhere.com/register',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Copyright © {currentYear}{' '}
        <Link href="">Ireme AI</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:iremeai@gmail.com',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Ireme AI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
