# Links Checklist - Studio Sound of Music

## ✅ FIXED
- [x] Over Ons "Gratis Proefles" button → Now links to /contact

## 🔍 LINKS TO VERIFY WHEN SITE IS LIVE

### Navigation Menu Links
- [ ] Home → /
- [ ] Over Ons → /over-ons
- [ ] Gitaarlessen → /gitaarlessen (or /lessen)
- [ ] Blog → /blog
- [ ] Contact → /contact

### CTA Buttons (Call to Action)
- [ ] "GRATIS PROEFLES" (Hero) → /contact or #proefles
- [ ] "BEKIJK LESSEN" (Hero) → /lessen
- [ ] "Plan een gratis proefles" (CTA section) → #proefles or /contact
- [ ] "Proefles Boeken" (Lessen page) → #proefles or /contact
- [ ] "Gratis Proefles aanvragen" (Over Ons) → /contact ✓
- [ ] "Bekijk alle artikelen" (Journal) → /blog

### Social Media Links
- [x] Instagram: https://www.instagram.com/marlowemcqueen/
- [x] Facebook: https://facebook.com/studiosoundofmusic
- [x] WhatsApp: https://wa.me/31657461677

### Footer Links
- [ ] Algemene Voorwaarden (if exists)
- [ ] Privacy Policy (if exists)
- [ ] Contact info
- [ ] Social media icons

### Blog Links
- [ ] Read More buttons on blog cards
- [ ] Pagination (Previous/Next)
- [ ] Category links
- [ ] Tag links (if used)

## 🔧 RECOMMENDED CHANGES

### 1. Anchor Links (#proefles)
**Current:** Several buttons link to `#proefles`
**Issue:** This anchor doesn't exist on most pages

**Solution Options:**

**Option A:** Create Contact Form Section with ID
Add to bottom of homepage/lessen page:
```html
<div id="proefles">
  <!-- Contact form here -->
</div>
```

**Option B:** Change all #proefles to /contact
This is simpler and more reliable.

### 2. Internal Link Structure
**Recommended format:**
- Absolute: `/contact` ✓ (works even if moved)
- Relative: `contact` ❌ (can break)
- Full URL: `https://studiosoundofmusic.nl/contact` ⚠️ (changes local/dev)

**Current:** Using `/page-name` format ✓ (Good!)

### 3. External Links Best Practices
**Current Instagram link:** ✓ Has `target="_blank"` and `rel="noopener"`
**Apply to all external links:**
```html
<a href="https://example.com" target="_blank" rel="noopener">
```

## 📋 MANUAL TESTING CHECKLIST

When site goes live, test these:

### Desktop Testing
- [ ] Click every navigation link
- [ ] Click every CTA button
- [ ] Click all footer links
- [ ] Click social media icons
- [ ] Test blog pagination
- [ ] Test "Read More" on blog posts

### Mobile Testing
- [ ] Test hamburger menu links (if exists)
- [ ] Test all buttons (touch targets)
- [ ] Test phone number (should trigger call)
- [ ] Test email addresses (should open email)
- [ ] Test WhatsApp link

### Cross-Browser Testing
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] Mobile browsers

## 🤖 AUTOMATED LINK CHECKING

### Plugin Method (Recommended)
1. Install "Broken Link Checker" plugin
2. Go to: Tools → Broken Links
3. Review report
4. Fix or remove broken links
5. Run monthly

### Online Tools
1. **Dead Link Checker:** https://www.deadlinkchecker.com/
2. **W3C Link Checker:** https://validator.w3.org/checklink
3. **Screaming Frog:** Desktop app (free up to 500 URLs)

## 🎯 LINK BEST PRACTICES

### Internal Links
✅ Use descriptive anchor text
✅ Link to related content
✅ Add links in blog posts
✅ Create topic clusters

### External Links
✅ Open in new tab
✅ Use rel="noopener" for security
✅ Use rel="nofollow" for untrusted sites
✅ Verify links work before publishing

### SEO Benefits
- Improves user experience
- Reduces bounce rate
- Helps Google understand structure
- Distributes page authority

---

## 🚨 CRITICAL LINKS TO FIX BEFORE LAUNCH

1. ✅ Over Ons button (Fixed → /contact)
2. ⬜ Decide on #proefles anchor or /contact redirect
3. ⬜ Add Privacy Policy page + link
4. ⬜ Add Algemene Voorwaarden page + link
5. ⬜ Verify all social media URLs are correct
6. ⬜ Test Contact Form 7 submission

---

**Last Updated:** October 30, 2025
**Status:** 1 broken link fixed ✓

