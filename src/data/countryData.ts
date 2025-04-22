import { v4 as uuidv4 } from 'uuid';

export const countryData = [
  {
    id: "usa",
    name: "United States",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1488721734694-94a4143993ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "The United States is a popular destination for international students, offering a wide range of academic programs and diverse cultural experiences.",
    fullDescription: "Studying in the United States offers a diverse range of opportunities, from top-ranked universities to vibrant cultural experiences. The U.S. higher education system is known for its flexibility and innovation, allowing students to tailor their studies to their interests and career goals. With a wide array of programs and a welcoming environment for international students, the U.S. remains a top choice for those seeking a world-class education.",
    educationSystem: "The U.S. boasts a comprehensive higher education system with a wide variety of institutions, from large public universities to small private colleges. Degrees are offered at the bachelor's, master's, and doctoral levels, with a strong emphasis on research and practical application.",
    studentLife: "Student life in the U.S. is vibrant and diverse, with numerous extracurricular activities, clubs, and organizations to get involved in. Campuses are often like small cities, offering a wide range of services and amenities to support students' academic and personal growth.",
    workOpportunities: "International students in the U.S. may have opportunities to work on-campus during their studies and may be eligible for off-campus work authorization through programs like Optional Practical Training (OPT) and Curricular Practical Training (CPT).",
    cost: "Tuition fees vary widely depending on the institution and program of study, but international students can expect to pay between $20,000 to $50,000 per year. Living expenses also vary but typically range from $10,000 to $20,000 per year.",
    tuitionDetails: "Tuition fees in the United States vary significantly based on the type of institution (public or private) and the level of study (undergraduate or graduate). Public universities generally offer lower tuition rates to in-state residents, while private universities tend to have higher tuition fees for all students, regardless of residency.",
    undergradCosts: "$25,000 - $50,000 per year",
    gradCosts: "$20,000 - $45,000 per year",
    livingCosts: "$12,000 - $25,000 per year",
    requirements: "International students typically need to provide academic transcripts, standardized test scores (such as TOEFL or IELTS for English proficiency), letters of recommendation, and a personal essay as part of their application.",
    requirementDetails: "To study in the United States, international students typically need to fulfill several requirements, including academic qualifications, English language proficiency, and financial resources. Admission requirements vary depending on the institution and program of study, so it's essential to research specific requirements for each university.",
    academicRequirements: "High school diploma or equivalent for undergraduate programs; Bachelor's degree for graduate programs.",
    languageRequirements: "TOEFL iBT score of 80 or higher; IELTS score of 6.5 or higher.",
    visaRequirements: "Student visa (F-1 visa) required; must provide proof of acceptance to a U.S. educational institution and demonstrate sufficient funds to cover tuition and living expenses.",
    universities: [
      {
        name: "Harvard University",
        location: "Cambridge, Massachusetts",
        ranking: "1",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Harvard_University_shield.svg/1200px-Harvard_University_shield.svg.png",
        programs: ["Law", "Business", "Medicine", "Engineering"],
        website: "https://www.harvard.edu/"
      },
      {
        name: "Stanford University",
        location: "Stanford, California",
        ranking: "3",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Stanford_University_seal.svg/1200px-Stanford_University_seal.svg.png",
        programs: ["Engineering", "Computer Science", "Business", "Law"],
        website: "https://www.stanford.edu/"
      },
      {
        name: "Massachusetts Institute of Technology (MIT)",
        location: "Cambridge, Massachusetts",
        ranking: "2",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/MIT_logo.svg/1200px-MIT_logo.svg.png",
        programs: ["Engineering", "Computer Science", "Physics", "Mathematics"],
        website: "https://web.mit.edu/"
      }
    ]
  },
  {
    id: "uk",
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1505778221680-49994792939c?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1559548334-790472ff2b4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "The United Kingdom is a hub of academic excellence, offering a rich history, diverse culture, and world-renowned universities.",
    fullDescription: "Studying in the United Kingdom provides a unique blend of tradition and innovation, with prestigious universities and a vibrant cultural scene. The UK's higher education system is known for its rigorous academic standards and research-intensive environment, attracting students from around the globe. With a wide range of programs and a welcoming atmosphere, the UK offers an enriching experience for international students.",
    educationSystem: "The UK's higher education system is renowned for its quality and tradition, with universities offering a wide range of undergraduate and postgraduate programs. Degrees are typically shorter in duration compared to other countries, allowing students to complete their studies more quickly.",
    studentLife: "Student life in the UK is diverse and exciting, with a wide range of social and cultural activities to enjoy. From historic cities to scenic countryside, the UK offers something for everyone. University campuses are often hubs of activity, with clubs, societies, and events catering to a wide range of interests.",
    workOpportunities: "International students in the UK may be eligible to work part-time during their studies and may have opportunities to work full-time after graduation through programs like the Graduate Route visa.",
    cost: "Tuition fees for international students range from £10,000 to £30,000 per year, depending on the institution and program of study. Living expenses typically range from £8,000 to £15,000 per year.",
    tuitionDetails: "Tuition fees in the United Kingdom vary depending on the university and the program of study. Generally, international students can expect to pay higher tuition fees compared to domestic students. Tuition fees for undergraduate programs typically range from £10,000 to £25,000 per year, while postgraduate programs may cost between £12,000 and £35,000 per year.",
    undergradCosts: "£12,000 - £25,000 per year",
    gradCosts: "£15,000 - £30,000 per year",
    livingCosts: "£10,000 - £18,000 per year",
    requirements: "International students typically need to provide academic transcripts, English language proficiency test scores (such as IELTS), letters of recommendation, and a personal statement as part of their application.",
    requirementDetails: "To study in the United Kingdom, international students typically need to meet certain academic and English language requirements. Admission requirements vary depending on the university and program of study, so it's essential to check the specific requirements for each institution.",
    academicRequirements: "A-levels or equivalent for undergraduate programs; Bachelor's degree for postgraduate programs.",
    languageRequirements: "IELTS score of 6.5 or higher.",
    visaRequirements: "Student visa (Tier 4 visa) required; must provide proof of acceptance to a UK educational institution and demonstrate sufficient funds to cover tuition and living expenses.",
    universities: [
      {
        name: "University of Oxford",
        location: "Oxford",
        ranking: "2",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/University_of_Oxford_crest.svg/1200px-University_of_Oxford_crest.svg.png",
        programs: ["Humanities", "Sciences", "Medicine", "Engineering"],
        website: "https://www.ox.ac.uk/"
      },
      {
        name: "University of Cambridge",
        location: "Cambridge",
        ranking: "4",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cambridge_University_coat_of_arms.svg/1200px-Cambridge_University_coat_of_arms.svg.png",
        programs: ["Arts", "Sciences", "Engineering", "Education"],
        website: "https://www.cam.ac.uk/"
      },
      {
        name: "Imperial College London",
        location: "London",
        ranking: "6",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Imperial_College_London_logo.svg/1200px-Imperial_College_London_logo.svg.png",
        programs: ["Engineering", "Natural Sciences", "Medicine", "Business"],
        website: "https://www.imperial.ac.uk/"
      }
    ]
  },
  {
    id: "canada",
    name: "Canada",
    image: "https://images.unsplash.com/photo-1549872960-954811ca04b9?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Canada offers a high quality of life, affordable education, and a welcoming multicultural environment for international students.",
    fullDescription: "Studying in Canada provides a unique opportunity to experience a diverse and welcoming culture, combined with world-class education. Canada's universities and colleges offer a wide range of programs, with a strong emphasis on research and innovation. With affordable tuition fees and a high quality of life, Canada is an attractive destination for international students seeking a well-rounded educational experience.",
    educationSystem: "Canada's education system is known for its quality and accessibility, with universities and colleges offering a wide range of programs at the undergraduate and postgraduate levels. Degrees are recognized internationally, and institutions emphasize research and innovation.",
    studentLife: "Student life in Canada is vibrant and inclusive, with a wide range of activities and events to participate in. From outdoor adventures to cultural festivals, there's always something to do. University campuses are often hubs of activity, with clubs, societies, and sports teams catering to diverse interests.",
    workOpportunities: "International students in Canada may be eligible to work part-time during their studies and may have opportunities to work full-time after graduation through programs like the Post-Graduation Work Permit Program.",
    cost: "Tuition fees for international students range from CAD 20,000 to CAD 40,000 per year, depending on the institution and program of study. Living expenses typically range from CAD 10,000 to CAD 15,000 per year.",
    tuitionDetails: "Tuition fees in Canada vary depending on the province, institution, and program of study. International students generally pay higher tuition fees compared to domestic students. Tuition fees for undergraduate programs typically range from CAD 20,000 to CAD 35,000 per year, while postgraduate programs may cost between CAD 15,000 and CAD 45,000 per year.",
    undergradCosts: "CAD 20,000 - CAD 35,000 per year",
    gradCosts: "CAD 15,000 - CAD 45,000 per year",
    livingCosts: "CAD 12,000 - CAD 20,000 per year",
    requirements: "International students typically need to provide academic transcripts, English or French language proficiency test scores, letters of recommendation, and a statement of purpose as part of their application.",
    requirementDetails: "To study in Canada, international students typically need to meet certain academic and language requirements. Admission requirements vary depending on the institution and program of study, so it's essential to check the specific requirements for each university or college.",
    academicRequirements: "High school diploma or equivalent for undergraduate programs; Bachelor's degree for postgraduate programs.",
    languageRequirements: "IELTS score of 6.5 or higher; TOEFL iBT score of 80 or higher; French proficiency test (if studying in Quebec).",
    visaRequirements: "Study permit required; must provide proof of acceptance to a Canadian educational institution and demonstrate sufficient funds to cover tuition and living expenses.",
    universities: [
      {
        name: "University of Toronto",
        location: "Toronto, Ontario",
        ranking: "21",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/U_of_T_CoA.svg/1200px-U_of_T_CoA.svg.png",
        programs: ["Medicine", "Engineering", "Business", "Arts"],
        website: "https://www.utoronto.ca/"
      },
      {
        name: "McGill University",
        location: "Montreal, Quebec",
        ranking: "30",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png",
        programs: ["Medicine", "Law", "Engineering", "Science"],
        website: "https://www.mcgill.ca/"
      },
      {
        name: "University of British Columbia",
        location: "Vancouver, British Columbia",
        ranking: "46",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/UBC_coat_of_arms.svg/1200px-UBC_coat_of_arms.svg.png",
        programs: ["Forestry", "Business", "Engineering", "Arts"],
        website: "https://www.ubc.ca/"
      }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    image: "https://images.unsplash.com/photo-1542445284-c9349152f096?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1566839437715-489324bb5f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Australia offers a unique blend of high-quality education, stunning natural landscapes, and a relaxed lifestyle for international students.",
    fullDescription: "Studying in Australia provides a unique opportunity to experience a vibrant and multicultural society, combined with world-class education. Australia's universities offer a wide range of programs, with a strong emphasis on research and innovation. With a high quality of life and a welcoming atmosphere, Australia is an attractive destination for international students seeking a global education.",
    educationSystem: "Australia's education system is known for its quality and innovation, with universities offering a wide range of programs at the undergraduate and postgraduate levels. Degrees are recognized internationally, and institutions emphasize research and practical skills.",
    studentLife: "Student life in Australia is diverse and exciting, with a wide range of activities and events to participate in. From exploring the Outback to surfing on world-famous beaches, there's always something to do. University campuses are often hubs of activity, with clubs, societies, and sports teams catering to diverse interests.",
    workOpportunities: "International students in Australia may be eligible to work part-time during their studies and may have opportunities to work full-time after graduation through programs like the Temporary Graduate visa.",
    cost: "Tuition fees for international students range from AUD 25,000 to AUD 45,000 per year, depending on the institution and program of study. Living expenses typically range from AUD 15,000 to AUD 25,000 per year.",
    tuitionDetails: "Tuition fees in Australia vary depending on the university and the program of study. International students generally pay higher tuition fees compared to domestic students. Tuition fees for undergraduate programs typically range from AUD 25,000 to AUD 45,000 per year, while postgraduate programs may cost between AUD 22,000 and AUD 50,000 per year.",
    undergradCosts: "AUD 25,000 - AUD 45,000 per year",
    gradCosts: "AUD 22,000 - AUD 50,000 per year",
    livingCosts: "AUD 18,000 - AUD 27,000 per year",
    requirements: "International students typically need to provide academic transcripts, English language proficiency test scores (such as IELTS or TOEFL), letters of recommendation, and a personal statement as part of their application.",
    requirementDetails: "To study in Australia, international students typically need to meet certain academic and English language requirements. Admission requirements vary depending on the university and program of study, so it's essential to check the specific requirements for each institution.",
    academicRequirements: "Australian Year 12 or equivalent for undergraduate programs; Bachelor's degree for postgraduate programs.",
    languageRequirements: "IELTS score of 6.5 or higher; TOEFL iBT score of 79 or higher.",
    visaRequirements: "Student visa (subclass 500) required; must provide proof of acceptance to an Australian educational institution and demonstrate sufficient funds to cover tuition and living expenses.",
    universities: [
      {
        name: "University of Melbourne",
        location: "Melbourne, Victoria",
        ranking: "33",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Unimelb_logo.svg/1200px-Unimelb_logo.svg.png",
        programs: ["Law", "Medicine", "Engineering", "Business"],
        website: "https://www.unimelb.edu.au/"
      },
      {
        name: "Australian National University",
        location: "Canberra, ACT",
        ranking: "34",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Australian_National_University_logo.svg/1200px-Australian_National_University_logo.svg.png",
        programs: ["Political Science", "Economics", "Science", "Arts"],
        website: "https://www.anu.edu.au/"
      },
      {
        name: "University of Sydney",
        location: "Sydney, New South Wales",
        ranking: "19",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/University_of_Sydney_Coat_of_Arms.svg/1200px-University_of_Sydney_Coat_of_Arms.svg.png",
        programs: ["Law", "Architecture", "Engineering", "Medicine"],
        website: "https://www.sydney.edu.au/"
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1609544863749-991e49c7f60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Germany offers high-quality education, particularly in engineering and sciences, with many programs available in English and affordable tuition fees.",
    fullDescription: "Studying in Germany provides a unique opportunity to experience a rich cultural heritage, combined with world-class education. Germany's universities offer a wide range of programs, with a strong emphasis on research and innovation. With affordable tuition fees and a high quality of life, Germany is an attractive destination for international students seeking a global education.",
    educationSystem: "Germany's higher education system is known for its quality and accessibility, with universities offering a wide range of programs at the undergraduate and postgraduate levels. Many programs are taught in English, making it easier for international students to study in Germany.",
    studentLife: "Student life in Germany is diverse and exciting, with a wide range of activities and events to participate in. From exploring historic cities to hiking in the Alps, there's always something to do. University campuses are often hubs of activity, with clubs, societies, and sports teams catering to diverse interests.",
    workOpportunities: "International students in Germany may be eligible to work part-time during their studies and may have opportunities to work full-time after graduation through programs like the EU Blue Card.",
    cost: "Tuition fees at public universities are generally low, with some universities charging no tuition fees for international students. Living expenses typically range from EUR 800 to EUR 1,200 per month.",
    tuitionDetails: "Tuition fees at public universities in Germany are generally low, with some universities charging no tuition fees for undergraduate and postgraduate programs. However, some federal states may charge tuition fees for non-EU students. Private universities typically have higher tuition fees.",
    undergradCosts: "EUR 0 - EUR 5,000 per year (at public universities)",
    gradCosts: "EUR 0 - EUR 5,000 per year (at public universities)",
    livingCosts: "EUR 900 - EUR 1,500 per month",
    requirements: "International students typically need to provide academic transcripts, English or German language proficiency test scores, letters of recommendation, and a statement of purpose as part of their application.",
    requirementDetails: "To study in Germany, international students typically need to meet certain academic and language requirements. Admission requirements vary depending on the university and program of study, so it's essential to check the specific requirements for each institution.",
    academicRequirements: "High school diploma or equivalent for undergraduate programs; Bachelor's degree for postgraduate programs.",
    languageRequirements: "German language proficiency test (DSH or TestDaF) or English language proficiency test (IELTS or TOEFL).",
    visaRequirements: "Student visa required; must provide proof of acceptance to a German educational institution and demonstrate sufficient funds to cover tuition and living expenses.",
    universities: [
      {
        name: "Technical University of Munich",
        location: "Munich",
        ranking: "37",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Technische_Universit%C3%A4t_M%C3%BCnchen_logo.svg/1200px-Technische_Universit%C3%A4t_M%C3%BCnchen_logo.svg.png",
        programs: ["Engineering", "Natural Sciences", "Computer Science", "Management"],
        website: "https://www.tum.de/en/"
      },
      {
        name: "Ludwig Maximilian University of Munich",
        location: "Munich",
        ranking: "54",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/LMU_Muenchen_Logo.svg/1200px-LMU_Muenchen_Logo.svg.png",
        programs: ["Humanities", "Law", "Business", "Medicine"],
        website: "https://www.lmu.de/en/index.html"
      },
      {
        name: "Heidelberg University",
        location: "Heidelberg",
        ranking: "65",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Siegel_der_Universit%C3%A4t_Heidelberg.svg/1200px-Siegel_der_Universit%C3%A4t_Heidelberg.svg.png",
        programs: ["Law", "Medicine", "Natural Sciences", "Humanities"],
        website: "https://www.uni-heidelberg.de/en"
      }
    ]
  }
];
