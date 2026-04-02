import { useState } from 'react'
import './index.css'

// ─── TABS ────────────────────────────────────────────────────
const TABS = [
  'GMB Profile',
  'Competition',
  'Schema Audit',
  'GEO Audit',
  'AEO Audit',
  'Local Visibility',
  'Backlinks',
  'Contact Us',
]

// ─── GMB PROFILE DATA (REAL — Caravan Nest Luxury Home Stay) ─
const PROFILE_COMPLETENESS = [
  { label: 'Primary Category', detail: 'Home Stay', done: true },
  { label: 'Additional Categories', detail: 'Assigned', done: true },
  { label: 'Address', detail: 'J complex, Road, SH7, Manjadi, Thiruvalla, Kerala 689105', done: true },
  { label: 'Website', detail: 'caravannestluxuryhomestay.in', done: true },
  { label: 'Phone Number', detail: '+919072032010', done: true },
  { label: 'Work Hours', detail: 'Provided', done: true },
  { label: 'Photos', detail: '30 photos uploaded', done: true },
  { label: 'Profile Claimed', detail: 'Business profile is claimed', done: true },
]

const RECENT_POSTS = [
  { age: '2 months ago', text: 'Discover your perfect getaway at Caravan Nest Luxury Home Stay where comfort meets adventure. Immerse yourself in serene surroundings and beautifully designed spaces, reconnect with nature and create unforgettable memories. Book your stay today.' },
  { age: '2 months ago', text: 'Planning a vacation? Choose Caravan Nest Luxury Home Stay. Relax in fully furnished rooms, enjoy cozy living areas, modern comforts, and warm hospitality for a truly pleasant and restful stay.' },
  { age: '3 months ago', text: 'Planning a short city break or a longer stay? Caravan Nest Luxury Home Stay in Thiruvalla offers a cozy and luxurious experience with a warm and welcoming atmosphere. Contact us today to book your stay.' },
]

const GBP_RECOMMENDATIONS = [
  'Encourage the generation of more reviews for your business.',
  'Add FAQs to your Business Profile.',
  'Add your Business Opening Date.',
  'Assign more Categories (currently 3 given, need more).',
  'Upload missing videos to your gallery.',
  'Enable Profile Protection features.',
  'Set up Autoreply for messages/reviews.',
]

// ─── META / HEADINGS DATA ─────────────────────────────────────
const HEADINGS_DATA = [
  { tag: 'H3', text: 'Navigation', issue: true },
  { tag: 'H3', text: 'Welcome to Caravan Nest Luxuary Home Stay', issue: false },
  { tag: 'H1', text: 'Where Luxury Meets Comfort. Relax in style at our exquisite homestay, surrounded by tranquil ambiance.', issue: false },
  { tag: 'H3', text: 'About us', issue: false },
  { tag: 'H1', text: 'Energise Your Stay', issue: true },
  { tag: 'H3', text: 'Our specialities', issue: false },
  { tag: 'H1', text: 'Discover Everything for an Unforgettable Luxury Homestay Experience.', issue: true },
  { tag: 'H3', text: 'Cozy Accommodations', issue: false },
  { tag: 'H3', text: 'Local Hospitality', issue: false },
  { tag: 'H3', text: 'Family-Friendly Atmosphere', issue: false },
  { tag: 'H3', text: 'Wi-Fi and Modern Amenities', issue: false },
  { tag: 'H3', text: 'Our Gallery', issue: false },
  { tag: 'H1', text: 'Embark on a visual journey through our Gallery', issue: true },
  { tag: 'H3', text: 'Home Stay 1–6', issue: false },
  { tag: 'H1', text: 'Your Journey Begins Here: Caravan Nest Homestay Booking', issue: true },
  { tag: 'H3', text: 'Book Now / Contact Us', issue: false },
  { tag: 'H5', text: 'Where to Find Us / Call Us At', issue: false },
  { tag: 'H4', text: 'Navigation', issue: false },
]

const IMAGES_DATA = [
  { src: 'images/2.jpg', dims: '1600×943px', alt: null, label: null },
  { src: 'images/hero-bg.jpg', dims: '1600×1066px', alt: null, label: null },
  { src: 'images/log.png', dims: '1600×1627px', alt: 'Homepage', label: 'Homepage' },
  { src: 'storage/gallery/images_65d041fadac72.jpeg', dims: '1156×521px', alt: 'Home Stay 1', label: 'Home Stay 1' },
  { src: 'storage/gallery/images_65d0425650e87.jpeg', dims: '1156×521px', alt: 'Home Stay 2', label: 'Home Stay 2' },
  { src: 'storage/gallery/images_65d0427cd154b.jpeg', dims: '1156×521px', alt: 'Home Stay 3', label: 'Home Stay 3' },
  { src: 'storage/gallery/images_65d042bfda8f2.jpeg', dims: '1156×521px', alt: 'Home Stay 4', label: 'Home Stay 4' },
  { src: 'storage/gallery/images_65d042eecb622.jpeg', dims: '1156×521px', alt: 'Home Stay 5', label: 'Home Stay 5' },
  { src: 'storage/gallery/images_65d0430ba4d19.jpeg', dims: '1156×521px', alt: 'Home Stay 6', label: 'Home Stay 6' },
  { src: 'WhatsApp.svg', dims: '150×150px', alt: 'WhatsApp', label: 'WhatsApp' },
]

// ─── GEO & AEO DATA ──────────────────────────────────────────
const GEO_ASSESSMENT = [
  { group: 'E-E-A-T Assessment', items: [
    { label: 'Author / Owner Information', value: 'Missing', status: 'error', desc: 'No named owner, manager, or host is mentioned. AI search engines strongly prefer identifiable human sources.' },
    { label: 'About Page / Story', value: 'Needs Attention', status: 'warn', desc: 'Generic copy. No founding story, host background, or credentials.' },
    { label: 'Contact Information', value: 'Needs Attention', status: 'warn', desc: 'Phone and partial address present. Email link appears to be a dead mailto.' },
    { label: 'Trust Signals', value: 'Needs Attention', status: 'warn', desc: '3 testimonials present but only first name/city. No Google reviews badge, TripAdvisor, or Govt approvals.' },
    { label: 'Awards / Certifications', value: 'Missing', status: 'error', desc: 'No Kerala Tourism Dept approval or hospitality certifications mentioned.' },
    { label: 'Social Profiles', value: 'Needs Attention', status: 'warn', desc: 'Facebook/Instagram icon links appear to be placeholder anchors.' },
  ]},
  { group: 'Content for AI Synthesis', items: [
    { label: 'Factual Density', value: 'Missing', status: 'error', desc: 'Content is vague. Specific facts (exact location, distances, room dims, price range) missing.' },
    { label: 'Clear Value Proposition', value: 'Needs Attention', status: 'warn', desc: 'Hero H1 is aspirational but does not state property type, location, or audience.' },
    { label: 'Source Citations / External Links', value: 'Missing', status: 'error', desc: 'No external references or links to local tourism pages for knowledge graph alignment.' },
    { label: 'Comprehensiveness', value: 'Missing', status: 'error', desc: 'Leaves key questions unanswered: rates, airport distance, breakfast, room count.' },
    { label: 'Entity Clarity', value: 'Missing', status: 'error', desc: 'Brand name inconsistently written ("Laxury", "Luxuary", "Luxury").' },
    { label: 'Original Data / Perspective', value: 'Missing', status: 'error', desc: 'No original photography credits, local area guides, or unique content.' },
  ]},
  { group: 'Technical GEO', items: [
    { label: 'HTTPS Security', value: 'Good', status: 'ok', desc: 'Site is served over HTTPS — a positive trust signal for users and AI crawlers.' },
    { label: 'Robots.txt', value: 'Missing', status: 'error', desc: 'No robots.txt found to confirm AI crawlers are welcome.' },
    { label: 'XML Sitemap', value: 'Missing', status: 'error', desc: 'No sitemap.xml found. Search/AI bots must discover through links only.' },
    { label: 'JavaScript Rendering', value: 'Good', status: 'ok', desc: 'Server-rendered HTML means content is accessible without JS execution.' },
    { label: 'Brand Entity Links (sameAs)', value: 'Missing', status: 'error', desc: 'No sameAs property pointing to Facebook/social pages to strengthen entity graph.' },
    { label: 'Structured Data Depth', value: 'Missing', status: 'error', desc: 'Zero structured data for Author, Organization, or LodgingBusiness.' },
  ]}
]

const AEO_ASSESSMENT = [
  { group: 'Featured Snippet Eligibility', items: [
    { label: 'Direct Answer Paragraphs', value: 'Missing', status: 'error', desc: 'No question-and-answer structured content.' },
    { label: 'Definition Patterns', value: 'Missing', status: 'error', desc: 'No definitive "X is..." sentence for the property (e.g. "Caravan Nest is a luxury homestay in Thiruvalla...").' },
    { label: 'List Content (Snippet)', value: 'Needs Attention', status: 'warn', desc: 'Specialities listed as cards but not structured as HTML lists (ul/ol).' },
    { label: 'Table Content', value: 'Missing', status: 'error', desc: 'No comparison tables, rate tables, or amenity tables present.' },
  ]},
  { group: 'Structured Answer Formats', items: [
    { label: 'FAQ Schema', value: 'Missing', status: 'error', desc: 'No FAQ section and no FAQ schema markup.' },
    { label: 'HowTo Schema', value: 'Missing', status: 'error', desc: 'Not applicable in current content but could apply to a "How to book" section.' },
    { label: 'Question-Phrased Headings', value: 'Missing', status: 'error', desc: 'No headings (H1, H3) are phrased as questions to invite feature snippet extraction.' },
    { label: 'Speakable Schema', value: 'Missing', status: 'error', desc: 'No SpeakableSpecification markup for voice assistants.' },
  ]},
  { group: 'Voice Search Readiness', items: [
    { label: 'Conversational Language', value: 'Needs Attention', status: 'warn', desc: 'Body copy is formal/marketing-oriented rather than conversational natural language.' },
    { label: 'Long-Tail Question Coverage', value: 'Missing', status: 'error', desc: 'Does not address specific who/what/when/where/why/how questions (FAQ needed).' },
    { label: 'Local Signals (NAP)', value: 'Needs Attention', status: 'warn', desc: 'Address format incomplete (no pin code), no Google Maps embed.' },
    { label: 'Google Business Profile', value: 'Missing', status: 'error', desc: 'No GBP integration or embed. A verified listing is the highest ROI action for local search.' },
  ]}
]

const PRIORITY_RECOMMENDATIONS = [
  { num: '1', title: 'Fix Brand Spelling Scarcity', desc: 'Fix "Laxury" (title), "Luxuary" (H1), "atmost". Incorrect spelling damages brand perception in search.' },
  { num: '2', title: 'Add LocalBusiness Schema', desc: 'Add JSON-LD schema with full NAP (name, address, phone), check-in/out times, and amenities.' },
  { num: '3', title: 'Create Meta Description', desc: 'Add missing meta description with primary keyword, location, and CTA (e.g. 150-160 chars).' },
  { num: '4', title: 'Verify Google Business', desc: 'Create and verify Google Business Profile listing for map pack visibility and voice search.' },
  { num: '5', title: 'Add Canonical & Robots', desc: 'Add rel="canonical" to resolve dupe on /index.php. Create a robots.txt and sitemap.xml.' },
  { num: '6', title: 'Add FAQ & Question Headers', desc: 'Add an FAQ section (8-10 questions) covering pricing, rules, and distances. Mark up with FAQ schema.' },
  { num: '7', title: 'Enhance E-E-A-T Signals', desc: 'Add named owner/host profile with photo and bio. Update address with pin code and Maps embed.' },
  { num: '8', title: 'Technical Upgrades', desc: 'Add Open Graph / Twitter cards, fix social anchors, and use descriptive Image Alt Text over generic names.' },
]

// ─── SEO ERRORS DATA ─────────────────────────────────────────
const SEO_ERRORS = [
  { issue: 'Duplicate Title Tags', count: 4, impact: 'High', color: 'poor', desc: 'Confuses search engines about which page is most relevant.' },
  { issue: 'Duplicate Content Issues', count: 4, impact: 'High', color: 'poor', desc: 'Pages are over 85% identical; can lead to ranking downgrades.' },
  { issue: '4XX Status Code', count: 1, impact: 'High', color: 'poor', desc: 'A page is broken (404 Not Found), leading to a poor user experience.' },
]

const SEO_WARNINGS = [
  { label: 'Unminified JS & CSS Files', count: 12, desc: 'Increases page load time significantly.' },
  { label: 'Broken External Links', count: 4, desc: 'External links point to non-existent pages.' },
  { label: 'Missing Meta Descriptions', count: 4, desc: 'Pages are missing meta descriptions for search snippets.' },
  { label: 'Low Text-to-HTML Ratio', count: 4, desc: 'Not enough unique text content relative to code.' },
  { label: 'Sitemap.xml Not Found', count: 1, desc: 'No sitemap found or linked in robots.txt.' },
]

const SEO_NOTICES = [
  { label: 'Multiple H1 Tags', count: 4, desc: 'Pages have more than one H1 tag — structure is unclear.' },
  { label: 'HSTS Not Supported', count: 2, desc: 'Two subdomains do not support HTTP Strict Transport Security.' },
  { label: 'Near-Orphan Pages', count: 2, desc: 'Pages with only one incoming internal link — risk of being orphaned.' },
  { label: 'llms.txt Not Found', count: 1, desc: 'File used to guide AI crawlers is missing.' },
  { label: 'Formatted as Page Links', count: 24, desc: '24 resources are formatted as page links.' },
]

// ─── HELPERS ─────────────────────────────────────────────────
function getRankBadgeClass(rank) {
  if (rank === null) return 'unranked'
  if (rank <= 5) return 'good'
  if (rank <= 10) return 'warning'
  return 'poor'
}

function getRankLabel(rank) {
  if (rank === null) return 'N/R'
  return `#${rank}`
}

// Circular SVG ring
function CircularRing({ score, maxScore = 10, size = 160, strokeWidth = 12 }) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const pct = score / maxScore
  const dashOffset = circumference * (1 - pct)
  return (
    <div className="ring-wrapper">
      <svg className="ring-svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#3A3436" strokeWidth={strokeWidth} />
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#5B2333" strokeWidth={strokeWidth}
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={dashOffset}
          style={{ transition: 'stroke-dashoffset 1s ease' }} />
      </svg>
      <div className="ring-center-text">
        <div className="ring-score">{score}</div>
        <div className="ring-label">/ {maxScore}</div>
      </div>
    </div>
  )
}

// ─── TAG BADGE ────────────────────────────────────────────────
function HeadingTag({ tag, issue }) {
  const colors = {
    H1: issue ? '#E53E3E' : '#5B2333',
    H2: '#38A169',
    H3: '#4A90B8',
    H4: '#9A9294',
    H5: '#9A9294',
  }
  return (
    <span style={{
      display: 'inline-block',
      padding: '1px 8px',
      borderRadius: '4px',
      background: `${colors[tag] || '#3A3436'}22`,
      border: `1px solid ${colors[tag] || '#3A3436'}55`,
      color: colors[tag] || '#9A9294',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.06em',
      flexShrink: 0,
      minWidth: '34px',
      textAlign: 'center',
    }}>
      {tag}
    </span>
  )
}

// ─── STAT PILL ────────────────────────────────────────────────
function StatPill({ label, value, color = 'var(--text-primary)', subtext }) {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: '10px',
      padding: '18px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize:'10px', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--text-dim)' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize:'32px', fontWeight:900, color, lineHeight:1 }}>{value}</div>
      {subtext && <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-dim)', marginTop:'2px' }}>{subtext}</div>}
    </div>
  )
}

// ─── META FIELD CARD ─────────────────────────────────────────
function MetaRow({ label, value, status }) {
  const statusColor = status === 'ok' ? '#38A169' : status === 'warn' ? '#F5A623' : '#E53E3E'
  const statusIcon  = status === 'ok' ? '✔' : '✘'
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'11px 18px', borderBottom:'1px solid rgba(58,52,54,0.4)' }}>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--text-dim)' }}>{label}</span>
      <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color: value === 'Missing' || value === 'Empty' || value === 'Not found' ? '#E53E3E' : 'var(--text-muted)' }}>{value}</span>
        <span style={{ color: statusColor, fontSize:'13px' }}>{statusIcon}</span>
      </div>
    </div>
  )
}

// ─── SECTION HEADER ──────────────────────────────────────────
function SectionHeader({ icon, title }) {
  return (
    <div className="section-header">
      <div className="section-icon">{icon}</div>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}

// ─── TAB: GMB PROFILE ────────────────────────────────────────
function GmbProfile() {
  const completed = PROFILE_COMPLETENESS.filter(i => i.done).length
  const total = PROFILE_COMPLETENESS.length
  const incomplete = total - completed
  return (
    <>
      <SectionHeader icon="🏢" title="Google Business Profile Strength" />

      {/* Score + Status Banner */}
      <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'20px', marginBottom:'20px', alignItems:'stretch' }}>
        {/* Ring */}
        <div className="ring-card" style={{ minWidth:'200px' }}>
          <div className="ring-title">Completion Score</div>
          <CircularRing score={62} maxScore={100} size={160} strokeWidth={12} />
          <div style={{ fontFamily:'var(--font-sans)', fontSize:'14px', fontWeight: 'bold', color:'var(--text-primary)', textAlign:'center', marginTop:'12px' }}>
            Profile Strength: <span style={{ color:'var(--warning)' }}>4</span>
          </div>
        </div>

        {/* Right side: summary + recommendations */}
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          {/* Stats row */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'12px' }}>
            <StatPill label="Review Score" value="4.8★" color="var(--warning)" subtext="6 total reviews" />
            <StatPill label="Number of Reviews" value="6" color="var(--negative)" subtext="Low — target 50+" />
            <StatPill label="Photos" value="30" color="var(--positive)" subtext="Sufficient count" />
          </div>

          {/* Recommendations */}
          <div className="breakdown-card" style={{ flex:1 }}>
            <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(245,166,35,0.07)', borderBottom:'1px solid rgba(245,166,35,0.2)' }}>
              <span style={{ color:'var(--warning)' }}>⚡</span>
              Recommendations
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--warning)', marginLeft:'auto' }}>7 Actions</span>
            </div>
            <ul className="breakdown-list">
              {GBP_RECOMMENDATIONS.map((r, i) => (
                <li key={i} className="breakdown-item">
                  <span className="breakdown-icon warn">⚠</span>
                  <div className="breakdown-item-title" style={{ fontSize:'13px' }}>{r}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Profile Completeness Checklist */}
      <div className="checklist-card" style={{ marginBottom:'20px' }}>

        <div className="checklist-scroll" style={{ maxHeight:'none' }}>
          {PROFILE_COMPLETENESS.map((item, i) => (
            <div key={i} className="checklist-item" style={{ alignItems:'flex-start', paddingTop:'13px', paddingBottom:'13px' }}>
              <div style={{ flex:1 }}>
                <div className="checklist-item-label" style={{ fontWeight:500 }}>{item.label}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-dim)', marginTop:'3px' }}>{item.detail}</div>
              </div>
              <span className={`checklist-status ${item.done ? 'done' : 'fail'}`}>{item.done ? '✅' : '❌'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PENDING TASKS ─────────────────────────────── */}
      <SectionHeader icon="⏳" title="Pending Tasks & Performance Analysis" />

      {/* Content Strength */}
      <div className="breakdown-card" style={{ marginBottom:'16px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(229,62,62,0.07)', borderBottom:'1px solid rgba(229,62,62,0.2)' }}>
          <span style={{ color:'var(--negative)' }}>❌</span>
          Content Strength: 2.18 (Fail)
        </div>
        <ul className="breakdown-list" style={{ padding: '0 18px 18px' }}>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Title:</strong> There are no ranking keywords in the Business Profile Titles, huge scope of improving the name</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Photos & Videos Missing:</strong> Business Profiles have multiple photos & videos added, with a scope of adding more content</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Logo in Profiles:</strong> Logo is added to all Business Listings</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Count of Posts:</strong> Business Listings are highly optimized with multiple posts, keep updating Offers, Events & Posts regularly</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Keywords in Services / Menu Section Content:</strong> Business Profile Services / Menu have no local search high ranking keywords</li>
        </ul>
      </div>

      {/* Review Strength */}
      <div className="breakdown-card" style={{ marginBottom:'16px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(229,62,62,0.07)', borderBottom:'1px solid rgba(229,62,62,0.2)' }}>
          <span style={{ color:'var(--negative)' }}>❌</span>
          Review Strength: 0.00 (Fail)
        </div>
        <ul className="breakdown-list" style={{ padding: '0 18px 18px' }}>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Reviews Quantity:</strong> Business Profiles have a very low number of Reviews</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Keywords in Reviews:</strong> No Ranking Keywords are present in Reviews content</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Standard Deviation:</strong> Very less number of new reviews are received consistently, try getting more reviews frequently</li>
        </ul>
      </div>

      {/* Sentiment Strength */}
      <div className="breakdown-card" style={{ marginBottom:'16px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(56,161,105,0.07)', borderBottom:'1px solid rgba(56,161,105,0.2)' }}>
          <span style={{ color:'var(--positive)' }}>✅</span>
          Sentiment Strength: 6.50 (Pass)
        </div>
        <ul className="breakdown-list" style={{ padding: '0 18px 18px' }}>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Positive Reviews %:</strong> High number of positive sentiment reviews on Business Profiles</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Response Rate:</strong> Almost all Reviews have received a reply or have a concern addressed by the Business</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Text Reviews:</strong> Good number of Text Reviews as percentage of Total Reviews on Business Profiles</li>
        </ul>
      </div>

      {/* Ranking Strength */}
      <div className="breakdown-card" style={{ marginBottom:'16px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(229,62,62,0.07)', borderBottom:'1px solid rgba(229,62,62,0.2)' }}>
          <span style={{ color:'var(--negative)' }}>❌</span>
          Ranking Strength: 0.00 (Fail)
        </div>
        <ul className="breakdown-list" style={{ padding: '0 18px 18px' }}>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Listing Average Rating:</strong> Tracking Keywords are ranking very low & at the end of the second page across your Listings & need optimisations</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Average Rank:</strong> Your Business Profiles have very Low Visiblity Score means they are not ranking well on high search volume keywords</li>
        </ul>
      </div>

      {/* Traffic Strength */}
      <div className="breakdown-card" style={{ marginBottom:'16px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(229,62,62,0.07)', borderBottom:'1px solid rgba(229,62,62,0.2)' }}>
          <span style={{ color:'var(--negative)' }}>❌</span>
          Traffic Strength: 4.63 (Fail)
        </div>
        <ul className="breakdown-list" style={{ padding: '0 18px 18px' }}>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Impressions:</strong> Impressions for Business Profiles are moderate with scope of improvement compared to local keyword search volumes</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Direction Clicks:</strong> Click Through Rate for Direction Clicks is optimal, suggesting high intent of customers to visit the stores</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Call Clicks:</strong> Click Through Rate for Call Clicks is very low, suggesting customers are very less likely to call the store numbers or there might be missing phone number in the listings</li>
          <li className="breakdown-item"><strong style={{color:'var(--text-primary)'}}>Website Clicks:</strong> Click Through Rate for Website Clicks is low, suggesting low intent of customers to visit the websites</li>
        </ul>
      </div>

      {/* Metrics Summaries */}
      <div className="breakdown-grid" style={{ gridTemplateColumns:'1fr 1fr', gap:'16px', marginBottom:'24px' }}>
        <div className="breakdown-card">
          <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <span>📈</span> Key Metrics Summary (Feb 1 – Feb 28, 2026)
          </div>
          <div style={{ padding:'18px' }}>
            <p style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.6, marginBottom:'12px' }}>
              The snapshot for February shows a total of <strong>1.1K impressions</strong>, but there is a concerning <strong style={{ color:'var(--negative)' }}>-14.5% change Month-over-Month (MOM)</strong>.
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Channel</th>
                  <th>Desktop</th>
                  <th>Mobile</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Google Maps</td><td>206</td><td>85</td><td>705</td></tr>
                <tr><td>Google Search</td><td>303</td><td>193</td><td>49</td></tr>
                <tr><td>Bing (All)</td><td>0</td><td>0</td><td>0</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="breakdown-card">
          <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <span>🖱️</span> Action Metrics Summary (Feb 1 – Feb 28, 2026)
          </div>
          <div style={{ padding:'18px' }}>
            <p style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.6, marginBottom:'12px' }}>
              You had a total of <strong>77 Clicks</strong>, with a <strong>7.31% Click-Through Rate (CTR)</strong>. While the CTR is actually quite healthy for local search, the total volume is down <strong style={{ color:'var(--negative)' }}>-13.5% Month-over-Month (MOM)</strong>.
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Interaction Type</th>
                  <th>Count</th>
                  <th>% of Total</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Direction Clicks</td><td>75</td><td>97.4%</td></tr>
                <tr><td>Website Clicks</td><td>2</td><td>2.6%</td></tr>
                <tr><td>Call Clicks</td><td>0</td><td>0%</td></tr>
                <tr><td>Booking Clicks</td><td>0</td><td>0%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <SectionHeader icon="📝" title="Recent Google Posts" />
      <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginBottom:'0' }}>
        {RECENT_POSTS.map((post, i) => (
          <div key={i} className="breakdown-card" style={{ padding:'0' }}>
            <div style={{ display:'flex', alignItems:'flex-start', gap:'14px', padding:'15px 18px' }}>
              <div style={{ flexShrink:0, fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--text-dim)', whiteSpace:'nowrap', marginTop:'2px', background:'var(--bg-hover)', padding:'4px 8px', borderRadius:'4px' }}>
                {post.age}
              </div>
              <p style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.65 }}>{post.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── TAB: COMPETITION ────────────────────────────────────────
function Competition() {
  const metrics = [
    { label: 'ARP Score', value: '1.00', color: 'var(--positive)', sub: 'Average Rank Position' },
    { label: 'ATRP', value: '1.00', color: 'var(--positive)', sub: 'Adjusted Total Rank' },
    { label: 'Share of Local Voice', value: '100%', color: '#5B2333', sub: 'SoLV — 5km Radius' },
    { label: 'Avg Star Rating', value: '4.8★', color: 'var(--warning)', sub: 'Google Reviews' },
  ]
  return (
    <>
      <SectionHeader icon="🏆" title="Keyword Grid Dominance Report" />


      {/* Metrics Grid */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px', marginBottom:'28px' }}>
        {metrics.map((m, i) => (
          <StatPill key={i} label={m.label} value={m.value} color={m.color} subtext={m.sub} />
        ))}
      </div>

      {/* What the Data Shows */}
      <div className="breakdown-grid" style={{ gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
        <div className="breakdown-card">
          <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <span>📊</span> What the Data Shows
          </div>
          <div style={{ padding:'18px' }}>
            <p style={{ fontSize:'13.5px', color:'var(--text-muted)', lineHeight:1.7, marginBottom:'12px' }}>
              With an ARP and ATRP of <strong style={{ color:'var(--text-primary)' }}>1.00</strong> and{' '}
              <strong style={{ color:'var(--positive)' }}>100% SoLV</strong>, your business is the undisputed leader in this specific territory.
            </p>
            <p style={{ fontSize:'13.5px', color:'var(--text-muted)', lineHeight:1.7 }}>
              Your <strong style={{ color:'var(--warning)' }}>4.8-star rating</strong> and recent activity have clearly solidified your position at the top of the Map Pack for this keyword.
            </p>
          </div>
        </div>

        <div className="breakdown-card">
          <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <span>🔍</span> Root Cause Analysis
          </div>
          <div style={{ padding:'18px' }}>
            <p style={{ fontSize:'13.5px', color:'var(--text-muted)', lineHeight:1.7, marginBottom:'12px' }}>
              Your profile is <strong style={{ color:'var(--text-primary)' }}>perfectly aligned</strong> with the search intent for{' '}
              <em>"luxury home stays"</em> in <strong style={{ color:'var(--text-primary)' }}>Thiruvalla</strong>.
            </p>
            <p style={{ fontSize:'13.5px', color:'var(--text-muted)', lineHeight:1.7 }}>
              This level of dominance suggests either a very strong optimization on your part or a <strong style={{ color:'var(--warning)' }}>lack of direct competitors</strong> who are as well-optimized within this 5km zone.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Diagnosis */}
      <div style={{ marginTop:'16px', background:'rgba(91,35,51,0.07)', border:'1px solid rgba(91,35,51,0.2)', borderRadius:'var(--radius-md)', padding:'18px 22px' }}>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--accent-light)', marginBottom:'8px' }}>
          ⚡ Quick Diagnosis
        </div>
        <p style={{ fontSize:'13.5px', color:'var(--text-muted)', lineHeight:1.7 }}>
          You are currently the <strong style={{ color:'var(--positive)' }}>#1 result at every single grid point</strong> scanned — the best possible outcome for a local search.
          Focus now on <strong style={{ color:'var(--text-primary)' }}>expanding beyond the 5km radius</strong> to capture wider territory before competitors catch up.
        </p>
      </div>
    </>
  )
}

// ─── TAB: SCHEMA AUDIT ───────────────────────────────────────
function SchemaAudit() {
  return (
    <>
      <SectionHeader icon="🔎" title="On-Page Meta & Schema Audit" />

      {/* Meta Snapshot */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', marginBottom:'24px' }}>
        {/* Meta card */}
        <div className="card">
          <div style={{ padding:'14px 18px', borderBottom:'1px solid var(--border)', fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-dim)', background:'rgba(91,35,51,0.05)' }}>
            Meta Tags
          </div>
          <MetaRow label="Title" value="Caravan Nest Laxury Home Stay" status="warn" />
          <MetaRow label="Title Length" value="29 / 60 chars" status="warn" />
          <MetaRow label="Description" value="Empty" status="error" />
          <MetaRow label="Published Date" value="Missing" status="error" />
          <MetaRow label="Modified Date" value="Missing" status="error" />
          <MetaRow label="Canonical URL" value="Missing" status="error" />
          <MetaRow label="Robots Meta Tag" value="Missing" status="error" />
          <MetaRow label="X-Robots-Tag HTTP" value="Missing" status="error" />
          <MetaRow label="Sitemap" value="Not found" status="error" />
          <MetaRow label="Hreflang" value="Missing" status="error" />
        </div>

        {/* Open Graph card */}
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          <div className="card">
            <div style={{ padding:'14px 18px', borderBottom:'1px solid var(--border)', fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-dim)', background:'rgba(91,35,51,0.05)' }}>
              Open Graph Tags
            </div>
            <MetaRow label="og:title" value="Missing" status="error" />
            <MetaRow label="og:type" value="Missing" status="error" />
            <MetaRow label="og:image" value="Missing" status="error" />
            <MetaRow label="og:url" value="Missing" status="error" />
          </div>
          <div className="card">
            <div style={{ padding:'14px 18px', borderBottom:'1px solid var(--border)', fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-dim)', background:'rgba(91,35,51,0.05)' }}>
              Structured Data (JSON-LD)
            </div>
            <div style={{ padding:'20px 18px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                <span style={{ fontSize:'22px' }}>❌</span>
                <div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'var(--negative)' }}>No JSON-LD Structured Data Found</div>
                  <div style={{ fontSize:'12px', color:'var(--text-dim)', marginTop:'4px' }}>LocalBusiness, Product, or FAQ schema is absent entirely.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div style={{ padding:'14px 18px', borderBottom:'1px solid var(--border)', fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-dim)', background:'rgba(91,35,51,0.05)' }}>
              Content
            </div>
            <MetaRow label="Word Count" value="555 words" status="warn" />
            <MetaRow label="Heading Structure" value="Multiple H1 tags" status="error" />
            <MetaRow label="First Heading" value="Not H1 (is H3)" status="error" />
          </div>
        </div>
      </div>

      {/* Headings Tree */}
      <SectionHeader icon="🌲" title="Heading Structure Tree" />
      <div className="card" style={{ marginBottom:'24px' }}>
        <div style={{ padding:'14px 18px', borderBottom:'1px solid var(--border)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-dim)' }}>Page Headings — caravannestluxuryhomestay.in</span>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--negative)' }}>5 × H1 Tags ⚠</span>
        </div>
        <div style={{ padding:'8px 0' }}>
          {HEADINGS_DATA.map((h, i) => (
            <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'12px', padding:'9px 18px', borderBottom:'1px solid rgba(58,52,54,0.35)' }}>
              <HeadingTag tag={h.tag} issue={h.tag === 'H1' && h.issue} />
              <span style={{ fontSize:'12.5px', color: h.tag === 'H1' && h.issue ? 'var(--negative)' : 'var(--text-muted)', lineHeight:1.4 }}>{h.text}</span>
              {h.tag === 'H1' && h.issue && (
                <span style={{ marginLeft:'auto', fontFamily:'var(--font-mono)', fontSize:'9.5px', color:'var(--negative)', letterSpacing:'0.06em', whiteSpace:'nowrap', opacity:0.8 }}>DUPLICATE H1</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Images Audit */}
      <SectionHeader icon="🖼️" title="Images Audit (10 Total)" />
      <div className="data-table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Image Path</th>
              <th>Dimensions</th>
              <th>Alt Text</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {IMAGES_DATA.map((img, i) => (
              <tr key={i}>
                <td style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-dim)', maxWidth:'280px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                  .../{img.src}
                </td>
                <td><span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-dim)' }}>{img.dims}</span></td>
                <td>
                  {img.label
                    ? <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-muted)' }}>{img.label}</span>
                    : <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--negative)' }}>Missing</span>
                  }
                </td>
                <td>
                  <span className={`rank-badge ${img.label ? 'good' : 'poor'}`}>
                    {img.label ? 'OK' : 'Fix'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Insight */}
      <div style={{ marginTop:'16px' }} className="insight-box">
        <div className="insight-label">⚠ Insight</div>
        <p className="insight-text">2 images are missing alt text entirely. Alt text is critical for image search visibility and accessibility compliance. Add descriptive alt attributes to all images immediately.</p>
      </div>

      <hr className="section-divider" />

      {/* Executive Summary */}
      <SectionHeader icon="📊" title="Executive SEO Summary" />

      {/* Health Scores */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px', marginBottom:'24px' }}>
        <StatPill label="Site Health" value="77%" color="var(--warning)" subtext="Overall crawl score" />
        <StatPill label="AI Search Health" value="89%" color="var(--positive)" subtext="AI readiness score" />
        <StatPill label="Pages Crawled" value="7" color="var(--text-primary)" subtext="Out of 100-page limit" />
        <StatPill label="Total Issues" value="40" color="var(--negative)" subtext="9 errors · 26 warnings · 5 notices" />
      </div>

      {/* Errors */}
      <div className="breakdown-card" style={{ marginBottom:'16px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(229,62,62,0.07)', borderBottom:'1px solid rgba(229,62,62,0.2)' }}>
          <span style={{ color:'var(--negative)' }}>❌</span>
          High Priority Errors <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--negative)', marginLeft:'auto' }}>9 Total</span>
        </div>
        <div style={{ overflowX:'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Issue</th>
                <th>Count</th>
                <th>Impact</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {SEO_ERRORS.map((e, i) => (
                <tr key={i}>
                  <td style={{ fontWeight:600, color:'var(--text-primary)' }}>{e.issue}</td>
                  <td><span className="rank-badge poor">{e.count}</span></td>
                  <td><span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--negative)' }}>{e.impact}</span></td>
                  <td style={{ fontSize:'12px', color:'var(--text-dim)' }}>{e.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Warnings */}
      <div className="breakdown-card" style={{ marginBottom:'16px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(245,166,35,0.07)', borderBottom:'1px solid rgba(245,166,35,0.2)' }}>
          <span style={{ color:'var(--warning)' }}>⚠</span>
          Medium Priority Warnings <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--warning)', marginLeft:'auto' }}>26 Total</span>
        </div>
        <ul className="breakdown-list">
          {SEO_WARNINGS.map((w, i) => (
            <li key={i} className="breakdown-item">
              <span className="breakdown-icon warn">⚠</span>
              <div className="breakdown-text">
                <div className="breakdown-item-title">{w.label} <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--warning)', marginLeft:'6px' }}>× {w.count}</span></div>
                <div className="breakdown-item-desc">{w.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Notices */}
      <div className="breakdown-card" style={{ marginBottom:'24px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px' }}>
          <span style={{ color:'var(--text-dim)' }}>ℹ</span>
          Low Priority Notices <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-dim)', marginLeft:'auto' }}>5 Total</span>
        </div>
        <ul className="breakdown-list">
          {SEO_NOTICES.map((n, i) => (
            <li key={i} className="breakdown-item">
              <span className="breakdown-icon" style={{ color:'var(--text-dim)' }}>ℹ</span>
              <div className="breakdown-text">
                <div className="breakdown-item-title">{n.label} <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-dim)', marginLeft:'6px' }}>× {n.count}</span></div>
                <div className="breakdown-item-desc">{n.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Recommendations */}
      <SectionHeader icon="🛠️" title="Key Recommendations" />
      <div className="breakdown-grid">
        {PRIORITY_RECOMMENDATIONS.map((r, i) => (
          <div key={i} className="breakdown-card">
            <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ background:'var(--accent)', color:'#fff', width:'22px', height:'22px', borderRadius:'50%', display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:'11px', flexShrink:0 }}>{r.num}</span>
              {r.title}
            </div>
            <div style={{ padding:'16px 18px', fontSize:'13px', color:'var(--text-dim)', lineHeight:1.65 }}>{r.desc}</div>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── TAB: LOCAL VISIBILITY ───────────────────────────────────
function LocalVisibility() {
  return (
    <div className="tab-placeholder">
      <div className="tab-placeholder-icon">🗺️</div>
      <div className="tab-placeholder-title">Local Visibility Report</div>
      <div className="tab-placeholder-sub">Citation consistency & local pack analysis — coming soon</div>
    </div>
  )
}

// ─── TAB: BACKLINKS ──────────────────────────────────────────
function Backlinks() {
  return (
    <>
      {/* Domain Authority */}
      <SectionHeader icon="🔗" title="Backlink Profile & Domain Authority" />

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'14px', marginBottom:'24px' }}>
        <StatPill label="Domain Rating" value="0" color="var(--negative)" subtext="Ahrefs DR — No authority" />
        <StatPill label="URL Rating" value="0" color="var(--negative)" subtext="Individual page strength" />
        <StatPill label="Backlinks Found" value="None" color="var(--negative)" subtext="caravannestluxuryhomestay.in" />
      </div>

      <div className="insight-box" style={{ marginBottom:'28px' }}>
        <div className="insight-label">⚠ Critical Issue</div>
        <p className="insight-text">
          There are <strong style={{ color:'var(--negative)' }}>no backlinks</strong> in the index for caravannestluxuryhomestay.in.
          A Domain Rating of 0 means no external websites are linking to this domain — this severely limits organic search authority and competitive positioning. A structured link-building campaign is urgently needed.
        </p>
      </div>

      <hr className="section-divider" />

      {/* Backlink Campaign Report */}
      <SectionHeader icon="📋" title="Backlink Campaign Report" />
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'var(--text-dim)', marginBottom:'20px' }}>
        Medical Tourism &amp; Homestay — Kerala &nbsp;·&nbsp; Prepared by Raphael Production House | March 2026
      </div>

      {/* Overview Stats */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px', marginBottom:'28px' }}>
        <StatPill label="Total Platforms" value="18" color="var(--text-primary)" subtext="Across all categories" />
        <StatPill label="Expected Backlinks" value="14–21" color="var(--positive)" subtext="Estimated range" />
        <StatPill label="Categories" value="3" color="var(--accent-light)" subtext="Blog · Community · Listings" />
        <StatPill label="Cost" value="Free" color="var(--positive)" subtext="No paid placements" />
      </div>

      {/* 01 Blog Platforms */}
      <div className="breakdown-card" style={{ marginBottom:'16px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(91,35,51,0.07)', borderBottom:'1px solid rgba(91,35,51,0.2)' }}>
          <span style={{ background:'var(--accent)', color:'#fff', width:'22px', height:'22px', borderRadius:'50%', display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:'11px', flexShrink:0 }}>01</span>
          Blog-Style Platforms
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--accent-light)', marginLeft:'auto' }}>High-quality backlinks · 6–8 links expected</span>
        </div>
        <div style={{ padding:'14px 18px 6px', fontSize:'13px', color:'var(--text-muted)', lineHeight:1.6, marginBottom:'8px' }}>
          Premium-looking editorial backlinks from high-DA blogging platforms. Create 6–8 articles across these platforms covering medical tourism and recovery stays in Kerala.
        </div>
        <div style={{ overflowX:'auto' }}>
          <table className="data-table">
            <thead>
              <tr><th>Platform</th><th>Type</th><th>Links</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Tripoto</strong></td><td>Travel blog</td><td>1–2</td><td>Strong for travel &amp; medical tourism audiences in India</td></tr>
              <tr><td><strong>Medium</strong></td><td>Blog</td><td>1–2</td><td>High DA, international reach, good for long-form content</td></tr>
              <tr><td><strong>Vocal Media</strong></td><td>Blog</td><td>1–2</td><td>Monetisable platform, good for health &amp; wellness niches</td></tr>
              <tr><td><strong>WordPress.com</strong></td><td>Blog</td><td>1–2</td><td>Self-hosted quality feel, permanent indexed content</td></tr>
              <tr><td><strong>Blogger</strong></td><td>Blog</td><td>1–2</td><td>Google-owned, fast indexing, dofollow links possible</td></tr>
            </tbody>
          </table>
        </div>
        <div style={{ padding:'14px 18px' }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-dim)', marginBottom:'8px' }}>Article Topics</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
            {['Medical tourism stay in Kerala','Recovery stay near hospitals','Homestay vs hotel for patients','Ayurveda healing stays','Affordable medical stay Kerala'].map((t,i)=>(
              <span key={i} style={{ background:'rgba(91,35,51,0.1)', border:'1px solid rgba(91,35,51,0.25)', borderRadius:'20px', padding:'4px 12px', fontSize:'11px', color:'var(--accent-light)', fontFamily:'var(--font-mono)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 02 Community Platforms */}
      <div className="breakdown-card" style={{ marginBottom:'16px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(56,161,105,0.07)', borderBottom:'1px solid rgba(56,161,105,0.2)' }}>
          <span style={{ background:'#38A169', color:'#fff', width:'22px', height:'22px', borderRadius:'50%', display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:'11px', flexShrink:0 }}>02</span>
          Community Platforms
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'#38A169', marginLeft:'auto' }}>Support signals &amp; referral traffic · 3–5 links expected</span>
        </div>
        <div style={{ padding:'14px 18px 6px', fontSize:'13px', color:'var(--text-muted)', lineHeight:1.6, marginBottom:'8px' }}>
          Answer real questions on Quora and Reddit threads related to medical stays, Ayurveda, and healthcare tourism in Kerala. Add your link contextually — not as spam.
        </div>
        <div style={{ overflowX:'auto' }}>
          <table className="data-table">
            <thead>
              <tr><th>Platform</th><th>Type</th><th>Links</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Quora</strong></td><td>Q&amp;A</td><td>2–3</td><td>Search for: 'medical stay Kerala', 'Ayurveda homestay India', 'patient accommodation Kochi'</td></tr>
              <tr><td><strong>Reddit</strong></td><td>Forum</td><td>1–2</td><td>Relevant subreddits: r/Kerala, r/IndiaTravel, r/MedicalTourism, r/Ayurveda</td></tr>
            </tbody>
          </table>
        </div>
        <div style={{ margin:'14px 18px', padding:'12px 16px', background:'rgba(245,166,35,0.07)', border:'1px solid rgba(245,166,35,0.2)', borderRadius:'8px', fontSize:'12px', color:'var(--text-muted)', lineHeight:1.6 }}>
          <strong style={{ color:'var(--warning)' }}>💡 Tip:</strong> Contribute genuinely useful answers (5–8 sentences minimum) before adding any link. Links added too early or without context get flagged.
        </div>
      </div>

      {/* 03 Business Listings */}
      <div className="breakdown-card" style={{ marginBottom:'24px' }}>
        <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(74,144,184,0.07)', borderBottom:'1px solid rgba(74,144,184,0.2)' }}>
          <span style={{ background:'#4A90B8', color:'#fff', width:'22px', height:'22px', borderRadius:'50%', display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:'11px', flexShrink:0 }}>03</span>
          Business Listings
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'#4A90B8', marginLeft:'auto' }}>Base SEO citations · 5–8 links expected</span>
        </div>
        <div style={{ padding:'14px 18px 6px', fontSize:'13px', color:'var(--text-muted)', lineHeight:1.6, marginBottom:'8px' }}>
          Business directory listings build NAP (Name, Address, Phone) consistency — a core local SEO signal. Two listings are already live. Four new ones need to be added.
        </div>
        <div style={{ overflowX:'auto' }}>
          <table className="data-table">
            <thead>
              <tr><th>Platform</th><th>Type</th><th>Links</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Justdial</strong></td><td>Directory</td><td>1</td><td>✓ Already live — verify info is current</td></tr>
              <tr><td><strong>Facebook</strong></td><td>Social</td><td>1</td><td>✓ Already live — ensure website link is set</td></tr>
              <tr><td><strong>Sulekha</strong></td><td>Directory</td><td>1–2</td><td>Strong local reach in South India, healthcare category available</td></tr>
              <tr><td><strong>IndiaMART</strong></td><td>B2B</td><td>1</td><td>High DA, good for institutional/hospital referral traffic</td></tr>
              <tr><td><strong>TradeIndia</strong></td><td>B2B</td><td>1</td><td>Secondary B2B directory, quick to set up</td></tr>
              <tr><td><strong>Hotfrog</strong></td><td>Directory</td><td>1</td><td>International directory, passes a clean dofollow link</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Final Backlink Count */}
      <SectionHeader icon="📊" title="Final Backlink Count" />
      <div className="data-table-card">
        <table className="data-table">
          <thead>
            <tr><th>Category</th><th>Platforms</th><th>Min Links</th><th>Max Links</th></tr>
          </thead>
          <tbody>
            <tr><td>Blog-style platforms</td><td>5</td><td>6</td><td>8</td></tr>
            <tr><td>Community platforms</td><td>2</td><td>3</td><td>5</td></tr>
            <tr><td>Business listings</td><td>6</td><td>5</td><td>8</td></tr>
            <tr style={{ fontWeight:700, background:'rgba(91,35,51,0.06)' }}>
              <td><strong>Total</strong></td><td><strong>13</strong></td>
              <td><strong style={{ color:'var(--positive)' }}>14</strong></td>
              <td><strong style={{ color:'var(--positive)' }}>21</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

// ─── TAB: CONTACT US ─────────────────────────────────────────
function ContactUs() {
  return (
    <div className="tab-placeholder">
      <div className="tab-placeholder-icon">✉️</div>
      <div className="tab-placeholder-title">Get in Touch</div>
      <div className="tab-placeholder-sub">Contact Raphael Production House for a full strategy session</div>
    </div>
  )
}

// ─── TAB: GEO AUDIT ──────────────────────────────────────────
function GeoAudit() {
  return (
    <>
      <SectionHeader icon="🌍" title="Generative Engine Optimization (GEO)" />
      
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'14px', marginBottom:'24px' }}>
        <StatPill label="GEO Score" value="2/10" color="var(--negative)" subtext="Needs Work" />
        <StatPill label="E-E-A-T" value="Poor" color="var(--negative)" subtext="Missing trust signals" />
        <StatPill label="Entity Graph" value="Weak" color="var(--negative)" subtext="No structured depth" />
      </div>

      <div className="insight-box" style={{ marginBottom:'28px' }}>
        <div className="insight-label">ℹ What is GEO?</div>
        <p className="insight-text">
          GEO optimizes content to be cited by AI search engines like Google AI Overviews, Perplexity, and ChatGPT. These engines synthesize answers from multiple sources and reward <strong>E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trustworthiness), factual density, and entity clarity.
        </p>
      </div>

      {GEO_ASSESSMENT.map((group, idx) => (
        <div key={idx} className="breakdown-card" style={{ marginBottom:'16px' }}>
          <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(74,144,184,0.07)', borderBottom:'1px solid rgba(74,144,184,0.2)' }}>
            <span style={{ color:'#4A90B8' }}>{idx === 0 ? '👤' : idx === 1 ? '🧠' : '⚙️'}</span>
            {group.group}
          </div>
          <div style={{ overflowX:'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>Status</th>
                  <th>Finding</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((item, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight:600, color:'var(--text-primary)' }}>{item.label}</td>
                    <td>
                      <span className={`rank-badge ${item.status === 'ok' ? 'good' : item.status === 'warn' ? 'warning' : 'poor'}`}>
                        {item.value}
                      </span>
                    </td>
                    <td style={{ fontSize:'12px', color:'var(--text-dim)' }}>{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  )
}

// ─── TAB: AEO AUDIT ──────────────────────────────────────────
function AeoAudit() {
  return (
    <>
      <SectionHeader icon="🎙️" title="Answer Engine Optimization (AEO)" />
      
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'14px', marginBottom:'24px' }}>
        <StatPill label="AEO Score" value="2/10" color="var(--negative)" subtext="Needs Work" />
        <StatPill label="Snippet Ready" value="0%" color="var(--negative)" subtext="No extracted formats" />
        <StatPill label="Voice Search" value="Poor" color="var(--negative)" subtext="Conversational gap" />
      </div>

      <div className="insight-box" style={{ marginBottom:'28px' }}>
        <div className="insight-label">ℹ What is AEO?</div>
        <p className="insight-text">
          Answer Engine Optimization (AEO) helps search engines and voice assistants extract direct, concise answers from a page. Google's Featured Snippets, People Also Ask boxes, and Voice Search rely on question-based headings, concise answers, and FAQ schema.
        </p>
      </div>

      {AEO_ASSESSMENT.map((group, idx) => (
        <div key={idx} className="breakdown-card" style={{ marginBottom:'16px' }}>
          <div className="breakdown-card-title" style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(245,166,35,0.07)', borderBottom:'1px solid rgba(245,166,35,0.2)' }}>
            <span style={{ color:'var(--warning)' }}>{idx === 0 ? '📝' : idx === 1 ? '📋' : '🔊'}</span>
            {group.group}
          </div>
          <div style={{ overflowX:'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>Status</th>
                  <th>Finding</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((item, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight:600, color:'var(--text-primary)' }}>{item.label}</td>
                    <td>
                      <span className={`rank-badge ${item.status === 'ok' ? 'good' : item.status === 'warn' ? 'warning' : 'poor'}`}>
                        {item.value}
                      </span>
                    </td>
                    <td style={{ fontSize:'12px', color:'var(--text-dim)' }}>{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  )
}

// ─── TAB ROUTER ──────────────────────────────────────────────
function TabContent({ tab }) {
  switch (tab) {
    case 'GMB Profile':     return <GmbProfile />
    case 'Competition':     return <Competition />
    case 'Schema Audit':    return <SchemaAudit />
    case 'GEO Audit':       return <GeoAudit />
    case 'AEO Audit':       return <AeoAudit />
    case 'Local Visibility':return <LocalVisibility />
    case 'Backlinks':       return <Backlinks />
    case 'Contact Us':      return <ContactUs />
    default:                return null
  }
}

// ─── MAIN APP ─────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState('GMB Profile')

  const today = new Date(2026, 2, 18)
  const dateStr = today.toLocaleDateString('en-GB', { day:'2-digit', month:'long', year:'numeric' })

  return (
    <>
      <div className="dashboard-wrapper">
        {/* TOP KICKER */}
        <div className="top-kicker">
          <span>Raphael Production House</span>{' · '}Digital PR &amp; Local SEO Audit
        </div>

        {/* HEADER */}
        <header className="header">
          <div className="header-left">
            <div className="header-logo">
              <div className="header-logo-placeholder">R</div>
            </div>
            <div className="header-title-block">
              <div className="header-domain">caravannestluxuryhomestay.in</div>
              <div className="header-subtitle">Complete Technical &amp; Local SEO Diagnostic</div>
            </div>
          </div>
          <div className="header-right">
            <div className="header-date">{dateStr}</div>
            <div className="header-metrics">DR: 0 · Completion: 62%</div>
          </div>
        </header>
      </div>

      {/* NAV BAR */}
      <div style={{ position:'sticky', top:0, zIndex:100, background:'#231F20', borderBottom:'1px solid #3A3436' }}>
        <div className="dashboard-wrapper" style={{ padding:0 }}>
          <nav className="nav-bar" style={{ borderBottom:'none', padding:'0 24px' }}>
            <ul className="nav-tabs">
              {TABS.map(tab => (
                <li key={tab}
                  className={`nav-tab${activeTab === tab ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                  role="button" tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setActiveTab(tab)}
                >{tab}</li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="dashboard-wrapper">
        <main className="main-content">
          <TabContent tab={activeTab} />
        </main>
      </div>

      {/* FOOTER */}
      <footer>
        <p className="footer-text">© Raphael Production House since 2023</p>
      </footer>
    </>
  )
}
