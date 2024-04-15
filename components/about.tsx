import Introduction from './Introduction';
import MarqueeSection from './marquee-section';
import Wrapper from './wrapper';

export default function About() {
	return (
		<div id='about'>
			<MarqueeSection>About Me</MarqueeSection>
			<Wrapper>
				<div>
					{/* <h3 className='font-bold mb-4 uppercase text-4xl mt-10 font-secondary'>
						About me
					</h3>
					<p className=' text-muted-foreground '>
						{
							"👋 Hey there! I'm Karrouach Ansar, a Full Stack Web Developer based in Morocco. I specialize in crafting dynamic web applications using Next.js. With 4+ years of experience in MongoDB, Express.js, React, and Node.js, along with proficiency in TypeScript, I'm passionate about crafting visually stunning designs and seamless digital solutions. I love creating exceptional online experiences that effectively communicate brand messages to audiences. Let's connect and explore exciting web development possibilities together!"
						}
					</p> */}
					<Introduction value="Hey there! I'm Karrouach Ansar, a Full Stack Web Developer based in Morocco. I specialize in crafting dynamic web applications using Next.js. With 4+ years of experience in MongoDB, Express.js, React, and Node.js, along with proficiency in TypeScript, I'm passionate about crafting visually stunning designs and seamless digital solutions. I love creating exceptional online experiences that effectively communicate brand messages to audiences. Let's connect and explore exciting web development possibilities together!" />
				</div>
				<div>
					<h3 className='font-bold uppercase text-4xl mt-10 font-secondary'>
						Experience
					</h3>
					{EXPERIENCE.map((e) => (
						<ExperienceCard {...e} key={e.company} />
					))}
				</div>

				<div>
					<h3 className='font-bold uppercase text-4xl mt-10 font-secondary'>
						Education
					</h3>
					{EDUCATION.map((e) => (
						<EducationCard {...e} key={e.school} />
					))}
				</div>
			</Wrapper>
		</div>
	);
}

const EDUCATION = [
	{
		school: 'Faculty of Sciences Semlalia',
		type: 'Professional License, Web Technologies and Programming',
		location: 'Marrakech, Morroco',
		year: '2023',
	},
	{
		school: 'Advanced Vocational Diploma (BTS)',
		type: 'BAC + 2, Web Development',
		location: 'Settat, Morroco',
		year: '2020 . 2022',
	},
];

const EXPERIENCE = [
	{
		company: 'Peaqock',
		role: 'Front End Developer Intern',
		year: 'Sep - Oct 2023',
	},
	{
		company: 'Njt Group',
		role: 'Mern Stack Developer Intern',
		year: 'Apl - Jun 2023',
	},
	{
		company: 'IFAAP',
		role: 'Full Stack Developer Intern',
		year: 'May - Jun 2022',
	},
];

function ExperienceCard({
	company,
	role,
	year,
}: {
	company: string;
	role: string;
	year: string;
}) {
	return (
		<div className='sm:flex justify-between items-center py-8 border-b border-border '>
			<div>
				<h2>{company}</h2>
				<h3 className='text-muted-foreground text-[15px]'>{role}</h3>
			</div>
			<p className='text-muted-foreground text-sm'>{year}</p>
		</div>
	);
}
function EducationCard({
	location,
	school,
	type,
	year,
}: {
	school: string;
	type: string;
	location: string;
	year: string;
}) {
	return (
		<div className='sm:flex justify-between items-center py-8 border-b border-border gap-2'>
			<div className=''>
				<h2>{school}</h2>
				<h3 className='text-muted-foreground text-sm my-1'>{type}</h3>
				<h6 className='text-[13px] text-muted-foreground mb-1 '>{location}</h6>
			</div>
			<p className='text-muted-foreground text-sm'>{year}</p>
		</div>
	);
}
