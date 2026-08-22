/**
 * Single source of truth for the page's section order and anchor ids.
 * Navbar links, the scroll-spy and the section markup all read from here so
 * they cannot drift apart.
 */
export interface Section {
  id: string;
  label: string;
}

export const SECTIONS: Section[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'companies', label: 'Companies' },
  { id: 'innovations', label: 'Innovations' },
  { id: 'contact', label: 'Contact' },
];

/** Height reserved for the fixed navbar when scrolling an anchor into view. */
export const NAV_OFFSET_PX = 96;
