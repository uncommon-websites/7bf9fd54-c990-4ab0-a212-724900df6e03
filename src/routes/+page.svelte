<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
</script>

<Hero
	title="Your expert's brain on every shift"
	subtitle="Turn scattered videos, spreadsheets, and PDFs into clear, standardized procedures your whole team can follow. Squint transforms tribal knowledge into structured, interactive instructions—so work stays consistent, even when your experts aren't there."
	imageSrc="/generated/image-a-factory-worker-in-a-modern-industrial-.webp"
	centered={false}
/>
<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		'https://logo.clearbit.com/caterpillar.com',
		'https://logo.clearbit.com/ge.com',
		'https://logo.clearbit.com/siemens.com',
		'https://logo.clearbit.com/honeywell.com'
	]}
/>

<Summary
	title="What we do"
	text="Squint transforms videos, PDFs, and tribal knowledge into interactive AR work instructions using AI. We help industrial companies standardize procedures, reduce training time, and boost frontline performance. Our platform delivers immersive step-by-step guidance directly where work happens."
/>

<Testimonials
	testimonials={[
		{
			name: "Marcus Hendrix",
			position: "Operations Manager",
			company: "Apex Automotive",
			quote:
				"Squint cut our new hire training from 6 weeks to 2 weeks. We're saving $180,000 annually just on training costs while our quality scores improved 23%.",
			image:
				"/generated/image-a-professional-male-operations-manager-w.webp"
		},
		{
			name: "Elena Vasquez",
			position: "Safety Director",
			company: "Meridian Energy",
			quote:
				"Safety incidents dropped 67% since implementing Squint. The real-time AR guidance prevents costly mistakes before they happen. Our insurance premiums went down $2.3M this year.",
			image:
				"/generated/image-a-professional-female-safety-director-we.webp"
		},
		{
			name: "Theo Nakamura",
			position: "Quality Control Manager",
			company: "Pacific Foods",
			quote:
				"Production line efficiency increased 31% with Squint's step-by-step procedures. We eliminated 94% of operator errors, saving us roughly $890,000 in waste and rework annually.",
			image:
				"/generated/image-a-professional-male-quality-control-mana.webp"
		}
	]}
/>

<Features
	title="Features"
	subtitle="Transform knowledge into action"
	features={[
		{
			title: "AI knowledge transformation",
			description:
				"Convert videos, PDFs, and spreadsheets into interactive AR procedures instantly."
		},
		{
			title: "Immersive spatial guidance",
			description:
				"Pin instructions to real-world locations for hands-free, step-by-step operator guidance."
		},
		{
			title: "Real-time AI assistance",
			description:
				"Operators ask questions and get instant access to relevant procedures and troubleshooting help."
		},
		{
			title: "Performance analytics",
			description:
				"Track operator behavior, identify knowledge gaps, and ensure procedure compliance."
		},
		{
			title: "Instant procedure creation",
			description:
				"Map any space in under 60 seconds without QR codes or complex hardware."
		},
		{
			title: "Enterprise-grade security",
			description:
				"SOC 2 Type II compliant with SSO, MFA, and secure audit trails."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "Streamline automotive assembly",
			description:
				"Transform complex assembly procedures into AR-guided workflows. Cut training time from weeks to days while reducing defects and improving quality scores.",
			image:
				"/generated/image-a-dynamic-scene-of-automotive-manufactur.webp",
			link: {
				href: "/use-cases/automotive-manufacturing",
				label: "Learn more"
			}
		},
		{
			title: "Standardize food production",
			description:
				"Convert safety protocols and production procedures into interactive guides. Ensure HACCP compliance while reducing operator errors and improving efficiency.",
			image:
				"/generated/image-a-vibrant-image-of-food-production-worke.webp",
			link: {
				href: "/use-cases/food-production",
				label: "Learn more"
			}
		},
		{
			title: "Enhance oil and gas operations",
			description:
				"Turn maintenance manuals and safety procedures into immersive AR instructions. Reduce incidents while ensuring regulatory compliance and operational excellence.",
			image:
				"/generated/image-a-busy-scene-of-oil-and-gas-workers-on-a.webp",
			link: {
				href: "/use-cases/oil-and-gas",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
	title="Capture it once. Standardize everywhere."
	subtitle="Time to act"
	description="Say goodbye to tribal knowledge that lives and dies in someone's head. With Squint, every factory floor, shift, and new hire gets up to speed—fast."
	imageSrc="/generated/image-a-cheerful-industrial-worker-wearing-saf.webp"
	callsToAction={[
		{
			href: "/demo",
			label: "Book your demo",
			variant: "primary"
		},
		{
			href: "/contact",
			label: "Talk to sales",
			variant: "secondary"
		}
	]}
/>
