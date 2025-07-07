const legal = {
	privacy: {
		meta: {
			title: "Privacy Policy",
			description:
				"Learn how Squint collects, uses, and protects your personal information in our AI-powered AR training platform."
		},
		content: {
			lastUpdated: new Date().toISOString(),
			sections: [
				{
					title: "Introduction",
					body: "At Squint, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our AI-powered augmented reality training platform and visit our website. We are dedicated to maintaining the highest standards of data protection while delivering innovative industrial training solutions."
				},
				{
					title: "Information We Collect",
					body: "We collect information necessary to provide our AR training platform and services, including: Identity information (name, job title, company), Contact details (email, phone number), Technical data (device information, IP address, browser type), Usage data (how you interact with our platform), Training data (progress, completion rates, performance metrics), and Spatial data (when using AR features for training purposes)."
				},
				{
					title: "How We Use Your Information",
					body: "We use your personal data to deliver and improve our AI-powered training platform, including: providing personalized AR training experiences, analyzing training effectiveness and progress, improving our AI algorithms and platform features, communicating about your training programs and platform updates, ensuring platform security and preventing unauthorized access, and complying with legal and regulatory requirements in industrial training environments."
				},
				{
					title: "Data Security and AR Privacy",
					body: "We implement enterprise-grade security measures to protect your data, including encryption of data in transit and at rest, secure cloud infrastructure with regular security audits, access controls and authentication protocols, and privacy-by-design principles in our AR technology. Spatial data collected during AR training sessions is processed locally when possible and encrypted when transmitted to our servers."
				},
				{
					title: "Data Sharing and Third Parties",
					body: "We do not sell your personal data. We may share information with trusted service providers who help us operate our platform, comply with legal obligations, or with your explicit consent. All third-party partners are bound by strict confidentiality agreements and data protection standards that meet or exceed our own requirements."
				},
				{
					title: "Your Rights and Choices",
					body: "You have comprehensive rights regarding your personal data, including: accessing your personal information and training data, correcting inaccurate or incomplete data, requesting deletion of your data (subject to legal requirements), objecting to certain processing activities, restricting how we process your data, and requesting data portability. You can also control AR data collection settings within our platform."
				},
				{
					title: "Contact Us",
					body: "If you have questions about this privacy policy or how we handle your data, please contact our privacy team at privacy@squint.ai. For general inquiries about our AI-powered AR training platform, you can reach us through our website contact form or support channels."
				}
			]
		}
	},
	terms: {
		meta: {
			title: "Terms of Service",
			description: "Our terms of service outline the rules and regulations for using our website."
		},
		content: {
			lastUpdated: new Date().toISOString(),
			sections: [
				{
					title: "Acceptance of Terms",
					body: "By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site."
				},
				{
					title: "Use License",
					body: "Permission is granted to temporarily download one copy of materials for personal, non-commercial viewing only. This license shall automatically terminate if you violate any of these restrictions."
				},
				{
					title: "Disclaimer",
					body: "The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including implied warranties of merchantability or fitness for a particular purpose."
				},
				{
					title: "Limitations",
					body: "In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on our website."
				},
				{
					title: "Revisions",
					body: "We may revise these terms at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Service."
				},
				{
					title: "Governing Law",
					body: "These terms shall be governed by and construed in accordance with the laws, and you submit to the exclusive jurisdiction of the courts in that location."
				}
			]
		}
	}
};

// Types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const { type } = params as { type: keyof typeof legal };
	const content = legal[type];

	return content;
};
