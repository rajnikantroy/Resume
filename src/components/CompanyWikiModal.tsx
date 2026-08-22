'use client';

import React, { useState, useEffect } from 'react';
import {
  FaBuilding,
  FaPlane,
  FaExternalLinkAlt,
  FaWikipediaW,
  FaSpinner,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaLayerGroup,
} from 'react-icons/fa';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi';
import { resumeData, ProjectExperience } from '@/data/resumeData';
import FullScreenModal from './ui/FullScreenModal';

interface WikiSummary {
  title: string;
  description?: string;
  extract?: string;
  thumbnailUrl?: string | null;
  originalImageUrl?: string | null;
  wikiUrl?: string;
}

/** Abandon the lookup rather than spinning forever on a stalled network. */
const WIKI_TIMEOUT_MS = 8000;

const COMPANY_WIKI_MAP: Record<string, string> = {
  'LTM': 'LTIMindtree',
  'LTIMindtree': 'LTIMindtree',
  'SAS Airlines': 'Scandinavian_Airlines',
  'Scandinavian Airlines': 'Scandinavian_Airlines',
  'Wipro': 'Wipro',
  'Capgemini': 'Capgemini',
  'ITC Infotech': 'ITC_Limited',
  'ITC Limited': 'ITC_Limited',
  'Accenture': 'Accenture',
  'Telefónica Germany': 'Telef%C3%B3nica_Germany',
  'Telia Company, Sweden': 'Telia_Company',
  'Telia': 'Telia_Company',
  'British American Tobacco': 'British_American_Tobacco',
  'Verizon': 'Verizon_Communications',
  'Comcast': 'Comcast',
};

const WIKI_FALLBACKS: Record<string, WikiSummary> = {
  'LTM': {
    title: 'LTIMindtree',
    description: 'Global technology consulting and digital solutions company',
    extract:
      'LTIMindtree is an Indian multinational information technology services and consulting company. Formed through the merger of Larsen & Toubro Infotech (LTI) and Mindtree, the enterprise delivers end-to-end digital transformation, cloud architecture, and enterprise software engineering services globally.',
    wikiUrl: 'https://en.wikipedia.org/wiki/LTIMindtree',
  },
  'SAS Airlines': {
    title: 'Scandinavian Airlines (SAS)',
    description: 'Flag carrier of Denmark, Norway, and Sweden',
    extract:
      'Scandinavian Airlines, commonly known as SAS, is the flag carrier of Denmark, Norway, and Sweden. SAS is an international airline conglomerate operating flights across Europe, North America, and Asia with major hubs in Copenhagen, Oslo, and Stockholm.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Scandinavian_Airlines',
  },
  'Wipro': {
    title: 'Wipro Limited',
    description: 'Indian multinational technology and consulting corporation',
    extract:
      'Wipro Limited is an Indian multinational corporation that provides information technology, consultant and business process services. Headquartered in Bangalore, it is one of the leading global big tech and IT consulting firms.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Wipro',
  },
  'Capgemini': {
    title: 'Capgemini SE',
    description: 'French multinational information technology services and consulting company',
    extract:
      'Capgemini SE is a French multinational information technology (IT) services and consulting company, headquartered in Paris, France. It provides consulting, technology, professional, and digital outsourcing services across over 50 countries.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Capgemini',
  },
  'ITC Infotech': {
    title: 'ITC Infotech (ITC Limited)',
    description: 'Global technology services and solutions provider',
    extract:
      'ITC Infotech is a leading global technology services and solutions provider, and a fully owned subsidiary of ITC Limited. The enterprise delivers digital transformation, enterprise software engineering, and CRM solutions across global markets.',
    wikiUrl: 'https://en.wikipedia.org/wiki/ITC_Limited',
  },
  'Accenture': {
    title: 'Accenture plc',
    description: 'Global professional services and consulting company',
    extract:
      'Accenture plc is an Irish-American multinational professional services company specializing in information technology services and consulting. A Fortune Global 500 company, it is one of the largest technology consulting organizations in the world.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Accenture',
  },
};

interface CompanyWikiModalProps {
  companyName: string | null;
  role?: string;
  period?: string;
  onClose: () => void;
}

export default function CompanyWikiModal({ companyName, role, period, onClose }: CompanyWikiModalProps) {
  const [wikiData, setWikiData] = useState<WikiSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Clear the previous company's article so it cannot flash behind the
    // spinner while the next lookup is still in flight.
    setWikiData(null);
    setError(null);

    if (!companyName) return;

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), WIKI_TIMEOUT_MS);
    const wikiSlug = COMPANY_WIKI_MAP[companyName] || encodeURIComponent(companyName.replace(/\s+/g, '_'));

    const fetchWiki = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wikiSlug}`, {
          signal: controller.signal,
          // Don't hand Wikimedia this site's URL along with the visitor's request.
          referrerPolicy: 'no-referrer',
        });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();

        setWikiData({
          title: data.title || companyName,
          description: data.description,
          extract: data.extract,
          thumbnailUrl: data.thumbnail?.source || null,
          originalImageUrl: data.originalimage?.source || null,
          wikiUrl: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${wikiSlug}`,
        });
      } catch (err) {
        // An abort means the modal closed or moved on; leave state alone.
        if (controller.signal.aborted && (err as Error)?.name === 'AbortError') return;

        if (WIKI_FALLBACKS[companyName]) {
          setWikiData(WIKI_FALLBACKS[companyName]);
        } else {
          setError('Could not load the Wikipedia profile for this organization right now.');
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchWiki();

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [companyName]);

  // Related experience is derived from an exact company/client match; a
  // substring match let short names collide with unrelated rows.
  const relatedExperiences: ProjectExperience[] = companyName
    ? resumeData.experiences.filter(
        (exp) => exp.company === companyName || exp.client === companyName
      )
    : [];

  // Prefer the thumbnail: `originalimage` is the full-resolution upload and can
  // be several megabytes for a logo shown in a 224px box.
  const logoUrl = wikiData?.thumbnailUrl || wikiData?.originalImageUrl || null;

  return (
    <FullScreenModal
      open={Boolean(companyName)}
      onClose={onClose}
      icon={
        companyName === 'SAS Airlines' ? (
          <FaPlane className="w-6 h-6 text-blue-400" />
        ) : (
          <FaBuilding className="w-6 h-6 text-indigo-400" />
        )
      }
      eyebrow={
        <>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border bg-indigo-950/80 text-indigo-300 border-indigo-500/30 flex items-center gap-1.5">
            <FaWikipediaW className="w-3 h-3 text-white" />
            Wikipedia Profile
          </span>
          {period && (
            <span className="text-xs text-gray-400 font-medium hidden sm:inline">{period}</span>
          )}
        </>
      }
      title={wikiData?.title || companyName}
      subtitle={
        role ? (
          <span>
            Tenure: <strong className="text-white">{role}</strong>
          </span>
        ) : undefined
      }
      headerActions={
        wikiData?.wikiUrl ? (
          <a
            href={wikiData.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold tracking-wider transition-all shadow-xs"
          >
            <span>Wikipedia Article</span>
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        ) : null
      }
      footerNote="Company summary sourced from Wikipedia"
      footerActions={
        wikiData?.wikiUrl ? (
          <a
            href={wikiData.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-all shadow-xs"
          >
            <span>Read on Wikipedia</span>
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        ) : null
      }
    >
      {loading ? (
        <div className="p-16 text-center space-y-4 bg-white rounded-3xl border border-gray-200 shadow-xs">
          <FaSpinner className="w-10 h-10 text-blue-600 animate-spin mx-auto" />
          <p className="text-gray-600 text-sm font-medium">Loading the Wikipedia summary…</p>
        </div>
      ) : error && !wikiData ? (
        <div className="p-8 bg-amber-50 border border-amber-200 rounded-3xl text-amber-900 text-sm">
          {error}
        </div>
      ) : (
        wikiData && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {logoUrl && (
                <div className="shrink-0 w-full md:w-56 h-40 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center p-2 shadow-2xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrl}
                    alt={`${wikiData.title} logo`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
              )}
              <div className="space-y-3 flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wider border border-blue-100">
                  <HiSparkles className="text-blue-600" />
                  {wikiData.description || 'Global Enterprise Overview'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{wikiData.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{wikiData.extract}</p>
              </div>
            </div>
          </div>
        )
      )}

      {relatedExperiences.length > 0 && (
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2.5 text-gray-900 font-bold text-base sm:text-lg uppercase tracking-wider">
              <FaBriefcase className="text-blue-600" />
              <span>Engineering Leadership &amp; Deliverables at {companyName}</span>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 self-start whitespace-nowrap">
              {relatedExperiences.length} {relatedExperiences.length === 1 ? 'Project Track' : 'Project Tracks'}
            </span>
          </div>

          <div className="space-y-6">
            {relatedExperiences.map((exp) => (
              <div
                key={`${exp.title}-${exp.period}`}
                className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/80 space-y-4 hover:bg-white hover:border-blue-200 transition-all shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/60 pb-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">{exp.role}</h4>
                    <p className="text-xs text-gray-500 font-medium">
                      Project: <strong className="text-gray-800">{exp.title}</strong>
                      {exp.client && (
                        <span>
                          {' '}
                          • Client: <strong className="text-blue-700">{exp.client}</strong>
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-600 font-medium">
                    <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-gray-200">
                      <FaCalendarAlt className="text-blue-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-gray-200">
                      <FaMapMarkerAlt className="text-red-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                    <FaLayerGroup className="text-purple-600" />
                    Stack &amp; Architecture:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-white text-gray-800 rounded-lg text-xs font-semibold border border-gray-200/80 shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Key Deliverables:
                  </span>
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp) => (
                      <div
                        key={resp}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed"
                      >
                        <HiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </FullScreenModal>
  );
}
