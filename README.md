# Wellness Vault Landing

# WELLNESS VAULT — FINAL LOVABLE MASTER PROMPT

## Project overview

Build a premium, modern, high-converting landing page for a wellness brand called **Wellness Vault**.

Wellness Vault is a digital wellness resource platform that helps people learn, plan, and build healthier everyday routines through practical educational resources, wellness guides, planning tools, healthy recipes, movement resources, trackers, and introductory wellness guidance.

The website must feel premium, trustworthy, calm, modern, editorial, and highly polished.

The visual quality should feel like:

**Luxury wellness editorial × Apple-inspired simplicity × modern SaaS conversion design**

This is NOT a generic gym website.

Avoid aggressive fitness imagery, excessive gradients, cheap-looking stock imagery, clutter, excessive animations, or exaggerated transformation messaging.

---

# 1. PRIMARY BUSINESS OBJECTIVE

The main business objective is to convert visitors into qualified leads while introducing them to the Wellness Vault ecosystem.

Primary high-intent conversion:

**Book a Free Wellness Consultation**

Primary low-friction conversion:

**Get the Free Wellness Guide**

Additional lead magnets:

* Free Wellness Tool
* Free Wellness eBook
* Free Wellness Session
* Free Wellness Checkup

The consultation should be the primary high-intent CTA.

The free guide should be the primary low-friction CTA.

Do NOT make six CTAs compete equally with each other.

---

# 2. CORE POSITIONING

Primary message:

**A simpler way to build healthier everyday habits.**

Supporting message:

**Wellness Vault brings practical wellness guides, educational resources, planning tools, and tracking systems together in one organized place.**

Communicate these core values:

* Clarity
* Simplicity
* Structure
* Practicality
* Education
* Trust
* Organization

Do not make medical claims.

Do not promise guaranteed health outcomes.

Do not use unrealistic weight-loss promises.

Do not claim to diagnose, treat, cure, or prevent medical conditions.

---

# 3. TARGET AUDIENCE

The website is for people who:

* Want to build healthier everyday routines
* Feel overwhelmed by wellness information
* Want more structure
* Need practical wellness resources
* Are interested in nutrition, movement, planning, and habit-building
* Prefer simple educational guidance
* Want an organized collection of wellness resources
* Want help deciding where to start

Use welcoming, inclusive, non-judgmental language.

---

# 4. DESIGN DIRECTION

Create a premium editorial wellness design.

Visual keywords:

**Elegant**
**Minimal**
**Calm**
**Sophisticated**
**Warm**
**Modern**
**Trustworthy**
**Editorial**
**Premium**
**Human**

Avoid:

* Generic gym aesthetics
* Neon colors
* Excessive black
* Excessive gradients
* Excessive glassmorphism
* Overly rounded childish cards
* Cluttered layouts
* Huge blocks of text
* Aggressive fitness imagery
* Fake scientific visuals
* Fake statistics
* Fake testimonials

---

# 5. COLOR SYSTEM

Use this exact color palette:

Primary Deep Forest Green:

`#163A2D`

Sage:

`#8FAF9B`

Soft Sage:

`#DCE8DF`

Warm Ivory:

`#F8F7F2`

Charcoal:

`#202522`

Muted Gold:

`#B79A5B`

White:

`#FFFFFF`

Use Deep Forest Green primarily for important CTAs, headings, navigation accents, and strong brand elements.

Use Warm Ivory as the primary page background.

Use Sage and Soft Sage as supporting backgrounds.

Use Gold very sparingly for premium details.

Do not use excessive green throughout the page.

---

# 6. TYPOGRAPHY

Use:

**Playfair Display** for major editorial headings.

**Lato** for body text, navigation, forms, buttons, and supporting UI.

Create a strong typography hierarchy.

Hero heading should be large and elegant on desktop but scale naturally on tablets and mobile.

Never allow headings or buttons to overflow on small screens.

---

# 7. RESPONSIVE REQUIREMENT — CRITICAL

The entire website MUST be fully responsive.

Use a mobile-first strategy.

Use Tailwind's standard responsive breakpoints and avoid unnecessary custom breakpoints.

The website must work correctly at:

* 320px
* 360px
* 375px
* 390px
* 414px
* 768px
* 1024px
* 1280px
* 1440px
* 1920px

Every component must adapt gracefully.

Test:

* Navigation
* Hero
* Buttons
* Cards
* Forms
* Modal
* Images
* FAQ
* Testimonials
* Footer
* Grids
* Spacing
* Typography

At mobile:

* No horizontal scrolling
* No clipped text
* No overlapping elements
* No oversized images
* No tiny buttons
* Forms must fit comfortably
* Modal must fit inside the viewport
* Buttons must be touch-friendly
* Cards should stack naturally
* Navigation should become a hamburger menu
* CTA buttons should remain easy to access

Use fluid sizing where appropriate.

Do not create separate desktop and mobile designs that feel like different websites.

Maintain the same design language across all breakpoints.

---

# 8. HEADER

Create a premium sticky header.

Left:

**Wellness Vault**

Navigation:

* Home
* What's Inside
* Free Resources
* Consultation
* FAQ

Right:

Primary CTA:

**Book Free Consultation**

On mobile:

Use a clean hamburger navigation.

The header must remain elegant and compact.

---

# 9. HERO SECTION

Create a premium hero section.

Eyebrow:

**Wellness, Organized.**

Headline:

**A Simpler Way to Build Healthier Everyday Habits.**

Supporting copy:

**Discover practical wellness resources, educational guides, and simple tools designed to help you create more organized routines that fit real life.**

Primary CTA:

**Book a Free Consultation**

Secondary CTA:

**Get the Free Wellness Guide**

Hero visual:

Create a sophisticated wellness editorial composition showing:

* Digital wellness resources
* Planner
* Wellness tracker
* Tablet or laptop
* Healthy lifestyle elements
* Natural textures
* Soft greenery
* Warm neutral environment

Do not make the visual look like a generic fitness advertisement.

---

# 10. HERO CTA BEHAVIOR

IMPORTANT:

Every **Book Free Consultation** CTA must open the consultation modal.

Do NOT navigate away from the landing page.

The consultation modal must be:

* Responsive
* Keyboard accessible
* Screen-reader friendly
* Scrollable on small screens
* Easy to close
* Visually premium
* Properly centered
* Usable on mobile

Desktop:

Use a centered modal with an elegant max-width.

Mobile:

Use a near-full-width modal or responsive bottom-sheet style presentation with comfortable padding.

Add:

* Close button
* Escape-key support
* Backdrop click behavior
* Focus management
* Body scroll locking while the modal is open

Do not allow the modal to overflow the viewport.

---

# 11. CONSULTATION MODAL

Modal heading:

**Book Your Free Wellness Consultation**

Supporting text:

**Tell us a little about what you're looking for, and we'll use your response to understand how we can best guide your next step.**

Create the following form fields.

---

## FIELD 1 — NAME

Label:

**Name**

Type:

Text

Placeholder:

**Your full name**

Required:

Yes

---

## FIELD 2 — PHONE NUMBER

Label:

**Phone No**

Type:

Tel

Placeholder:

**Your phone number**

Required:

Yes

Use appropriate phone validation.

Do not assume a single country's phone format.

---

## FIELD 3 — EMAIL

Label:

**Email**

Type:

Email

Placeholder:

**[you@example.com](mailto:you@example.com)**

Required:

Yes

Validate email format.

---

# 12. IMPORTANT — "WHY" FIELD

The "Why" field is NOT supposed to be left as a generic blank question.

It must be automatically generated based on the consultation context.

Label:

**Why do you want to book a consultation?**

When the user opens the consultation modal, automatically pre-populate the field with this suggested message:

**"I'd like to discuss my wellness goals, understand where I should start, and learn which Wellness Vault resources may be most helpful for me."**

This text should appear inside an editable textarea.

The user can:

* Keep the suggested message
* Edit it
* Replace it with their own reason

Placeholder if the user clears it:

**Tell us what you'd like help with or what you'd like to discuss.**

This is important:

Do not make the user invent a reason from scratch.

The system should provide the suggested reason automatically.

---

# 13. CONSULTATION FORM CTA

Button:

**Request My Free Consultation**

Add small supporting text below:

**Free introductory consultation • No obligation**

Do not make medical or guaranteed-outcome claims.

---

# 14. CONSULTATION FORM VALIDATION

Implement:

* Required field validation
* Email validation
* Phone validation
* Minimum sensible name validation
* Accessible error messages
* Inline validation
* Loading state
* Disabled state during submission
* Success state
* Error state
* Duplicate submission prevention

Error messages should be friendly and specific.

Example:

**Please enter a valid email address.**

Do not use technical error messages.

---

# 15. CONSULTATION SUCCESS STATE

After successful submission, do NOT simply reload the page.

Replace the form with a polished success state.

Heading:

**Thank You — Your Consultation Request Has Been Received.**

Supporting text:

**We've received your request. We'll review your information and provide the next steps.**

Button:

**Continue Exploring Wellness Vault**

Optional secondary action:

**Get the Free Wellness Guide**

---

# 16. CONSULTATION FORM DATA

Prepare the form structure for future CRM/backend integration.

Fields:

`name`

`phone`

`email`

`reason`

`source`

`created_at`

`status`

Do not expose private API keys in frontend code.

Do not collect unnecessary sensitive health information.

---

# 17. TRUST STRIP

Immediately below the hero create a minimal benefit strip.

Four items:

**Practical Resources**

**Simple Guidance**

**Organized Wellness Tools**

**Everyday-Friendly Approach**

Use subtle icons.

---

# 18. PROBLEM SECTION

Headline:

**Wellness Information Is Everywhere. A Clear Path Isn't.**

Explain four problems.

### Too Much Information

There is endless wellness information online, making it difficult to know where to begin.

### Lack of Structure

Knowing what to do is different from having a practical system to follow.

### Inconsistent Routines

Building everyday consistency can be difficult without simple planning tools.

### Generic Advice

People often need practical resources that fit real-life routines.

End with:

**That's why Wellness Vault brings practical wellness resources together in one organized place.**

---

# 19. SOLUTION SECTION

Headline:

**Welcome to Wellness Vault**

Supporting copy:

**A curated wellness resource collection designed to make learning, planning, and building healthier everyday routines simpler.**

Create three premium cards.

### Learn

Understand wellness concepts through simple educational resources.

### Plan

Use practical planners, guides, and worksheets to organize your routines.

### Build

Turn what you learn into practical everyday habits and routines.

---

# 20. WHAT'S INSIDE THE VAULT

Create a six-card responsive grid.

### Nutrition

Practical meal-planning resources, healthy recipes, and food education.

### Movement

Simple movement and home-friendly wellness resources.

### Planning

Organize routines using structured planners and worksheets.

### Tracking

Reflect on habits, consistency, and personal progress.

### Education

Explore easy-to-understand wellness education.

### Wellness

Build a more organized approach to everyday wellbeing.

Each card should contain:

* Minimal icon
* Heading
* Short description
* Subtle hover interaction

Cards must stack beautifully on mobile.

---

# 21. FREE RESOURCES SECTION

Headline:

**Start With Something Free**

Supporting text:

**Choose the resource that matches where you are today.**

Create six resource cards.

### Free Wellness Guide

A short practical guide to help create a more organized wellness routine.

CTA:

**Get the Free Guide**

### Free Wellness Tool

An interactive tool designed to help visitors identify a useful starting point.

CTA:

**Try the Free Tool**

### Free Wellness eBook

A deeper educational wellness resource.

CTA:

**Get the Free eBook**

### Free Wellness Session

An introductory educational session.

CTA:

**Join the Free Session**

### Free Wellness Checkup

A simple wellness reflection experience.

CTA:

**Start the Free Checkup**

### Free Consultation

A personalized introductory conversation.

CTA:

**Book Free Consultation**

The consultation card must remain visually prominent.

---

# 22. FREE RESOURCE CTA BEHAVIOR

For consultation:

Open the responsive consultation modal.

For the other lead magnets:

Create clearly defined CTA destinations or modal placeholders.

Do not create fake downloadable files.

If a resource is not yet connected, use a clear placeholder route/component that can later be connected.

Keep all CTA components reusable.

---

# 23. HOW IT WORKS

Headline:

**A Simple Way to Get Started**

Create four steps:

### 01 — Explore

Find a resource that matches your current needs.

### 02 — Learn

Use practical educational resources.

### 03 — Plan

Turn information into an organized routine.

### 04 — Build

Continue developing consistent everyday habits.

Desktop:

Horizontal timeline.

Mobile:

Vertical timeline.

---

# 24. WHY WELLNESS VAULT

Headline:

**Wellness Doesn't Need to Feel Complicated.**

Four benefit cards:

### Simple

Clear resources without unnecessary complexity.

### Practical

Tools designed for everyday use.

### Organized

Resources brought together in one place.

### Educational

Focused on understanding and informed everyday choices.

---

# 25. WHO IT'S FOR

Headline:

**Made for Real-Life Wellness**

Create four cards:

### Getting Started

For people who want a clearer starting point.

### Building Better Routines

For people who want more structure and organization.

### Feeling Overwhelmed

For people who want wellness information presented more simply.

### Planning & Tracking

For people who enjoy practical planners and trackers.

---

# 26. PRODUCT SHOWCASE

Create a premium visual showcase.

Display realistic-looking placeholders for:

* Wellness guide
* Planner
* Recipe pages
* Tracker
* Educational pages
* Worksheets

Important:

Do not invent fake product screenshots.

Use elegant placeholder frames that can later be replaced with real assets.

Make the layout responsive.

---

# 27. SOCIAL PROOF

Create:

**What Our Community Says**

Prepare the UI for real testimonials.

Do not fabricate reviews.

Do not invent:

* Customer names
* Ratings
* Results
* Review counts
* Verified badges

Use clearly marked placeholders until real testimonials are supplied.

---

# 28. PAID WELLNESS VAULT SECTION

Headline:

**Everything You Need to Organize Your Wellness Journey.**

Show the value of the paid Wellness Vault offer.

Include:

* Wellness resources
* Educational guides
* Planning tools
* Recipes
* Movement resources
* Trackers
* Printable resources

CTA:

**Explore Wellness Vault**

Secondary:

**Book a Free Consultation**

Do not use aggressive sales language.

---

# 29. FAQ

Create an accessible accordion.

Questions:

1. What is Wellness Vault?
2. What is included?
3. Is Wellness Vault digital?
4. What is included in the free guide?
5. What happens during the free consultation?
6. How long is the consultation?
7. Can I use the resources digitally?
8. Can I print the resources?
9. Who is Wellness Vault designed for?
10. Is Wellness Vault medical advice?

FAQ accordion must work perfectly on touch devices.

---

# 30. FINAL CTA

Create a visually strong closing section.

Headline:

**Your Wellness Journey Can Start With One Simple Step.**

Supporting text:

**Explore a practical approach to learning, planning, and building healthier everyday routines.**

Primary CTA:

**Book a Free Consultation**

Secondary CTA:

**Get the Free Wellness Guide**

The primary CTA must open the same responsive consultation modal.

---

# 31. FOOTER

Include:

**Wellness Vault**

Short brand description.

Navigation:

* Home
* What's Inside
* Free Resources
* Consultation
* FAQ

Legal:

* Privacy Policy
* Terms
* Disclaimer

Copyright:

**© 2026 Wellness Vault. All rights reserved.**

---

# 32. SEO

Build SEO into the website from the beginning.

Use:

* Semantic HTML
* One clear H1
* Logical H2/H3 hierarchy
* Descriptive title
* Meta description
* Open Graph metadata
* Social sharing metadata
* Canonical URL
* Descriptive image alt text
* Clean URLs
* Internal links
* Descriptive anchor text
* Crawlable content
* Structured data where appropriate
* Sitemap support
* robots.txt support

Suggested title:

**Wellness Vault | Practical Wellness Resources & Guidance**

Suggested meta description:

**Explore Wellness Vault for practical wellness guides, planning tools, educational resources, and a free introductory consultation designed to help you build more organized everyday routines.**

Do not keyword stuff.

Write naturally for humans.

---

# 33. SEO / AEO CONTENT

Structure important information so both traditional search engines and AI answer engines can understand the website.

Make important facts visible in HTML.

Use:

* Descriptive headings
* Clear answers
* FAQ content
* Semantic structure
* Structured data where appropriate
* Natural keyword usage
* Helpful explanatory copy

Prepare the project for future:

* Google Search Console
* Sitemap submission
* Analytics
* AI-search visibility
* Custom domain

Do not invent SEO performance claims.

---

# 34. ACCESSIBILITY

Follow modern accessibility practices.

Include:

* Semantic HTML
* Proper heading hierarchy
* Accessible labels
* Keyboard navigation
* Visible focus states
* Good color contrast
* Alt text
* Accessible modal
* Accessible form errors
* Accessible accordion
* Screen-reader-friendly buttons

The consultation modal must correctly manage focus.

When opened:

Focus should move into the modal.

When closed:

Focus should return to the CTA that opened it.

Support Escape to close.

Respect `prefers-reduced-motion`.

---

# 35. PERFORMANCE

Optimize for fast loading.

Use:

* Responsive images
* WebP/SVG where appropriate
* Lazy loading below-the-fold images
* Optimized fonts
* Lightweight animations
* Minimal unnecessary JavaScript
* No autoplay video
* No unnecessary third-party scripts

Avoid layout shifts.

Optimize for Core Web Vitals.

The page must feel fast on mobile connections.

---

# 36. ANALYTICS PREPARATION

Prepare reusable conversion events.

Track:

`consultation_cta_clicked`

`consultation_form_opened`

`consultation_form_started`

`consultation_form_submitted`

`free_guide_clicked`

`free_tool_clicked`

`free_ebook_clicked`

`free_session_clicked`

`free_checkup_clicked`

`wellness_vault_clicked`

Do not insert fake analytics IDs.

Use configuration/environment placeholders for future integrations.

---

# 37. SPAM PROTECTION

Design the consultation form so anti-spam protection can be added.

Support future integration with an appropriate CAPTCHA or privacy-friendly spam prevention mechanism.

Do not make the form difficult for legitimate users.

---

# 38. COMPONENT ARCHITECTURE

Use reusable components.

Create components such as:

* Header
* MobileNavigation
* Hero
* CTAButton
* SectionHeading
* BenefitStrip
* ProblemCard
* SolutionCard
* VaultResourceCard
* FreeResourceCard
* ConsultationModal
* ConsultationForm
* FormField
* SuccessState
* ProductShowcase
* TestimonialCard
* FAQAccordion
* FinalCTA
* Footer

Do not duplicate components unnecessarily.

Maintain a consistent design system.

---

# 39. MODAL COMPONENT REQUIREMENTS

The consultation modal must be reusable.

Any button with:

`data-action="book-consultation"`

or equivalent component behavior should open the same consultation modal.

Do not create separate copies of the form for every CTA.

All consultation buttons should trigger the same component.

---

# 40. INTERACTION DESIGN

Use subtle premium interactions:

* Smooth scrolling
* Button hover states
* Card hover states
* Gentle section reveal
* Modal transitions
* FAQ transitions
* Form loading animation
* Success animation

Animations must be subtle.

Do not sacrifice performance.

Respect reduced-motion settings.

---

# 41. MOBILE EXPERIENCE

Mobile is NOT an afterthought.

Before finalizing the project, inspect every section specifically on mobile.

Pay special attention to:

* Hero heading
* Hero CTA buttons
* Sticky header
* Consultation modal
* Form fields
* Dropdown/select controls
* Cards
* Product mockups
* FAQ
* Footer

The consultation modal is especially important.

On a 320px-wide screen:

* It must fit
* Inputs must remain usable
* Submit button must fit
* Close button must remain visible
* Content must be scrollable
* No horizontal overflow
* Keyboard interaction must work correctly

---

# 42. SECURITY

Follow secure development practices.

* Validate user input
* Sanitize user-generated content
* Never expose secret keys
* Use environment variables
* Protect future API integrations
* Prevent duplicate submissions
* Minimize stored personal information

Do not collect unnecessary sensitive information.

---

# 43. CONTENT SAFETY / CLAIMS

Never invent:

* Medical credentials
* Certifications
* Scientific studies
* Awards
* Customer counts
* Revenue figures
* Transformation statistics
* Health outcome statistics
* Customer testimonials
* Partnerships

Do not claim the website or resources can diagnose, cure, treat, or prevent disease.

Keep messaging focused on wellness education, organization, habits, routines, and practical resources.

---

# 44. VISUAL ASSET HANDLING

If actual Wellness Vault images, logo files, ebook covers, or product screenshots are not available, create clean placeholders.

Do not fabricate branded assets.

The visual system must be designed so real assets can easily replace placeholders later.

Use descriptive alt text for meaningful images.

---

# 45. CONVERSION HIERARCHY

Maintain this hierarchy throughout the page:

### PRIMARY

**Book a Free Consultation**

### SECONDARY

**Get the Free Wellness Guide**

### SUPPORTING

* Try the Free Tool
* Get the Free eBook
* Join the Free Session
* Start the Free Checkup

Do not allow supporting CTAs to visually overpower the consultation CTA.

---

# 46. USER EXPERIENCE PRINCIPLE

Every section must answer one of these questions:

**What is Wellness Vault?**

**What problem does it solve?**

**How does it help me?**

**What's inside?**

**Can I try something free?**

**Can I speak to someone?**

**What happens next?**

**Why should I trust it?**

**What should I do now?**

Do not add sections that do not serve the user journey.

---

# 47. IMPLEMENTATION APPROACH

IMPORTANT:

Do not blindly generate the entire website as one unstructured block.

First create a concise implementation plan.

Then build systematically.

Recommended order:

### Phase 1

Design system

* Colors
* Typography
* Spacing
* Buttons
* Cards
* Responsive foundation

### Phase 2

Header + Hero

### Phase 3

Problem + Solution + Vault Contents

### Phase 4

Consultation Modal + Form

### Phase 5

Free Resources

### Phase 6

How It Works + Benefits + Audience

### Phase 7

Product Showcase + Paid Offer

### Phase 8

Testimonials + FAQ + Final CTA + Footer

### Phase 9

SEO + Accessibility + Performance

### Phase 10

Full responsive QA

---

# 48. QA CHECKLIST

Before considering the website complete, test:

## Responsive

320px

360px

375px

390px

414px

768px

1024px

1280px

1440px

1920px

## Consultation modal

* Opens from every consultation CTA
* Closes correctly
* Escape closes it
* Backdrop behavior works
* Focus management works
* Mobile scrolling works
* No viewport overflow
* Form validation works
* Loading state works
* Success state works
* Error state works
* Duplicate submissions prevented

## Navigation

* Desktop navigation
* Mobile menu
* Smooth scrolling
* Anchor links
* CTA behavior

## SEO

* Title
* Meta description
* H1
* H2/H3 hierarchy
* Canonical
* Open Graph
* Alt text
* Structured content
* Sitemap
* robots.txt

## Accessibility

* Keyboard navigation
* Focus states
* Modal focus trap
* Form labels
* Error messages
* Contrast
* Reduced motion

## Performance

* Images
* Fonts
* Animations
* Mobile loading
* Core Web Vitals

---

# 49. IMPORTANT LOVABLE INSTRUCTION

Before making implementation changes, first review this specification and produce a concise phased plan.

If anything is genuinely ambiguous or requires information that cannot be safely inferred, ask a focused clarification question before implementing it.

Do not invent business facts.

Use the exact copy provided in this specification where copy is supplied.

Build reusable components.

Preserve existing components when making future changes.

When a future change is requested, modify only the relevant component/section and do not unnecessarily rewrite unrelated parts.

---

# 50. FINAL QUALITY STANDARD

The finished website should feel like a premium brand that could confidently launch publicly.

It should be:

**Beautiful**
**Fast**
**Responsive**
**Accessible**
**SEO-friendly**
**Conversion-focused**
**Trustworthy**
**Modern**
**Premium**
**Easy to navigate**

The visitor should understand within seconds:

**What Wellness Vault is → what problem it solves → what is available → how they can start for free → how they can book a consultation.**

Most importantly:

**The consultation CTA must open a polished, fully responsive modal.**

**The "Why" field must automatically start with the suggested consultation reason provided above, while remaining editable by the visitor.**

Do not compromise the mobile experience for desktop aesthetics.

Do not compromise usability for visual effects.

Do not fabricate business information.

Build with precision and maintain a consistent design system throughout the entire website.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/870c89b2-8067-4c90-83fe-0e50fcfa1a74).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
