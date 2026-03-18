import { useState } from 'react'
import './index.css'

// ─── TABS ────────────────────────────────────────────────────
const TABS = [
  'GMB Profile',
  'Competition',
  'Schema Audit',
  'Local Visibility',
  'Backlinks',
  'Contact Us',
]

// ─── GMB PROFILE DATA (REAL — Caravan Nest Luxury Home Stay) ─
const PROFILE_COMPLETENESS = [
  { label: 'Primary Category', detail: 'Home Stay', done: true },
  { label: 'Additional Categories', detail: 'Not assigned', done: false },
  { label: 'Address', detail: 'J complex, Road, SH7, Manjadi, Thiruvalla, Kerala 689105', done: true },
  { label: 'Website', detail: 'caravannestluxuryhomestay.in', done: true },
  { label: 'Phone Number', detail: '+919072032010', done: true },
  { label: 'Work Hours', detail: 'Not provided', done: false },
  { label: 'Photos', detail: '30 photos uploaded', done: true },
  { label: 'Profile Claimed', detail: 'Business profile is claimed', done: true },
]

const RECENT_POSTS = [
  { age: '2 months ago', text: 'Discover your perfect getaway at Caravan Nest Luxury Home Stay where comfort meets adventure. Immerse yourself in serene surroundings and beautifully designed spaces, reconnect with nature and create unforgettable memories. Book your stay today.' },
  { age: '2 months ago', text: 'Planning a vacation? Choose Caravan Nest Luxury Home Stay. Relax in fully furnished rooms, enjoy cozy living areas, modern comforts, and warm hospitality for a truly pleasant and restful stay.' },
  { age: '3 months ago', text: 'Planning a short city break or a longer stay? Caravan Nest Luxury Home Stay in Thiruvalla offers a cozy and luxurious experience with a warm and welcoming atmosphere. Contact us today to book your stay.' },
]

const GBP_RECOMMENDATIONS = [
  'Assign Additional Categories to your Business Profile.',
  'Add business work hours to your Business Profile.',
  'Encourage the generation of more reviews for your business.',
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
          <div className="ring-title">Profile Completeness</div>
          <CircularRing score={58} maxScore={100} size={160} strokeWidth={12} />
          <div style={{ fontFamily:'var(--font-sans)', fontSize:'12.5px', color:'var(--warning)', textAlign:'center', lineHeight:1.4 }}>
            Your business profile could be better
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
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--warning)', marginLeft:'auto' }}>3 Actions</span>
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
        <div className="checklist-summary-row">
          <div className="checklist-pct">58%</div>
          <div className="checklist-meta">
            <div className="checklist-meta-label">Profile Completeness</div>
            <div className="checklist-incomplete">{incomplete} / {total} Incomplete</div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'var(--text-dim)', marginTop:'4px' }}>Generated: 18th Mar 5:55PM UTC</div>
          </div>
        </div>
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
        {[
          { num:'1', title:'Fix Duplication', desc:'Add rel="canonical" tags to preferred pages or use 301 redirects to consolidate duplicate URLs.' },
          { num:'2', title:'Improve Load Speed', desc:'Minify CSS and JS files by removing unnecessary white space, comments, and lines.' },
          { num:'3', title:'Repair Broken Paths', desc:'Locate the specific page returning 4XX and redirect to a live page. Create sitemap.xml and link it in robots.txt.' },
          { num:'4', title:'Content Optimization', desc:'Write unique meta descriptions for the 4 missing pages and ensure each page has a healthy amount of original text vs code.' },
        ].map((r, i) => (
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

// ─── TAB ROUTER ──────────────────────────────────────────────
function TabContent({ tab }) {
  switch (tab) {
    case 'GMB Profile':     return <GmbProfile />
    case 'Competition':     return <Competition />
    case 'Schema Audit':    return <SchemaAudit />
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
            <div className="header-metrics">DR: 0 · Completion: 58%</div>
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
