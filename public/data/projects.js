import uuid from 'react-uuid';

import imageLin from '/public/images/projects/lin.png';
import imageDatreeDocs from '/public/images/projects/datree-docs.png';
import imagePermit from '/public/images/projects/permit.png';
import imageApono from '/public/images/projects/apono.png';
import imageDatree from '/public/images/projects/datree.png';
import imageEverAfter from '/public/images/projects/everafter.png';
import imageFarmacy from '/public/images/projects/farmacy.png';
import imageNotch from '/public/images/projects/notch.png';
import imageOfek from '/public/images/projects/ofek.png';
import imagePort from '/public/images/projects/port.png';
import imageRbg from '/public/images/projects/rbg.png';
import imageRead from '/public/images/projects/read.png';
import imageSedric from '/public/images/projects/sedric.png';
import imageSkywatch from '/public/images/projects/skywatch.png';
import imagePicture from '/public/images/projects/the-bigger-picture.png';
import imageValidify from '/public/images/projects/validify.png';
import imageVoom from '/public/images/projects/voom.png';
import imageYonivers from '/public/images/projects/yonivers.png';

export const projectsData = [
  {
    id: uuid(),
    src: imagePermit,
    title: 'Permit.io',
    tag: 'NextJS',
    short_description: 'From Design to live site useing Next.js and GraphCMS',
    href: 'https://www.permit.io/',
    isFeatured: true,
    type: 'code',
  },
  {
    id: uuid(),
    src: imageLin,
    title: 'Lin Health',
    tag: 'Webflow',
    short_description: 'From Design to live site useing Webflow',
    href: 'https://www.lin.health/',
    isFeatured: true,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageDatreeDocs,
    title: 'Datree Docs',
    tag: 'Docusaurus',
    short_description:
      'Building a docs site using docusaurus.io (React framework)',
    href: 'https://hub.datree.io/',
    isFeatured: true,
    type: 'code',
  },
  {
    id: uuid(),
    src: imageApono,
    title: 'Apono.io',
    tag: 'Webflow',
    short_description: 'Simplifying Permissions and Access Management',
    href: 'https://www.apono.io/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageDatree,
    title: 'Datree.io',
    tag: 'Webflow',
    short_description: 'Combat misconfigurations',
    href: 'https://www.datree.io/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageEverAfter,
    title: 'EverAfter',
    tag: 'Webflow',
    short_description: 'Best Customer Journey Platform for SaaS',
    href: 'https://www.everafter.ai/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageFarmacy,
    title: "Christiane's Farmacy",
    tag: 'E-Commerce',
    short_description:
      'Remedies rooted in science with all natural ingredients',
    href: 'https://www.christiane.co/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageNotch,
    title: 'Get Notch',
    tag: 'Webflow',
    short_description: 'Insurance for digital assets.',
    href: 'https://www.get-notch.com/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageOfek,
    title: 'Ofek Wolman',
    tag: 'Webflow',
    short_description: 'Product designer portfolio',
    href: 'https://www.ofekwolman.com/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imagePort,
    title: 'Get Port',
    tag: 'Webflow',
    short_description: 'Create DevPortal in Minutes',
    href: 'https://www.getport.io/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageRbg,
    title: 'Ask RBG',
    tag: 'NextJS | AI',
    short_description: 'What would RBG (probably) say?',
    href: 'https://ask-rbg.ai/',
    isFeatured: false,
    type: 'code',
  },
  {
    id: uuid(),
    src: imageRead,
    title: 'Wordtune Read',
    tag: 'Webflow',
    short_description: 'A revolutionary reading experience',
    href: 'https://www.wordtune.com/read',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageSedric,
    title: 'Sedric.ai',
    tag: 'Webflow',
    short_description: 'Compliance Excellence for Fintech',
    href: 'https://www.sedric.ai/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageSkywatch,
    title: 'skywatch.ai',
    tag: 'Webflow',
    short_description: 'The smart insurance for the sky',
    href: 'https://www.skywatch.ai/us/main-page',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imagePicture,
    title: 'The bigger picture',
    tag: 'Webflow',
    short_description: 'Where big ideas and life stories meet',
    href: 'https://www.thebiggerpicturepod.com/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageValidify,
    title: 'Validify',
    tag: 'Webflow',
    short_description: 'Audit-Ready Salesforce validation',
    href: 'https://www.validify.app/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageVoom,
    title: 'Voom',
    tag: 'Webflow',
    short_description: 'Pay per mile motorcycle insurance',
    href: 'https://www.voominsurance.com/',
    isFeatured: false,
    type: 'webflow',
  },
  {
    id: uuid(),
    src: imageYonivers,
    title: 'Yonivers',
    tag: 'NextJS',
    short_description: 'Insurance | Simple, Rapide, Facile',
    href: 'https://app.yonivers.com/mrh/1',
    isFeatured: false,
    type: 'code',
  },
];
