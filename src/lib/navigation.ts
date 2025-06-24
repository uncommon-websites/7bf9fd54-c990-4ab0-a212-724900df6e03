/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Automotive Manufacturing",
				href: "/use-cases/automotive-manufacturing",
				image:
					"/generated/image-a-dynamic-scene-of-automotive-manufactur.webp",
				description:
					"Transform complex assembly procedures into AR-guided workflows. Cut training time from weeks to days while reducing defects and improving quality scores across manufacturing operations.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Food Production",
				href: "/use-cases/food-production",
				image:
					"/generated/image-a-vibrant-image-of-food-production-worke.webp",
				description:
					"Convert safety protocols and production procedures into interactive guides. Ensure HACCP compliance while reducing operator errors and improving efficiency in food processing facilities.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Oil and Gas",
				href: "/use-cases/oil-and-gas",
				image:
					"/generated/image-a-busy-scene-of-oil-and-gas-workers-on-a.webp",
				description:
					"Turn maintenance manuals and safety procedures into immersive AR instructions. Reduce incidents while ensuring regulatory compliance and operational excellence in energy operations.",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
