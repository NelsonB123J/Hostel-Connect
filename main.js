
/* ============================================
   MOCK DATA
   ============================================ */
const HOSTELS = [
  {
    id: 1,
    name: "Excel Student Lodge",
    university: "UNILAG",
    price: 180000,
    distance: 0.4,
    verified: true,
    rating: 4.8,
    reviews: 42,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description: "A well-maintained hostel located just 400m from the main UNILAG gate. Enjoy 24/7 security, constant electricity from our industrial generator, and fast WiFi.",
    facilities: ["WiFi", "24hr Security", "Running Water", "Electricity", "Kitchen", "Laundry"],
    location: "3 Abeke Road, Akoka, Yaba, Lagos",
    featured: true,
    studentReviews: [
      { name: "Adaeze O.", rating: 5, date: "Nov 2025", text: "Best hostel I've stayed in near UNILAG. Very clean, security is tight, and the WiFi never goes down." },
      { name: "Emeka T.", rating: 5, date: "Oct 2025", text: "Moved in last semester and I have zero complaints. The caretaker is responsive and helpful." },
      { name: "Fatima B.", rating: 4, date: "Sep 2025", text: "Great location and very affordable. The kitchen is a bonus." },
    ]
  },
  {
    id: 2,
    name: "Grace Hostel",
    university: "UNN",
    price: 120000,
    distance: 0.7,
    verified: true,
    rating: 4.5,
    reviews: 28,
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description: "Affordable and clean student accommodation near UNN. Running water, gen backup, and friendly management make this a top choice for freshers.",
    facilities: ["Running Water", "Electricity", "24hr Security", "Kitchen"],
    location: "7 Nsukka Road, University of Nigeria, Enugu State",
    featured: true,
    studentReviews: [
      { name: "Chisom A.", rating: 5, date: "Oct 2025", text: "Super affordable and very close to campus. I recommend it for freshers." },
      { name: "Ike M.", rating: 4, date: "Sep 2025", text: "Clean environment. Management is strict but in a good way." },
    ]
  },
  {
    id: 3,
    name: "Zaria Villa Student Suites",
    university: "ABU",
    price: 95000,
    distance: 1.2,
    verified: true,
    rating: 4.6,
    reviews: 19,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2029721/pexels-photo-2029721.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3288104/pexels-photo-3288104.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description: "Modern student suites near ABU Zaria. Spacious rooms, parking space available, and a quiet environment ideal for focused academic work.",
    facilities: ["WiFi", "Parking", "Running Water", "Electricity", "24hr Security"],
    location: "5 Samaru Road, Zaria, Kaduna State",
    featured: true,
    studentReviews: [
      { name: "Ahmed K.", rating: 5, date: "Nov 2025", text: "Very quiet environment. Great for serious students. Parking is a big plus." },
      { name: "Ngozi P.", rating: 4, date: "Oct 2025", text: "Comfortable and affordable. WiFi is stable." },
    ]
  },
  {
    id: 4,
    name: "Ibadan Scholar's Haven",
    university: "UI",
    price: 150000,
    distance: 0.9,
    verified: false,
    rating: 4.1,
    reviews: 12,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description: "Comfortable student accommodation near the University of Ibadan. Clean rooms, friendly environment, and regular water supply.",
    facilities: ["Running Water", "Electricity", "Kitchen"],
    location: "Bodija, Ibadan, Oyo State",
    featured: false,
    studentReviews: [
      { name: "Dayo A.", rating: 4, date: "Sep 2025", text: "Good place but verification pending. Very close to UI gate." },
    ]
  },
  {
    id: 5,
    name: "FUTA Tech Residences",
    university: "FUTA",
    price: 110000,
    distance: 0.5,
    verified: true,
    rating: 4.7,
    reviews: 33,
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description: "Purpose-built student residences just 500m from FUTA main campus. Ideal for engineering and science students. High-speed internet available.",
    facilities: ["WiFi", "24hr Security", "Running Water", "Electricity", "Laundry", "CCTV"],
    location: "Akure-Owo Road, Akure, Ondo State",
    featured: false,
    studentReviews: [
      { name: "Seun D.", rating: 5, date: "Nov 2025", text: "The CCTV and security is top-notch. I feel safe here." },
      { name: "Bello A.", rating: 5, date: "Oct 2025", text: "Best hostel near FUTA by far. WiFi is fast even during exam periods." },
      { name: "Funke O.", rating: 4, date: "Sep 2025", text: "Great overall. Laundry facility saves a lot of time." },
    ]
  },
  {
    id: 6,
    name: "Surulere Student Flats",
    university: "UNILAG",
    price: 220000,
    distance: 2.1,
    verified: false,
    rating: 3.9,
    reviews: 7,
    image: "https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description: "Self-contained flats near UNILAG. A bit further from campus but more spacious and private. Good for final-year students who need quiet.",
    facilities: ["Running Water", "Electricity", "Parking"],
    location: "Surulere, Lagos",
    featured: false,
    studentReviews: [
      { name: "Tolu A.", rating: 4, date: "Aug 2025", text: "Very spacious and private. The commute to school is manageable." },
    ]
  },
  {
    id: 7,
    name: "OAU Ife Premier Suites",
    university: "OAU",
    price: 130000,
    distance: 0.6,
    verified: true,
    rating: 4.9,
    reviews: 56,
    image: "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3288104/pexels-photo-3288104.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description: "Top-rated hostel near OAU Ile-Ife. Beautifully maintained, with a lovely environment, 24/7 power and excellent security. Students love it here.",
    facilities: ["WiFi", "24hr Security", "Running Water", "Electricity", "Kitchen", "Laundry", "CCTV", "Parking"],
    location: "Ile-Ife, Osun State",
    featured: false,
    studentReviews: [
      { name: "Kemi A.", rating: 5, date: "Nov 2025", text: "Perfect hostel. Literally no complaints. Best decision I made as a fresher." },
      { name: "Wale B.", rating: 5, date: "Oct 2025", text: "The management is fantastic and the place is always clean." },
      { name: "Amina K.", rating: 5, date: "Sep 2025", text: "HostelConnect really delivered on this one. 10/10." },
    ]
  },
  {
    id: 8,
    name: "LASU Gate Chambers",
    university: "LASU",
    price: 85000,
    distance: 0.3,
    verified: true,
    rating: 4.3,
    reviews: 21,
    image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description: "Very affordable and extremely close to LASU main gate. Popular with freshers and 100-level students. Basic but clean and safe.",
    facilities: ["24hr Security", "Running Water", "Electricity"],
    location: "Ojo, Lagos State",
    featured: false,
    studentReviews: [
      { name: "Zainab R.", rating: 4, date: "Oct 2025", text: "Best value for money near LASU. Simple but secure." },
      { name: "Chidi O.", rating: 4, date: "Sep 2025", text: "Cheapest verified hostel I found. Great for freshers on a budget." },
    ]
  },
];

/* ============================================
   ROUTER / PAGE SYSTEM
   ============================================ */
let currentPage = 'home';
let currentDetailId = null;

function navigate(page, data = null) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`page-${page}`);
  if (!target) return;
  target.classList.add('active');
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });

  closeNav();

  if (page === 'home') renderFeatured();
  if (page === 'listings') renderListings();
  if (page === 'detail' && data) {
    currentDetailId = data;
    renderDetail(data);
  }
}

/* ============================================
   GLOBAL CLICK DELEGATION
   ============================================ */
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-page]');
  if (el) {
    e.preventDefault();
    const page = el.dataset.page;
    const id = el.dataset.id ? parseInt(el.dataset.id) : null;
    if (page === 'detail' && id) navigate('detail', id);
    else navigate(page);
  }
});

/* ============================================
   NAVBAR
   ============================================ */
const menuBtn = document.getElementById('nav-menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.classList.toggle('open', isOpen);
});

function closeNav() {
  navLinks.classList.remove('open');
  menuBtn.classList.remove('open');
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  // show sticky cta only on home page after hero
  const stickyCta = document.getElementById('sticky-cta');
  if (currentPage === 'home') {
    stickyCta.style.display = window.scrollY > 400 ? 'block' : 'none';
  } else {
    stickyCta.style.display = 'none';
  }
});

/* ============================================
   RENDER HELPERS
   ============================================ */
function starsHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star${i <= Math.round(rating) ? '' : ' empty'}">★</span>`;
  }
  return html;
}

function formatPrice(p) {
  return '₦' + p.toLocaleString('en-NG');
}

function hostelCardHTML(h) {
  return `
    <div class="hostel-card" data-id="${h.id}">
      <div class="card-img-wrap">
        <img class="card-img" src="${h.image}" alt="${h.name}" loading="lazy" />
        ${h.verified ? `<div class="card-verified-badge"><span class="dot"></span> Verified</div>` : ''}
        <div class="card-uni-tag">${h.university}</div>
      </div>
      <div class="card-body">
        <div class="card-name">${h.name}</div>
        <div class="card-meta">
          <div class="card-meta-item"><span class="card-meta-icon">📍</span>${h.distance}km from campus</div>
          <div class="card-meta-item"><span class="card-meta-icon">🏫</span>${h.university}</div>
        </div>
        <div class="card-price">${formatPrice(h.price)}<span>/year</span></div>
        <p class="card-desc">${h.description}</p>
        <div class="card-stars">
          ${starsHTML(h.rating)}
          <span class="rating-count">${h.rating} (${h.reviews} reviews)</span>
        </div>
        <div class="card-footer">
          <button class="btn btn-orange card-btn" data-page="detail" data-id="${h.id}">View Details</button>
        </div>
      </div>
    </div>
  `;
}

/* ============================================
   FEATURED HOSTELS
   ============================================ */
function renderFeatured() {
  const el = document.getElementById('featured-hostels');
  if (!el) return;
  const featured = HOSTELS.filter(h => h.featured);
  el.innerHTML = featured.map(hostelCardHTML).join('');
}

/* ============================================
   LISTINGS
   ============================================ */
let filteredHostels = [...HOSTELS];

function getFilters() {
  const university = document.getElementById('filter-university')?.value || '';
  const price = parseInt(document.getElementById('filter-price')?.value || 500000);
  const distance = parseFloat(document.getElementById('filter-distance')?.value || 0);
  const verifiedOnly = document.getElementById('filter-verified')?.checked || false;
  const facilities = [...document.querySelectorAll('.facility-check:checked')].map(c => c.value);
  return { university, price, distance, verifiedOnly, facilities };
}

function applyFilters() {
  const { university, price, distance, verifiedOnly, facilities } = getFilters();
  const sort = document.getElementById('sort-select')?.value || 'default';

  filteredHostels = HOSTELS.filter(h => {
    if (university && h.university !== university) return false;
    if (h.price > price) return false;
    if (distance && h.distance > distance) return false;
    if (verifiedOnly && !h.verified) return false;
    if (facilities.length && !facilities.every(f => h.facilities.includes(f))) return false;
    return true;
  });

  if (sort === 'price-asc') filteredHostels.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filteredHostels.sort((a, b) => b.price - a.price);
  else if (sort === 'distance') filteredHostels.sort((a, b) => a.distance - b.distance);
  else if (sort === 'rating') filteredHostels.sort((a, b) => b.rating - a.rating);

  renderListings();
}

function renderListings() {
  const grid = document.getElementById('hostel-grid');
  const count = document.getElementById('listings-count');
  const noResults = document.getElementById('no-results');
  if (!grid) return;

  const list = filteredHostels.length ? filteredHostels : HOSTELS;
  const showing = filteredHostels.length;

  if (showing === 0) {
    grid.innerHTML = '';
    noResults?.classList.remove('hidden');
    count.textContent = 'No hostels match your filters';
    return;
  }

  noResults?.classList.add('hidden');
  count.textContent = `Showing ${showing} hostel${showing !== 1 ? 's' : ''}`;
  grid.innerHTML = list.map(hostelCardHTML).join('');
}

/* ============================================
   FILTER CONTROLS
   ============================================ */
document.getElementById('apply-filters')?.addEventListener('click', () => {
  applyFilters();
  closeFilters();
});

document.getElementById('reset-filters')?.addEventListener('click', () => {
  document.getElementById('filter-university').value = '';
  document.getElementById('filter-price').value = 500000;
  document.getElementById('filter-distance').value = '';
  document.getElementById('filter-verified').checked = false;
  document.querySelectorAll('.facility-check').forEach(c => c.checked = false);
  updatePriceDisplay(500000);
  filteredHostels = [...HOSTELS];
  renderListings();
  closeFilters();
});

document.getElementById('filter-price')?.addEventListener('input', (e) => {
  updatePriceDisplay(e.target.value);
});

document.getElementById('sort-select')?.addEventListener('change', applyFilters);

function updatePriceDisplay(val) {
  const el = document.getElementById('price-display');
  if (el) el.textContent = `Up to ${formatPrice(parseInt(val))}`;
}

// Mobile filter toggle
document.getElementById('filter-toggle-btn')?.addEventListener('click', openFilters);
document.getElementById('filters-close')?.addEventListener('click', closeFilters);

let overlay = null;
function openFilters() {
  const panel = document.getElementById('filters-panel');
  panel?.classList.add('open');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'filters-overlay';
    overlay.addEventListener('click', closeFilters);
    document.body.appendChild(overlay);
  }
  overlay.classList.add('active');
}
function closeFilters() {
  document.getElementById('filters-panel')?.classList.remove('open');
  overlay?.classList.remove('active');
}

/* ============================================
   DETAIL PAGE
   ============================================ */
function renderDetail(id) {
  const h = HOSTELS.find(x => x.id === id);
  if (!h) return;

  const container = document.getElementById('detail-content');

  const galleryHTML = h.images.length >= 2 ? `
    <div class="detail-gallery-grid">
      <div class="detail-gallery-main"><img src="${h.images[0]}" alt="${h.name}" /></div>
      <div class="detail-gallery-side">
        ${h.images.slice(1, 3).map(img => `<img src="${img}" alt="${h.name}" />`).join('')}
      </div>
    </div>
  ` : `
    <div class="detail-gallery">
      <img src="${h.images[0]}" alt="${h.name}" />
    </div>
  `;

  const reviewsHTML = h.studentReviews.map(r => `
    <div class="review-item">
      <div class="review-header">
        <div class="reviewer-name">${r.name}</div>
        <div class="review-stars">${starsHTML(r.rating)}</div>
      </div>
      <div class="review-date">${r.date}</div>
      <div class="review-text">${r.text}</div>
    </div>
  `).join('');

  const facilitiesHTML = h.facilities.map(f => {
    const icons = { 'WiFi': '📶', '24hr Security': '🔐', 'Running Water': '💧', 'Electricity': '⚡', 'Kitchen': '🍳', 'Parking': '🚗', 'Laundry': '🧺', 'CCTV': '📹' };
    const highlight = ['WiFi', '24hr Security', 'Running Water', 'Electricity'].includes(f);
    return `<div class="facility-tag ${highlight ? 'highlight' : ''}">${icons[f] || '✓'} ${f}</div>`;
  }).join('');

  container.innerHTML = `
    <div style="max-width:1200px;margin:0 auto;padding:0 20px;">
      <div class="detail-back" data-page="listings">← Back to Listings</div>
    </div>
    <div class="detail-container">
      ${galleryHTML}

      <div class="detail-header">
        <div>
          <h1 class="detail-title">${h.name}</h1>
          <div class="detail-badges">
            ${h.verified ? `<div class="detail-verified-badge">✓ Physically Inspected & Verified</div>` : ''}
            <div class="detail-uni-badge">${h.university}</div>
          </div>
        </div>
        <div class="detail-price">${formatPrice(h.price)}<span>/year</span></div>
      </div>

      <div class="detail-meta-row">
        <div class="detail-meta-item">📍 ${h.location}</div>
        <div class="detail-meta-item">🏫 ${h.distance}km from ${h.university} campus</div>
        <div class="detail-meta-item">${starsHTML(h.rating)} ${h.rating} (${h.reviews} reviews)</div>
      </div>

      ${h.verified ? `
        <div class="verify-note">
          <span>🛡️</span>
          <div><strong>Verified Hostel</strong> — This hostel has been physically visited and inspected by the HostelConnect NG verification team. Our verification team visits listed hostels annually.</div>
        </div>
      ` : ''}

      <div class="detail-grid" style="margin-top:24px;">
        <div class="detail-card">
          <div class="detail-card-title">About This Hostel</div>
          <p class="detail-desc">${h.description}</p>
        </div>
        <div class="detail-card">
          <div class="detail-card-title">Facilities</div>
          <div class="facilities-list">${facilitiesHTML}</div>
        </div>
      </div>

      <div class="detail-card" style="margin-bottom:20px;">
        <div class="detail-card-title">Student Reviews (${h.studentReviews.length})</div>
        <div class="reviews-list">${reviewsHTML}</div>
      </div>

      <div class="detail-cta-bar">
        <div>
          <div class="detail-cta-price">${formatPrice(h.price)}<span>per year</span></div>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn btn-outline" data-page="listings">← Back</button>
          <button class="btn btn-orange btn-lg" id="request-booking-btn">Request Booking</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('request-booking-btn')?.addEventListener('click', () => {
    showBookingToast(h.name);
  });
}

function showBookingToast(name) {
  const existing = document.getElementById('booking-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'booking-toast';
  toast.style.cssText = `
    position:fixed; bottom:80px; left:50%; transform:translateX(-50%);
    background:#0d1f3c; border:1px solid #22c55e; border-radius:14px;
    padding:16px 24px; color:#f0f6ff; font-size:14px; font-weight:600;
    box-shadow:0 8px 32px rgba(0,0,0,0.5); z-index:1000;
    text-align:center; max-width:320px; width:90%;
    animation: slideUp 0.3s ease;
  `;
  toast.innerHTML = `✅ Booking request sent for <strong>${name}</strong>!<br/><span style="font-weight:400;color:#8ba5c8;font-size:12px;">The hostel owner will contact you shortly.</span>`;
  document.body.appendChild(toast);

  const style = document.createElement('style');
  style.textContent = `@keyframes slideUp { from { opacity:0; transform:translateX(-50%) translateY(20px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }`;
  document.head.appendChild(style);

  setTimeout(() => toast.remove(), 4000);
}

/* ============================================
   LIST HOSTEL FORM
   ============================================ */
document.getElementById('upload-area')?.addEventListener('click', () => {
  document.getElementById('form-images')?.click();
});

document.getElementById('form-images')?.addEventListener('change', (e) => {
  const preview = document.getElementById('upload-preview');
  preview.innerHTML = '';
  const files = [...e.target.files].slice(0, 5);
  files.forEach(file => {
    const url = URL.createObjectURL(file);
    const img = document.createElement('img');
    img.src = url;
    img.className = 'upload-preview-img';
    preview.appendChild(img);
  });
});

document.getElementById('list-hostel-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const btn = e.target.querySelector('[type="submit"]');
  btn.textContent = 'Submitting...';
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('list-form-card').classList.add('hidden');
    document.getElementById('form-success').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1200);
});

function validateForm() {
  const fields = [
    { id: 'form-name', errId: 'err-name', label: 'Hostel name is required' },
    { id: 'form-university', errId: 'err-university', label: 'Please select a university' },
    { id: 'form-location', errId: 'err-location', label: 'Location is required' },
    { id: 'form-price', errId: 'err-price', label: 'Price is required' },
    { id: 'form-distance', errId: 'err-distance', label: 'Distance is required' },
    { id: 'form-desc', errId: 'err-desc', label: 'Description is required' },
    { id: 'form-owner', errId: 'err-owner', label: 'Contact name is required' },
    { id: 'form-phone', errId: 'err-phone', label: 'Phone number is required' },
    { id: 'form-email', errId: 'err-email', label: 'Email address is required' },
  ];

  let valid = true;
  fields.forEach(({ id, errId, label }) => {
    const input = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!input?.value.trim()) {
      if (err) err.textContent = label;
      input?.classList.add('error-input');
      valid = false;
    } else {
      if (err) err.textContent = '';
      input?.classList.remove('error-input');
    }
  });

  const email = document.getElementById('form-email');
  const emailErr = document.getElementById('err-email');
  if (email?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailErr.textContent = 'Enter a valid email address';
    valid = false;
  }

  return valid;
}

// Clear error on input
document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('error-input');
    const errId = input.id.replace('form-', 'err-');
    const err = document.getElementById(errId);
    if (err) err.textContent = '';
  });
});

/* ============================================
   INIT
   ============================================ */
function init() {
  filteredHostels = [...HOSTELS];
  renderFeatured();

  // hide sticky cta initially
  const stickyCta = document.getElementById('sticky-cta');
  stickyCta.style.display = 'none';

  // add error input style
  const s = document.createElement('style');
  s.textContent = `.error-input { border-color: #ef4444 !important; }`;
  document.head.appendChild(s);
}

init();
