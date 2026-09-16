import fitz
import os

pdf_path = r'd:\University\Web-Projects\EliteScholars\EliteScholars_Changes_Report.pdf'
doc = fitz.open()

# A4 page dimensions in points: 595.28 x 841.89
page = doc.new_page(width=595, height=842)

# Theme Palette
c_navy = (26/255, 43/255, 76/255)       # #1A2B4C
c_brass = (197/255, 160/255, 89/255)    # #C5A059
c_slate = (74/255, 85/255, 104/255)     # #4A5568
c_light_bg = (248/255, 250/255, 252/255)# #F8FAFC
c_border = (226/255, 232/255, 240/255)  # #E2E8F0
c_dark_text = (30/255, 41/255, 59/255)  # #1E293B

# Subtle top brass accent bar
page.draw_rect(fitz.Rect(0, 0, 595, 6), color=None, fill=c_brass)

# Header
page.insert_text((48, 50), 'ELITE SCHOLARS', fontsize=11, fontname='helv', color=c_brass)
page.insert_text((48, 74), 'Daily Changes Summary Report', fontsize=20, fontname='helv', color=c_navy)
page.insert_text((48, 93), 'Summary of design, copy, and structural updates applied today (Sep 12, 2026)', fontsize=10, fontname='helv', color=c_slate)

# Header divider
page.draw_line(fitz.Point(48, 106), fitz.Point(547, 106), color=c_border, width=1)

y = 130

sections = [
    (
        '1. Page Structure & Ordering',
        [
            ('Reordered Sections', 'Moved "How We Build Your Pipeline" higher up, directly below the Trust & Stats strip.'),
            ('Removed Guarantee Section', 'Deleted the standalone guarantee section to streamline user reading flow.'),
        ]
    ),
    (
        '2. Plain Language & Jargon Removal',
        [
            ('Simplified Vocabulary', 'Removed complex corporate terms (SLA, institutional, diligence engine, call recording).'),
            ('Direct Headings', 'Renamed sections with clear plain titles ("The Problem", "Who We Work With", "Our Process").'),
        ]
    ),
    (
        '3. Updated Metrics & Stats',
        [
            ('Brokers Served', 'Updated sitewide counter from "100+" to "60+".'),
            ('Average Commission', 'Updated standard deal commission benchmark to "$50,000+".'),
            ('Testimonial Quote', 'Updated client quote (David Reynolds) to focus on pipeline visibility and tracking.'),
        ]
    ),
    (
        '4. Pricing & Calculator Updates',
        [
            ('Basic Plan', 'Updated to $1,500/mo ($500K-$3M revenue target) with transparent inclusions.'),
            ('Pro Plan', 'Updated to $2,500/mo ($1M-$20M revenue target) and restyled with a clean, light aesthetic.'),
            ('Pay As You Go', 'Added flexible tier placeholder for custom client requirements.'),
            ('ROI Calculator', 'Lightened the right results panel to white/light slate for better visual balance.'),
        ]
    ),
    (
        '5. AI Images Replaced with UI Graphics',
        [
            ('Hero Section', 'Replaced photo with a static, executive Pipeline Calendar & Trend Graphs dashboard.'),
            ('Differentiators', 'Converted to 3 equal-height cards with clear verification checklists and no images.'),
            ('Problem & Qualifier', 'Replaced stock photos with structured data cards, workweek breakdown, and vector badges.'),
            ('Testimonials & FAQ', 'Replaced AI avatars and mock dashboard with clean initials monograms and SVG icons.'),
        ]
    )
]

for sec_title, items in sections:
    # Section header background banner
    page.draw_rect(fitz.Rect(48, y-12, 547, y+8), color=None, fill=c_light_bg)
    page.draw_rect(fitz.Rect(48, y-12, 52, y+8), color=None, fill=c_brass)
    page.insert_text((58, y+2), sec_title, fontsize=11, fontname='helv', color=c_navy)
    y += 24
    
    for title, desc in items:
        # Bullet dot
        page.draw_circle(fitz.Point(58, y+4), 2, color=c_brass, fill=c_brass)
        # Bullet title and description using insert_textbox for perfect text flow
        rect = fitz.Rect(68, y-3, 547, y+16)
        text = f"{title}:  {desc}"
        page.insert_text((68, y+7), title + ':', fontsize=9.5, fontname='helv', color=c_dark_text)
        title_width = fitz.get_text_length(title + ':  ', fontname='helv', fontsize=9.5)
        page.insert_text((68 + title_width, y+7), desc, fontsize=9.5, fontname='helv', color=c_slate)
        y += 18
    
    y += 10

# Summary Box at the bottom
box_y = y + 5
page.draw_rect(fitz.Rect(48, box_y, 547, box_y + 44), color=c_border, fill=c_light_bg, width=1)
page.draw_rect(fitz.Rect(48, box_y, 52, box_y + 44), color=None, fill=c_navy)
page.insert_text((60, box_y + 17), 'Current Status & Delivery', fontsize=10, fontname='helv', color=c_navy)
page.insert_text((60, box_y + 32), 'All updates tested, Next.js build verified with 0 errors, and committed & pushed to GitHub main branch.', fontsize=8.5, fontname='helv', color=c_slate)

# Footer line & text
page.draw_line(fitz.Point(48, 790), fitz.Point(547, 790), color=c_border, width=1)
page.insert_text((48, 808), 'Elite Scholars Web Platform - Daily Changes Summary - September 12, 2026', fontsize=8.5, fontname='helv', color=c_slate)
page.insert_text((495, 808), 'Page 1 of 1', fontsize=8.5, fontname='helv', color=c_slate)

# Clean up test.pdf if it exists
if os.path.exists(r'd:\University\Web-Projects\EliteScholars\test.pdf'):
    os.remove(r'd:\University\Web-Projects\EliteScholars\test.pdf')

doc.save(pdf_path)
print(f'PDF generated successfully at: {pdf_path}')
