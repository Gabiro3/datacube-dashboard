import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiFileText,
  FiTrendingUp,
  FiUserPlus,
  FiCloud
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="DataCube AI"
        description="Free AI Document Management System"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                AI that lets you Talk
                <Br /> To your Documents
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                DataCube provides <Em>AI-powered tools</Em>
                <Br /> that allow you to gain insights from your Documents{" "}
                <Br /> in real-time without hassle.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <Image
                  src="/static/images/excel-svgrepo-com.svg"
                  layout="fixed"
                  width={25}
                  height={25}
                  alt="Microsoft Excel Logo svg"
                  quality="75"
                  priority
                />
                <Image
                  src="/static/images/ms-word-svgrepo-com.svg"
                  layout="fixed"
                  width={25}
                  height={25}
                  alt="Microsoft Word logo svg"
                  quality="75"
                  priority
                />
                <Image
                  src="/static/images/ms-onenote-svgrepo-com.svg"
                  layout="fixed"
                  width={25}
                  height={25}
                  alt="Microsoft OneNote Logo svg"
                  quality="75"
                  priority
                />
                <Image
                  src="/static/images/pdf-svgrepo-com.svg"
                  layout="fixed"
                  width={25}
                  height={25}
                  alt="Pdf Logo svg"
                  quality="75"
                  priority
                />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of DataCube Dashboard"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Easy to Use",
            icon: FiSmile,
            description: "DataCube is built with an intuitive and easy to use interface.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Integrated",
            icon: FiSliders,
            description:
              "Get AI integrated into your documents without hassle.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Composable",
            icon: FiGrid,
            description:
              "You can Ask Questions and get answers right away!",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Productive",
            icon: FiThumbsUp,
            description:
              "This is a new way to synthesize documents, and it works!",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started with DataCube by <Em>Creating an Account</Em>.
            After creating an account, you will be able to upload your own documents
            to the platform, get AI-powered insights from them and <Em>ask questions about </Em> 
             the information stored in them.
          </Text>

              <HStack pt="4" pb="5" spacing="8">
                <Image
                  src="/static/images/ms-word-svgrepo-com.svg"
                  layout="fixed"
                  width={30}
                  height={30}
                  alt="Microsoft Word Logo svg"
                  quality="75"
                  priority
                />
                <Image
                  src="/static/images/pdf-svgrepo-com.svg"
                  layout="fixed"
                  width={30}
                  height={30}
                  alt="Pdf logo svg"
                  quality="75"
                  priority
                />
                <Image
                  src="/static/images/excel-svgrepo-com.svg"
                  layout="fixed"
                  width={30}
                  height={30}
                  alt="Microsoft Excel logo"
                  quality="75"
                  priority
                />
                <Image
                  src="/static/images/ms-onenote-svgrepo-com.svg"
                  layout="fixed"
                  width={30}
                  height={30}
                  alt="Microsoft OneNote logo"
                  quality="75"
                  priority
                />
              </HStack>
          
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most advanced and established AI tools in the scene to help
          you get the most out of you documents.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Multiple Documents Supported"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your backend functionalities, so you can focus on
          what's important: talking to your documents.
        </Text>
        <Wrap mt="8">
          {[
            "essays",
            "contracts",
            "reports",
            "letters",
            "excel sheets",
            "invoices",
            "billing reports",
            "testing records",
            "speeches",
            "documentations",
            "announcements",
            "storybooks",
            "transcripts",
            "upselling",
            "unit testing",
            "feature flags",
            "responsiveness",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your average
          AI docmaster.
        </Heading>
      }
      description={
        <>
          Typical AI docmasters are either too complex or filled with ads.
          <Br />
          DocuBite AI is easy to use, and No! we don&apos;t do ads.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Secure.",
          icon: FiLock,
          description:
            "DataCube safely secures your documents privacy and we don't store our user's data, you own your own data.",
          variant: "inline",
        },
        {
          title: "Search.",
          icon: FiSearch,
          description:
            "We make documents search soo easy and straighforward, just use our advanced AI-powered DocuSearch feature.",
          variant: "inline",
        },

        {
          title: "Document Tags.",
          icon: FiFlag,
          description:
            "Each document is flagged with key features from it. Document tags allow for easy classification and documents retrieval.",
          variant: "inline",
        },
        {
          title: "Excel.",
          icon: FiTrendingUp,
          description:
            "Having a tool that lets you talk to your documents is crucial for your personal and professional development.",
          variant: "inline",
        },
        {
          title: "File Store.",
          icon: FiCloud,
          description:
            "Our cloud storage solution offers file access and storage directly from the cloud, your documents are safe.",
          variant: "inline",
        },
        {
          title: "Summarise.",
          icon: FiFileText,
          description: "Summarise information in your documents and extract key information from them.",
          
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []],
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "We are going live this Friday, Join Us 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
        action: false,
      },
    },
  };
}
