
interface University {
  name: string;
  location: string;
  programs: string[];
  ranking: string;
  website: string;
}

export interface CountryDataType {
  id: string;
  name: string;
  image: string;
  heroImage?: string;
  description: string;
  fullDescription?: string;
  universities: University[];
  cost: string;
  requirements: string;
  educationSystem: string;
  studentLife: string;
  workOpportunities: string;
  tuitionDetails?: string;
  undergradCosts: string;
  gradCosts: string;
  livingCosts: string;
  requirementDetails?: string;
  academicRequirements: string;
  languageRequirements: string;
  visaRequirements: string;
}

export const countryData: CountryDataType[] = [
  {
    id: "usa",
    name: "USA",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    heroImage: "https://images.unsplash.com/photo-1501466044931-62695aada3e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    description: "Home to the world's top universities with diverse programs and vibrant campus life.",
    fullDescription: "The United States hosts the largest number of international students in the world. With a diverse range of institutions and programs, a degree from a US university is highly valued globally. American education emphasizes critical thinking, research, and practical skills. Students enjoy a vibrant campus life with numerous extracurricular activities, sports, and cultural events.",
    universities: [
      {
        name: "Harvard University",
        location: "Cambridge, Massachusetts",
        programs: ["Business", "Law", "Medicine", "Engineering"],
        ranking: "Top 5 globally",
        website: "https://www.harvard.edu/"
      },
      {
        name: "Massachusetts Institute of Technology (MIT)",
        location: "Cambridge, Massachusetts",
        programs: ["Engineering", "Computer Science", "Business", "Sciences"],
        ranking: "Top 5 globally",
        website: "https://www.mit.edu/"
      },
      {
        name: "Stanford University",
        location: "Stanford, California",
        programs: ["Engineering", "Business", "Sciences", "Humanities"],
        ranking: "Top 5 globally",
        website: "https://www.stanford.edu/"
      },
      {
        name: "University of California, Berkeley",
        location: "Berkeley, California",
        programs: ["Engineering", "Sciences", "Business", "Arts"],
        ranking: "Top 30 globally",
        website: "https://www.berkeley.edu/"
      },
      {
        name: "Columbia University",
        location: "New York City, New York",
        programs: ["Arts", "Journalism", "Business", "International Relations"],
        ranking: "Top 20 globally",
        website: "https://www.columbia.edu/"
      },
      {
        name: "University of Michigan",
        location: "Ann Arbor, Michigan",
        programs: ["Business", "Engineering", "Medical Sciences", "Arts"],
        ranking: "Top 50 globally",
        website: "https://umich.edu/"
      }
    ],
    cost: "$20,000 - $60,000 per year",
    requirements: "SAT/ACT, TOEFL/IELTS, GPA 3.0+",
    educationSystem: "US education emphasizes critical thinking, research, and flexible curricula with major/minor options. Four-year undergraduate programs and various graduate degrees are available.",
    studentLife: "Vibrant campus culture with diverse clubs, sports, events, and strong alumni networks. Many universities offer on-campus housing with meal plans.",
    workOpportunities: "Students can work up to 20 hours per week on campus during studies. Optional Practical Training (OPT) allows for 12-36 months of work experience after graduation.",
    undergradCosts: "$20,000 - $50,000 per year for tuition at private universities; $10,000 - $25,000 for public universities (out-of-state)",
    gradCosts: "$20,000 - $60,000 per year depending on the program and university",
    livingCosts: "$10,000 - $20,000 per year depending on location",
    academicRequirements: "High school diploma or equivalent, GPA 3.0+, SAT/ACT scores (some universities are now test-optional)",
    languageRequirements: "TOEFL (80-100 iBT) or IELTS (6.5-7.0) for non-native English speakers",
    visaRequirements: "F-1 student visa requires admission letter, proof of financial support, and successful visa interview"
  },
  {
    id: "australia",
    name: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    description: "Quality education with work opportunities in a multicultural, safe environment.",
    fullDescription: "Australia offers a world-class education system with innovative teaching methods and cutting-edge facilities. The country's relaxed lifestyle, diverse culture, and stunning natural landscapes make it an attractive destination for international students. Australian universities are known for their research opportunities and practical approach to learning.",
    universities: [
      {
        name: "University of Melbourne",
        location: "Melbourne, Victoria",
        programs: ["Medicine", "Law", "Engineering", "Arts"],
        ranking: "Top 50 globally",
        website: "https://www.unimelb.edu.au/"
      },
      {
        name: "University of Sydney",
        location: "Sydney, New South Wales",
        programs: ["Business", "Engineering", "Health Sciences", "Arts"],
        ranking: "Top 50 globally",
        website: "https://www.sydney.edu.au/"
      },
      {
        name: "Australian National University",
        location: "Canberra, ACT",
        programs: ["Politics", "International Relations", "Sciences", "Law"],
        ranking: "Top 50 globally",
        website: "https://www.anu.edu.au/"
      },
      {
        name: "University of Queensland",
        location: "Brisbane, Queensland",
        programs: ["Environmental Sciences", "Health Sciences", "Business", "Engineering"],
        ranking: "Top 100 globally",
        website: "https://www.uq.edu.au/"
      },
      {
        name: "Monash University",
        location: "Melbourne, Victoria",
        programs: ["Business", "Engineering", "Medicine", "Arts"],
        ranking: "Top 100 globally",
        website: "https://www.monash.edu/"
      }
    ],
    cost: "AUD 20,000 - 45,000 per year",
    requirements: "IELTS 6.0+, strong academics",
    educationSystem: "Australian education follows the British model with a focus on research and practical skills. Three-year bachelor's degrees and various postgraduate options are available.",
    studentLife: "Relaxed lifestyle with emphasis on outdoor activities. Major cities offer diverse cultural experiences and many international student communities.",
    workOpportunities: "Students can work up to 20 hours per week during term and full-time during holidays. Post-study work visas allow for 2-4 years of work after graduation.",
    undergradCosts: "AUD 20,000 - 45,000 per year for tuition",
    gradCosts: "AUD 22,000 - 50,000 per year depending on the program",
    livingCosts: "AUD 20,000 - 25,000 per year depending on location",
    academicRequirements: "Completed high school with strong grades, foundation courses available for those who don't meet direct entry requirements",
    languageRequirements: "IELTS 6.0-7.0 overall (with no band less than 6.0) or equivalent TOEFL scores",
    visaRequirements: "Student visa (subclass 500) requires admission letter, Genuine Temporary Entrant (GTE) statement, health insurance, and proof of financial capacity"
  },
  {
    id: "uk",
    name: "UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    heroImage: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    description: "Prestigious education with shorter programs and rich cultural heritage.",
    fullDescription: "The United Kingdom offers prestigious education with a long history of academic excellence. UK degrees are highly respected worldwide and typically shorter than in other countries, making them a cost-effective option. The UK's rich cultural heritage, diverse cities, and proximity to Europe make it an enriching environment for international students.",
    universities: [
      {
        name: "University of Oxford",
        location: "Oxford, England",
        programs: ["Humanities", "Sciences", "Social Sciences", "Medicine"],
        ranking: "Top 10 globally",
        website: "https://www.ox.ac.uk/"
      },
      {
        name: "University of Cambridge",
        location: "Cambridge, England",
        programs: ["Mathematics", "Sciences", "Engineering", "Humanities"],
        ranking: "Top 10 globally",
        website: "https://www.cam.ac.uk/"
      },
      {
        name: "Imperial College London",
        location: "London, England",
        programs: ["Engineering", "Medicine", "Sciences", "Business"],
        ranking: "Top 20 globally",
        website: "https://www.imperial.ac.uk/"
      },
      {
        name: "London School of Economics",
        location: "London, England",
        programs: ["Economics", "Politics", "Law", "Business"],
        ranking: "Top 50 globally",
        website: "https://www.lse.ac.uk/"
      },
      {
        name: "University of Edinburgh",
        location: "Edinburgh, Scotland",
        programs: ["Arts", "Sciences", "Medicine", "Engineering"],
        ranking: "Top 30 globally",
        website: "https://www.ed.ac.uk/"
      },
      {
        name: "University of Manchester",
        location: "Manchester, England",
        programs: ["Business", "Engineering", "Social Sciences", "Humanities"],
        ranking: "Top 50 globally",
        website: "https://www.manchester.ac.uk/"
      }
    ],
    cost: "£10,000 - £38,000 per year",
    requirements: "IELTS 6.5+, strong academic background",
    educationSystem: "Known for its traditional academic approach and specialization. Three-year bachelor's degrees (four in Scotland) and intensive one-year master's programs.",
    studentLife: "Rich cultural experiences in historic cities. Vibrant student unions offer numerous societies and activities. Strong international student support services.",
    workOpportunities: "Students can work up to 20 hours per week during term and full-time during holidays. Graduate Route visa allows for 2 years of work after graduation (3 for PhD).",
    undergradCosts: "£10,000 - £26,000 per year for tuition (higher for medical and clinical programs)",
    gradCosts: "£12,000 - £38,000 per year depending on the program",
    livingCosts: "£12,000 - £15,000 per year in most cities; higher in London",
    academicRequirements: "Strong high school qualifications (A-levels or equivalent), personal statement, and academic references",
    languageRequirements: "IELTS 6.5-7.0 overall (with no band less than 6.0-6.5) or equivalent TOEFL scores",
    visaRequirements: "Student visa requires CAS from university, proof of funds for tuition and living costs, and payment of Immigration Health Surcharge"
  },
  {
    id: "canada",
    name: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    heroImage: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    description: "High-quality education with post-study work permits and pathway to residency.",
    fullDescription: "Canada offers a high-quality education system with affordable tuition compared to other English-speaking countries. The country is known for its safe, multicultural environment and welcoming immigration policies. Canadian education emphasizes research and practical experience, with strong connections to industry.",
    universities: [
      {
        name: "University of Toronto",
        location: "Toronto, Ontario",
        programs: ["Business", "Medicine", "Engineering", "Arts"],
        ranking: "Top 30 globally",
        website: "https://www.utoronto.ca/"
      },
      {
        name: "University of British Columbia",
        location: "Vancouver, British Columbia",
        programs: ["Sciences", "Business", "Environmental Studies", "Arts"],
        ranking: "Top 50 globally",
        website: "https://www.ubc.ca/"
      },
      {
        name: "McGill University",
        location: "Montreal, Quebec",
        programs: ["Medicine", "Law", "Engineering", "Arts"],
        ranking: "Top 50 globally",
        website: "https://www.mcgill.ca/"
      },
      {
        name: "University of Alberta",
        location: "Edmonton, Alberta",
        programs: ["Engineering", "Sciences", "Business", "Health Sciences"],
        ranking: "Top 150 globally",
        website: "https://www.ualberta.ca/"
      },
      {
        name: "University of Waterloo",
        location: "Waterloo, Ontario",
        programs: ["Computer Science", "Engineering", "Mathematics", "Environmental Studies"],
        ranking: "Top 200 globally",
        website: "https://uwaterloo.ca/"
      }
    ],
    cost: "CAD 15,000 - 35,000 per year",
    requirements: "IELTS 6.0+, strong academics",
    educationSystem: "Combines British and American influences with focus on research and practical skills. Four-year bachelor's degrees and various graduate programs available.",
    studentLife: "Safe, multicultural environment with access to stunning natural landscapes. Strong international student communities with comprehensive support services.",
    workOpportunities: "Students can work up to 20 hours per week during term and full-time during holidays. Post-graduation work permit allows for up to 3 years of work experience after studies.",
    undergradCosts: "CAD 15,000 - 30,000 per year for tuition",
    gradCosts: "CAD 15,000 - 35,000 per year depending on the program",
    livingCosts: "CAD 10,000 - 15,000 per year depending on location",
    academicRequirements: "Completed high school with strong grades, specific prerequisites for certain programs",
    languageRequirements: "IELTS 6.0-6.5 overall (with no band less than 6.0) or equivalent TOEFL scores",
    visaRequirements: "Study permit requires acceptance letter, proof of funds for tuition and living expenses, and clean criminal record"
  }
];
