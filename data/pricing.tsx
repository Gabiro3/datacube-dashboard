import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Fair Pricing for everyone",
  description: "Our Prices ensure that DataCube stays affordable for everyone.",
  plans: [
    {
      id: "oss",
      title: "Starter Plan",
      description: "Basic compoents, perfect to get started.",
      price: <Text>500 RWF / Document</Text>,
      features: [
        {
          title: "10 Documents Synthesis",
        },
        {
          title: "Document Summarization",
        },
        {
          title: "Ask AI, 3 questions per Doc",
        },
        {
          title: "5MBs Documents storage",
        },
        {
          title: "Document Tags",
        },
        {
          title: "And much more...",
        },
      ],
      action: {
        href: "#",
      },
    },
    {
      id: "bootstrap",
      title: "Professional Plan",
      description: "Complete document uploads and synthesis.",
      price: <Text>20,000 RWF / month</Text>,
      isRecommended: true,
      features: [
        {
          title: "Up to 60 Document uploads",
        },
        {
          title: "Document Summarization",
        },
        {
          title: "20 AI queries per Doc",
        },
        {
          title: "100 MBS Documents Storage",
        },
        {
          title: "Document Tags",
        },
        {
          title: "Private slack community",
        },
        null,
        {
          title: "Private beta access",
          iconColor: "green.500",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license",
      },
    },
    {
      id: "startup",
      title: "Enterprise Plan",
      description: "Unlimited license for growing teams.",
      price: (
        <HStack>
          <Text>Custom Pricing</Text>
        </HStack>
      ),
      features: [
        {
          title: "Unlimited Document Uploads",
        },
        {
          title: "Document Summarization",
        },
        {
          title: "Custom AI queries",
        },
        {
          title: "Custom Documents storage",
        },
        {
          title: "Private Domain Name",
        },
        null,
        {
          title: "Private domain server",
          iconColor: "green.500",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license",
      },
    },
  ],
};
