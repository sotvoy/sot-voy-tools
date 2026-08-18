# SOT VOY Tools
Free online tools for everyday use.

SOT VOY TOOLS — MASTER PROJECT PROMPT
1. PROJECT OVERVIEW
Build SOT VOY Tools, a professional, production-ready, SEO-focused web application containing a large collection of genuinely useful browser-based tools.
The goal is not to create a collection of random toy calculators.
The goal is to build a high-quality SaaS-style utility platform that can eventually scale from 20+ tools to 100–200+ tools, attract organic search traffic, provide excellent user experience, and eventually generate revenue through advertising and other legitimate monetization methods.
The website should feel like a serious modern internet product built by a professional team of:
Senior frontend engineers
Full-stack engineers
Product designers
UX researchers
SEO specialists
Accessibility specialists
Performance engineers
Content writers
It must not look like a generic AI-generated tools website.
2. CORE BUSINESS OBJECTIVE
Primary objectives:
Build useful tools.
Make them extremely easy to discover.
Make them extremely easy to use.
Build strong SEO foundations.
Create pages capable of ranking individually.
Build internal linking between related tools.
Create genuinely useful explanatory content.
Eventually monetize through advertising.
Keep the basic tools accessible without unnecessary account requirements.
Build an architecture capable of expanding to 100–200+ tools without becoming chaotic.
The website should prioritize:
Useful → Fast → Discoverable → Trustworthy → Beautiful → Monetizable
Do not sacrifice usability merely to insert advertisements.
3. CURRENT TECHNICAL CONSTRAINTS
The project is being developed primarily from an Android phone.
Available workflow:
Android phone
GitHub
Vercel
HTML
CSS
JavaScript
Therefore:
Do NOT assume:
PC
Mac
paid development software
expensive services
paid domain
complicated local development infrastructure
The project should remain practical for a phone-first development workflow.

4. IMPORTANT DEVELOPMENT PHILOSOPHY
Do not build 15 separate websites.
Build:
SOT VOY TOOLS
One expandable platform.
Initial categories:
TEXT TOOLS
Word Counter
Character Counter
Case Converter
Reading Time Calculator
Remove Duplicate Lines
CALCULATORS
Percentage Calculator
Age Calculator
Average Calculator
Discount Calculator
Date Difference Calculator
DEVELOPER TOOLS
JSON Formatter
Base64 Encoder
URL Encoder
Color Converter
Password Generator
Additional planned tools:
QR Code Generator
Countdown Timer
Unit Converter
Image Compressor
GPA Calculator
Random Number Picker
Random Name Picker
etc.
Initial target:
20+ tools
Long-term:
100–200+ tools
Architecture must therefore be expandable from day one.
5. HOMEPAGE IS THE CURRENT TOP PRIORITY
Do NOT rush into building all 20+ tools while the homepage remains unfinished.
The homepage must first become a polished product landing/discovery experience.
The homepage should communicate immediately:
What is SOT VOY Tools?
What can I do here?
Why should I use it?
Which tool should I use?
Why should I trust this website?
Where do I go next?
6. HOMEPAGE BRAND POSITIONING
Core concept:
SOT VOY TOOLS
Suggested positioning:
Simple tools. Serious momentum.
or similar original messaging.
The tone should be:
Professional
Human
Confident
Clear
Modern
Useful
Concise
Not corporate nonsense
Not AI-generated sounding
Not exaggerated
Not spammy
Avoid meaningless phrases such as:
"Revolutionize your productivity with our cutting-edge ecosystem."
Instead use clear human language.
Example direction:
The right tool. Right when you need it.
A focused collection of fast browser tools for the little jobs that interrupt your day — writing, calculating, formatting, converting, creating, and everything in between.
7. HOMEPAGE STRUCTURE
The homepage should be developed and QA-tested section by section.
Recommended structure:
HEADER
│
├── Logo
├── Tools
├── Categories
├── Why SOT VOY
├── How It Works
├── FAQ
├── Theme
└── Mobile Menu

HERO
│
├── Eyebrow
├── Main headline
├── Supporting content
├── Primary CTA
├── Secondary CTA
├── Trust/value indicators
└── Interactive product preview

QUICK FIND
│
└── "What are you here to do?"
    ├── Write
    ├── Calculate
    ├── Format
    ├── Convert
    └── Create

FEATURED TOOLS
│
├── Word Counter
├── QR Code Generator
├── Percentage Calculator
├── Countdown Timer
├── JSON Formatter
└── Password Generator

TOOL CATEGORIES
│
├── Text
├── Calculators
├── Developer
├── Generators
├── Image
└── Date & Time

WHY SOT VOY
│
├── Fast
├── Simple
├── Private/browser-first
└── Mobile-friendly

HOW IT WORKS
│
├── 01 Choose a tool
├── 02 Work instantly
└── 03 Finish and continue

FAQ

FINAL CTA

FOOTER

8. HERO MUST BE INTERACTIVE
The hero must NOT simply contain a decorative screenshot.
The product preview should demonstrate an actual tool.
Example:
Word Counter live preview
Show:
Write, paste, edit —
the numbers update as you work.
Then dynamically demonstrate:
Words       18
Characters  104
Reading     1 min
The preview should animate naturally.
It should communicate:
"This is what using SOT VOY Tools feels like."
Not:
"Here is a random fancy dashboard."
Eventually clicking the preview should lead to the actual Word Counter page.
9. SAAS VISUAL DIRECTION
The website should have a premium SaaS aesthetic.
Desired visual qualities:
Modern
Minimal
Premium
Clean
Deep visual hierarchy
Strong typography
Gradient accents
Subtle glass effects
Layered cards
Soft borders
Ambient lighting
Motion graphics
Product previews
Responsive layouts
Sophisticated whitespace
Subtle depth
Inspiration can come from modern SaaS/product design and Dribbble-style visual exploration.
However:
DO NOT COPY DESIGNS.
Use inspiration for:
layout ideas
spacing
interaction patterns
visual hierarchy
motion ideas
component composition
But create an original SOT VOY identity.
10. SVG ICON SYSTEM
Do NOT use emojis as UI icons.
No:
⚡
✓
✦
☀
☾
→
◉
⌁
for interface iconography.
Use meaningful SVG icons instead.
Examples:
Sun → SVG
Moon → SVG
Check → SVG
Arrow → SVG
Lightning → SVG
Mobile device → SVG
Text → SVG
Calculator → SVG
Code → SVG
Image → SVG
Calendar → SVG
Search → SVG
Menu → SVG
Close → SVG
Icons should be:
semantically meaningful
stylistically consistent
responsive
accessible
lightweight
visually balanced
Decorative icons should use:
HTML
aria-hidden="true"
when appropriate.

11. THEME SYSTEM
The website MUST support:
🌐 System
Follow the user's device/browser preference.
☀ Light
Always use the light theme.
🌙 Dark
Always use the dark theme.
Theme selection must:
actually work
persist
update immediately
avoid flashing where possible
work on Android
work on desktop
update accessible state
respect system preference
update when system preference changes while in System mode
The implementation should have one authoritative theme state, rather than conflicting body and html theme mechanisms.
12. MOBILE NAVIGATION
This has already caused bugs and therefore needs special attention.
The mobile navigation must:
actually open
actually close
animate smoothly
have a sufficiently large touch target
transform hamburger → X
update aria-expanded
update aria-hidden
close after navigation
close with Escape
restore focus appropriately
close when transitioning back to desktop
not overlap content incorrectly
work at small phone widths
work at tablet widths
The navbar must have proper spacing on narrow screens.
Do not cram:
LOGO   THEME   MENU
together.
Use deliberate responsive spacing.
13. RESPONSIVE REQUIREMENTS
The website must be designed for:
320px
360px
375px
390px
412px
430px
tablet
768px
850px
1024px
1280px
1440px+
large desktop
Do not simply make desktop smaller.
The layout must be responsive by design.
Check:
horizontal overflow
text wrapping
card widths
button widths
navbar
hero
grids
typography
spacing
animations
touch targets
footer
modal/popover positioning

14. ANIMATION SYSTEM
Animation should make the website feel alive without becoming annoying.
Use:
entrance animations
staggered reveals
hover transitions
card lift
subtle 3D movement
gradient movement
floating elements
product preview animation
navigation transitions
micro-interactions
button feedback
But avoid:
excessive bouncing
distracting movement
animation everywhere for no reason
expensive animations
animations that interfere with usability
Support:
prefers-reduced-motion
Users who request reduced motion should receive an appropriate reduced-motion experience.
15. CONTENT REQUIREMENT
All visible content should be:
original
meaningful
human-written
useful
grammatically correct
concise
informative
SEO-conscious without keyword stuffing
Every section should answer a real question.
Avoid generic AI filler.
For example, don't write:
"Our innovative platform empowers users to unlock unparalleled productivity."
Instead:
"Skip the setup. Pick a tool, do the task, and get back to what you were doing."
16. TOOL CARD DESIGN
Every tool card should communicate:
Tool name
What it does
Why someone would use it
Visual identity
Interactive preview where appropriate
CTA
Category
Example:
Word Counter
Count words, characters, sentences, and reading time instantly.
Button:
Open tool →
The arrow should be SVG.
17. PRODUCT PREVIEWS
Where appropriate, tool cards should show miniature functional demonstrations.
Examples:
Percentage Calculator
20% of 450
= 90
JSON Formatter
{
  "status": "ready"
}
QR Generator
Show a generated QR preview.
Password Generator
Show generated password strength.
Color Converter
Show:
#7C3AED
RGB
HSL
This is much stronger than static decorative graphics.
18. SEO ARCHITECTURE
SEO is a major business requirement.
Each actual tool should eventually have its own indexable page.
Example:
/tools/word-counter/
/tools/qr-code-generator/
/tools/percentage-calculator/
/tools/json-formatter/
Each page should have:
unique title
meta description
canonical URL
semantic headings
useful explanatory text
FAQs where genuinely useful
internal links
structured data where appropriate
fast loading
mobile-first design
Do not create thin pages consisting only of a calculator.
Each tool page should provide useful supporting information.

19. INTERNAL LINKING
The platform should create a logical network.
Example:
Word Counter:
Word Counter
  ↓
Character Counter
  ↓
Reading Time Calculator
  ↓
Case Converter
  ↓
Remove Duplicate Lines
JSON Formatter:
JSON Formatter
  ↓
JSON Validator
  ↓
Base64 Encoder
  ↓
URL Encoder
This improves discoverability and user flow.
20. MONETIZATION
The site should eventually support legitimate monetization.
Primary goal:
Google advertising
Potential advertising locations:
non-intrusive homepage placements
between sections
tool-page content areas
appropriate sidebar placements on desktop
appropriate mobile placements
Do NOT:
cover the tool with ads
place deceptive ads
make ads look like buttons
create accidental clicks
destroy mobile usability
Advertising must be designed around the product, not the other way around.
Potential future monetization:
ads
premium tools
optional Pro tier
API access
developer utilities
sponsorships
But don't prematurely complicate the initial version.
21. PERFORMANCE
Performance matters because traffic is useless if mobile users leave.
Optimize for:
LCP
INP
CLS
image size
CSS size
JavaScript size
unnecessary animation
layout shifts
font loading
DOM complexity
Avoid unnecessarily heavy libraries.
Prefer native browser APIs where practical.
22. ACCESSIBILITY
Every component should be evaluated for:
keyboard accessibility
visible focus
semantic HTML
labels
ARIA only where necessary
sufficient contrast
touch targets
screen-reader behavior
reduced motion
logical heading hierarchy
Buttons should actually be buttons.
Links should actually be links.
Don't use:
HTML
<div onclick="">
when a proper button or link is appropriate.
23. QUALITY ASSURANCE PROCESS
Before calling the homepage complete, inspect it section by section.
HEADER
Check:
desktop
mobile
tablet
theme
menu
keyboard
focus
spacing
icons
links
HERO
Check:
copy
CTA
product preview
animation
responsiveness
theme
visual hierarchy
accessibility
QUICK FIND
Check:
chips
anchors
touch targets
wrapping
mobile spacing
TOOLS
Check:
every card
every icon
every link
card animation
mobile grid
desktop grid
hover
focus
CATEGORIES
Same process.
WHY SOT VOY
Check content and visual hierarchy.
HOW IT WORKS
Check:
steps
readability
mobile stacking
animation
FAQ
Check:
keyboard
native disclosure behavior
content
readability
FOOTER
Check:
every link
mobile layout
copyright
brand
future legal pages

24. CODE QUALITY
Do not continuously patch broken code with additional overrides.
When a problem is discovered:
Find the original cause.
Remove the broken implementation.
Refactor the relevant component.
Re-test related functionality.
Remove dead CSS/JS.
Check for duplicated selectors.
Check for conflicting theme rules.
Check for duplicated IDs.
Check for broken links.
Check responsive behavior again.
The code should become cleaner, not progressively more complicated.
25. FILE ARCHITECTURE
The project must be scalable.
For the current simple HTML/CSS/JS architecture, organize it approximately like:
sot-voy-tools/
│
├── index.html
│
├── tools/
│   ├── word-counter.html
│   ├── character-counter.html
│   ├── qr-code-generator.html
│   ├── percentage-calculator.html
│   └── ...
│
├── categories/
│   ├── text.html
│   ├── calculators.html
│   ├── developer.html
│   └── ...
│
├── css/
│   ├── style.css
│   ├── components.css
│   └── tools.css
│
├── js/
│   ├── app.js
│   ├── theme.js
│   ├── navigation.js
│   └── tools/
│       ├── word-counter.js
│       ├── percentage.js
│       └── ...
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── fonts/
│
├── robots.txt
├── sitemap.xml
└── README.md
The exact structure can evolve, but the architecture must remain expandable.
26. GITHUB + VERCEL
The user will manually upload/manage the source code in GitHub.
Deployment target:
Vercel
The final project must therefore remain compatible with a simple GitHub → Vercel workflow.
No dependency on Lovable is required.
No dependency on Figma is required.
27. DEVELOPMENT WORKFLOW
Work in stages.
PHASE 1 — HOMEPAGE FOUNDATION
Finish:
header
theme
mobile navigation
hero
product preview
quick finder
featured tools
categories
why section
workflow
FAQ
footer
Then QA everything.
PHASE 2 — FIRST REAL TOOLS
Build:
Word Counter
QR Code Generator
Percentage Calculator
Countdown Timer
JSON Formatter
These become the reference architecture for all future tools.
PHASE 3 — TOOL EXPANSION
Build remaining initial tools.
PHASE 4 — SEO
Create:
tool metadata
sitemap
robots
canonical URLs
structured data
internal linking
useful supporting content
PHASE 5 — PERFORMANCE
Optimize:
JavaScript
CSS
assets
animations
layout
mobile loading
PHASE 6 — MONETIZATION
Prepare:
ad locations
privacy policy
terms
cookie/privacy requirements where applicable
ad-friendly layouts
Google advertising integration

28. MOST IMPORTANT RULE
The website should not be declared finished merely because:
it looks cool
animations work
desktop looks good
the homepage renders
It is finished only when:
The design, content, functionality, responsiveness, accessibility, performance, SEO, navigation, theme system, and underlying code have all been inspected and verified.

29. THE FINAL PRODUCT VISION
SOT VOY Tools should ultimately feel like:
A modern utility platform people bookmark because it is genuinely useful.
Someone should be able to arrive from Google searching:
"word counter"
use SOT VOY immediately,
then discover:
"Oh, they also have a reading-time calculator."
then:
"And a case converter."
then:
"And a JSON formatter."
That creates the loop we actually want:
Search traffic → useful tool → good experience → internal discovery → more tools → returning users → sustainable traffic → monetization.
MASTER INSTRUCTION TO THE BUILDER
Build SOT VOY Tools as a production-quality, scalable, SEO-focused SaaS-style browser utility platform. Prioritize the homepage first. Do not rush into adding tools while the foundation is unstable. Inspect every section line-by-line and component-by-component. Fix root causes rather than layering patches. Use original human-written content, meaningful SVG icons instead of emojis, polished responsive layouts, professional typography, subtle gradients, sophisticated SaaS motion, interactive product previews, accessible navigation, functional System/Light/Dark themes, reliable mobile navigation, strong internal linking, semantic HTML, SEO foundations, performance optimization, and accessibility. Test every component across phone, tablet, and desktop layouts. Every button and link must eventually lead somewhere meaningful. Every visual element must have a purpose. Every tool must eventually be a genuinely functional product, not a decorative mockup. Build the architecture so the platform can grow from 20+ tools to 100–200+ tools without becoming difficult to maintain. The ultimate goal is a genuinely useful, fast, trustworthy, searchable and monetizable utility platform capable of attracting organic traffic and supporting advertising without compromising user experience.

That is the single source of truth I would use for the project going forward.
