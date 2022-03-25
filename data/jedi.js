import React from "react";
import ao3 from "../public/images/jedi/allyship/ao3.png";
import cisgenderPrivilege from "../public/images/jedi/allyship/cisgender-privilege.png";
import disabilityAccessibility from "../public/images/jedi/allyship/disability-accessibility.jpg";
import dontGiveThemTheAux from "../public/images/jedi/allyship/dont-give-them-the-aux.png";
import healthyLiving from "../public/images/jedi/allyship/healthy-living.png";
import housingCrisisTechHubs from "../public/images/jedi/allyship/housing-crisis-tech-hubs.png";
import makingSchoolAChoice from "../public/images/jedi/allyship/making-school-a-choice.png";
import ocdAdhd from "../public/images/jedi/allyship/ocd-adhd.png";
import qtCS from "../public/images/jedi/allyship/qt-cs.png";
import responsibleAllyship from "../public/images/jedi/allyship/responsible-allyship.png";
import selfCare from "../public/images/jedi/allyship/self-care.png";

const allyshipSpaces = [
  {
    title: "Asian representation and the otherization of kpop",
    presenters: "Christine Kim, Jiin Kim, Helia Woo",
    date: "June 4, 2021",
    location: "Online",
    description:
      "An allyship space on Western perception of kpop and other Asian media, including fetishization and otherization.",
    slides:
      "https://drive.google.com/drive/folders/16Jk212gr2jC4xJbKEkFVxwdukwF902-o",
    pic: dontGiveThemTheAux,
    alt: "a slide titled \"don't give them the aux, they're going to play kpop: asian representation and the otherization of kpop. features four prominent female Kpop idols.",
  },
  {
    title: "Cisgender privilege",
    presenters: "Christine Kim",
    date: "May 14, 2021",
    location: "Online",
    description:
      "An allyship space on the manifestation and perpetuation of cisgender privilege.",
    slides:
      "https://drive.google.com/file/d/1m_224Uf6mj6AdYZGglnhiXgE-Mq2uJyL/view?usp=sharing",
    pic: cisgenderPrivilege,
    alt: 'a slide deck titled "Cisgender Privilege", with the date and time as Friday May 14th, 6:15 - 6:45 PM PDT. features an abstract sphere and ribbon.',
  },
  {
    title: "Responsible allyship",
    presenters: "Christine Kim",
    date: "April 30, 2021",
    location: "Online",
    description: "An allyship space on demonstrating responsible allyship.",
    slides:
      "https://drive.google.com/file/d/1Vs6yfcnRI-0HIuHa7VSalkHMGR_mwwld/view?usp=sharing",
    pic: responsibleAllyship,
    alt: 'a slide deck that says "a teach la allyship space: responsible allyship" with abstract shapes as the background',
  },
  {
    title: "The housing crisis in tech hubs",
    presenters: "Kristie Lim, Megan Pham",
    date: "February 26, 2021",
    location: "Online",
    description:
      "An allyship space on housing insecurity within tech hubs, and potential solutions.",
    slides:
      "https://drive.google.com/file/d/1p6ebnqTLtXOtgJgK_Ed9emhJVeIadSye/view?usp=sharing",
    pic: housingCrisisTechHubs,
    alt: 'a slide titled "the housing crisis in tech hubs: kristie lim and megan pham", with a house and some trees',
  },
  {
    title: "AO3: A brief introduction",
    presenters: "Ellie Cheng",
    date: "February 5, 2021",
    location: "Online",
    description:
      "An allyship space on AO3 (Archive of Our Own) and fanfiction as a safe space.",
    slides:
      "https://drive.google.com/file/d/1eV0zbnuLzySXRlfESDiH6xucTsKTHQ7W/view?usp=sharing",
    pic: ao3,
    alt: 'a simple slide with the title "AO3: a brief introduction"',
  },
  {
    title: "Self-care",
    presenters: "Megha Ilango",
    date: "January 29, 2021",
    location: "Online",
    description:
      "An allyship space on physical forms of self-care and how to practice it.",
    slides:
      "https://drive.google.com/file/d/1eV0zbnuLzySXRlfESDiH6xucTsKTHQ7W/view?usp=sharing",
    pic: selfCare,
    alt: 'a slide deck that says "self-care, an allyship space by megha!" with a caption "give yourself the same care and attention that you give to others and watch yourself bloom"',
  },
  {
    title: "Queer + trans representation in computer science",
    presenters: "Arjun Subramonian, Sharvani Jha",
    date: "January 22, 2021",
    location: "Online",
    description:
      "An allyship space on gender, intersectionality, and the importance of representation in tech.",
    slides:
      "https://drive.google.com/file/d/1Agve-hqXOZ4D0H2PnzaklDcazoND-39F/view?usp=sharing",
    pic: qtCS,
    alt: 'a slide that says "queer + trans representation in computer science, an ACM JEDI allyship space by arjun (they/them) and sharvani (she/her). features a gradient moon.',
  },
  {
    title: "Making school a choice",
    presenters: "Maya Raman, Vaishnavi Tipireddy, Jason Jewik",
    date: "November 24, 2020",
    location: "Online",
    description:
      "An allyship space on juggling academic responsibilities with personal well-being.",
    slides:
      "https://drive.google.com/file/d/10d3Q7aK4WMN4nGMvcNyvOG1ONL5RuaC2/view?usp=sharing",
    pic: makingSchoolAChoice,
    alt: 'a slide that says "Making School a Choice", with fall-themed decorations like apples and acorns',
  },
  {
    title: "OCD and ADHD",
    presenters: "Arjun Subramonian, Sophie Schoenmeyer",
    date: "November 5, 2020",
    location: "Online",
    description:
      "An allyship space on OCD and ADHD and responding to ableism, as well as implications regarding stigma, diagnoses, and academics",
    slides:
      "https://drive.google.com/file/d/1D06JKksYWq-FsyDhAGvqjRihCTmJhFxD/view?usp=sharing",
    pic: ocdAdhd,
    alt: 'a simple slide that says "OCD + ADHD, Sophie Schoenmeyer and Arjun Subramonian"',
  },
  {
    title: "Healthy living",
    presenters: "Eugene Lo, Matt Wang",
    date: "November 17, 2020",
    location: "Online",
    description:
      "An allyship space on improving mental and physical health and seeking support systems.",
    slides:
      "https://drive.google.com/file/d/1r9zEz5O8hLFaXtj_pOdMhjd9pgSzGkof/view?usp=sharing",
    pic: healthyLiving,
    alt: 'a simple cover slide with the title "healthy living: eugene and matt\'s jedi allyship presentation", and some ferns',
  },
  {
    title: "(Dis)ability + accessibility in tech and beyond",
    presenters: "Ashley Ghodsian",
    date: "October 27, 2020",
    location: "Online",
    description:
      "An allyship space on disability, ableist culture, and what can tech do to improve accessibility.",
    slides:
      "https://drive.google.com/file/d/1baLskai0nIdJJESyieke3z4WkzNu3OTK/view?usp=sharing",
    pic: disabilityAccessibility,
    alt: "the cover slide for the talk, with a silhouette of a person sitting with a laptop on their lap and a chat bubble next to their head.",
  },
];

const jedis = [
  {
    name: "helia",
    pronouns: "she/her",
    bio: (
      <>
        Helix but with an &quot;a&quot; except for when I order food then I am
        Bob the Builder
        <br />
        <b>red flag:</b> likes using 1 ply toilet paper
      </>
    ),
    pic: "/images/jedi/jedi-officers/helia.jpg",
    alt: 'helia pointing at a sign saying "Women"',
  },
  {
    name: "archie",
    pronouns: "she/they",
    bio: (
      <>
        I cried over finding out my friend has a twin sister
        <br />
        <b>red flag:</b> will kick you out of the Sproul Cove 9th floor lounge
      </>
    ),
    pic: "/images/jedi/jedi-officers/archie.jpeg",
    alt: "archie in a dress in a backyard",
  },
  {
    name: "christine",
    pronouns: "they/them",
    bio: (
      <>
        has based taste in everything
        <br />
        <b>red flag:</b> cuwustine!!!! 🥺🥺 🚩!
      </>
    ),
    pic: "/images/jedi/jedi-officers/christine.jpg",
    alt: "christine wearing a scarf and smiling at the camera",
  },
  {
    name: "maya",
    pronouns: "she/???",
    bio: (
      <>
        ask me about my egg flipping videos
        <br />
        <b>red flag:</b> reads AOT fanfiction
      </>
    ),
    pic: "/images/jedi/jedi-officers/maya.jpg",
    alt: "maya in overalls standing in front of an art piece with a threatening expression",
  },
  {
    name: "jiin",
    pronouns: "she/her",
    bio: (
      <>
        my labels are INTP 5w4 sp/sx Ravenclaw airbender
        <br />
        <b>red flag:</b> is sus
      </>
    ),
    pic: "/images/jedi/jedi-officers/jiin.jpg",
    alt: "jiin wearing an animal hat at Joshua Tree",
  },
  {
    name: "paymon",
    pronouns: "he/him",
    bio: (
      <>
        the only time I’ve gotten into a car accident is at a McDonalds drive
        thru at 1 AM
        <br />
        <b>red flag:</b> will hit your car at the McDonalds drive thru at 1 AM
      </>
    ),
    pic: "/images/jedi/jedi-officers/paymon.png",
    alt: "paymon smiling in a park!",
  },
  {
    name: "stephen",
    pronouns: "he/him",
    bio: (
      <>
        I have never bought an eraser in my life, I just keep picking them up
        off the floor
        <br />
        <b>red flag:</b> hates Rodrick Heffley
      </>
    ),
    pic: "/images/jedi/jedi-officers/stephen.jpg",
    alt: "bald stephen staring scarily while a flashlight is pointed at his face from underneath",
  },
  {
    name: "edmond",
    pronouns: "he/they",
    bio: (
      <>
        from: temple city, ca (near pasadena) RED FLAG…
        <br />
        likes: cats, cooking, Speedy <br />
        likes: cooking cats speedily
        <br />
        likes: cooking speedy cats
        <br />
        likes: cats speedily cooking
        <br />
        red flag: did high school debate
        <br />
        dislikes: dave matthews band
        <br />
        likes: matthew
        <br />
        dislikes: dave
        <br />
        neutral: band
        <br />
        fun fact: shares birthday with mom
        <br />
        unwilling to accept the existence of dave matthews (i play jazz steel
        guitar apparently)
        <br />
        red flag: plays league :barf_emoji: RED FALGSDFSDFSDKF :barf: :barf: y
      </>
    ),
    pic: "/images/jedi/jedi-officers/edmond.jpg",
    alt: "edmond in front of some flowers",
  },
];

const blogLink =
  "https://medium.com/acm-at-ucla/may-the-force-be-with-acm-at-ucla-49e9258d71e1";

const contactEmail = "helia.woo@ucla.edu";

export { allyshipSpaces, blogLink, contactEmail, jedis };
