import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Fair Pricing for everyone',
  description:
    'Our Prices ensure that DataCube stays affordable for everyone.',
  plans: [
    {
      id: 'oss',
      title: 'Starter Plan',
      description: 'Basic compoents, perfect to get started.',
      price: 'Free',
      features: [
        {
          title: '10 Documents Synthesis',
        },
        {
          title: 'Document Summarization',
        },
        {
          title: 'AI dialogue, up to 20 Questions',
        },
        {
          title: '20 MBS Documents storage',
        },
        {
          title: 'Document Tags',
        },
        {
          title: 'And much more...',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'Professional Plan',
      description: 'Complete document uploads and synthesis.',
      price: (<Text>€10 / month</Text>),
      isRecommended: true,
      features: [
        {
          title: 'Unlimited Document uploads',
        },
        {
          title: 'Document Summarization',
        },
        {
          title: 'Unlimited AI queries',
        },
        {
          title: '100 MBS Documents Storage',
        },
        {
          title: 'Document Tags',
        },
        {
          title: 'Private slack community',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
      },
    },
    {
      id: 'startup',
      title: 'Enterprise Plan',
      description: 'Unlimited license for growing teams.',
      price: (
        <HStack>
          
          <Text>Custom Pricing</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Unlimited Document Uploads',
        },
        {
          title: 'Document Summarization',
        },
        {
          title: 'Custom AI queries',
        },
        {
          title: 'Custom Documents storage',
        },
        null,
        {
          title: 'Private domain server',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license',
      },
    },
  ],
}
