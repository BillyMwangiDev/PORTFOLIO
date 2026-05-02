from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, black
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT

W, H = letter
PAGE_W = W - 1.0 * inch  # usable width with 0.5in margins each side

NAVY = HexColor('#1a2b5e')
ACCENT = HexColor('#2563eb')
GRAY = HexColor('#555555')

doc = SimpleDocTemplate(
    'public/resume/Billy_Mwangi.pdf',
    pagesize=letter,
    leftMargin=0.5 * inch,
    rightMargin=0.5 * inch,
    topMargin=0.45 * inch,
    bottomMargin=0.45 * inch,
)

name_style = ParagraphStyle('Name', fontSize=20, fontName='Helvetica-Bold',
    textColor=NAVY, leading=26, spaceAfter=4, alignment=TA_CENTER)
contact_style = ParagraphStyle('Contact', fontSize=8.5, fontName='Helvetica',
    textColor=black, spaceAfter=3, alignment=TA_CENTER, leading=13)
section_style = ParagraphStyle('Section', fontSize=10, fontName='Helvetica-Bold',
    textColor=NAVY, spaceBefore=8, spaceAfter=3, leading=14)
body_style = ParagraphStyle('Body', fontSize=8.5, fontName='Helvetica',
    textColor=black, spaceAfter=2, leading=12, alignment=TA_JUSTIFY)
bullet_style = ParagraphStyle('Bullet', fontSize=8.5, fontName='Helvetica',
    textColor=black, spaceAfter=2, leading=12, leftIndent=10)
proj_header_style = ParagraphStyle('ProjHeader', fontSize=9, fontName='Helvetica-Bold',
    textColor=NAVY, leading=13, spaceAfter=1)
proj_body_style = ParagraphStyle('ProjBody', fontSize=8.2, fontName='Helvetica',
    textColor=black, spaceAfter=4, leading=11.5, alignment=TA_JUSTIFY)
skill_style = ParagraphStyle('Skill', fontSize=8.5, fontName='Helvetica',
    textColor=black, spaceAfter=2, leading=12)
date_style = ParagraphStyle('Date', fontSize=8.5, fontName='Helvetica-Oblique',
    textColor=GRAY, leading=13, alignment=TA_RIGHT)
job_title_style = ParagraphStyle('JobTitle', fontSize=9, fontName='Helvetica-Bold',
    textColor=black, leading=13)
edu_title_style = ParagraphStyle('EduTitle', fontSize=9, fontName='Helvetica-Bold',
    textColor=black, leading=13)
cert_body_style = ParagraphStyle('CertBody', fontSize=8.5, fontName='Helvetica',
    textColor=black, spaceAfter=1, leading=12, leftIndent=10)


def section_header(title):
    return [
        Paragraph(title, section_style),
        HRFlowable(width='100%', thickness=0.8, color=NAVY, spaceAfter=3),
    ]


def bullet_item(text):
    return Paragraph(f'•  {text}', bullet_style)


def job_row(title, dates):
    tp = Paragraph(f'<b>{title}</b>', job_title_style)
    dp = Paragraph(f'<i>{dates}</i>', date_style)
    t = Table([[tp, dp]], colWidths=[PAGE_W * 0.68, PAGE_W * 0.32])
    t.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
    ]))
    return t


story = []

# Header
story.append(Paragraph('BILLY GICHUGU MWANGI', name_style))
story.append(Paragraph(
    'Nairobi, Kenya  |  +254 799 656 369  |  billymwangi200@gmail.com',
    contact_style))
story.append(Paragraph(
    'linkedin.com/in/billymwangi  |  github.com/BillyMwangiDev  |  billymwangi.com',
    contact_style))
story.append(HRFlowable(width='100%', thickness=1.2, color=NAVY, spaceAfter=4, spaceBefore=4))

# Summary
story += section_header('SUMMARY')
story.append(Paragraph(
    'Full-Stack Software Engineer and Founder of Hekima Labs — an AI & Automation Studio building intelligent '
    'workflow automation and custom AI agents for African businesses. Specialized in Python/FastAPI backend systems, '
    'React and React Native frontends, M-Pesa payment integration, and IoT solutions. Shipped 20+ production-grade '
    'projects spanning fintech, mobile, desktop, and embedded systems. Currently serving as System Administrator '
    'at XRX Technologies while leading product development at Hekima Labs.',
    body_style))

# Work Experience
story += section_header('WORK EXPERIENCE')

jobs = [
    ('Founder & Lead Engineer — Hekima Labs', '2025 – Present', [
        'Founded an AI & Automation Studio connecting African SMEs with intelligent workflow automation and custom AI '
        'agents, reducing manual operational overhead for clients.',
        'Architected full-stack platforms with FastAPI, React, and Python, integrating LLMs for business process '
        'automation and intelligent document processing.',
        'Developed and deployed AI-powered tools tailored to the East African market, including M-Pesa payment flows '
        'and USSD-accessible interfaces for low-connectivity environments.',
    ]),
    ('System Administrator Intern — XRX Technologies', 'Aug 2025 – Present', [
        'Administer Active Directory and Group Policy configurations for a domain of 50+ users, enhancing security '
        'compliance and access control.',
        'Monitor server health and performance metrics, proactively identifying potential issues to prevent system '
        'interruptions.',
        'Execute routine system backups and disaster recovery protocols, ensuring data integrity and business '
        'continuity.',
    ]),
    ('IT Engineer Intern — XRX Technologies', 'Feb 2025 – Aug 2025', [
        'Delivered IT support to 50+ end-users, resolving 95% of issues within SLA timelines, significantly '
        'improving staff productivity.',
        'Performed preventive maintenance on hardware and software, reducing system-wide downtime by 15% and '
        'extending asset lifespans.',
        'Automated software update deployments across all workstations, enhancing security and reducing manual '
        'workload by 5 hours per week.',
    ]),
    ('AI Trainer — Pareto', 'Jan 2024 – Apr 2024', [
        'Led the fine-tuning process for a large language model (LLM), developing training datasets that increased '
        'model accuracy by 12%.',
        'Evaluated AI-generated outputs against quality benchmarks to ensure system reliability, relevance, and '
        'alignment with project goals.',
    ]),
    ('AI Trainer — Remotask', 'Jun 2022 – Feb 2024', [
        'Annotated and labeled over 10,000 data points for machine learning models, contributing to a 20% '
        'improvement in AI model accuracy.',
        'Audited and corrected errors in AI output data, significantly improving the reliability and trustworthiness '
        'of training datasets.',
    ]),
    ('Data Entry & Graphic Design Intern — Memon College', 'Oct 2024 – Dec 2024', [
        'Processed academic data in Excel/Google Sheets with 100% accuracy.',
        'Designed educational materials with Canva & Illustrator, improving content quality.',
        'Trained staff on customized software features, enhancing team efficiency.',
    ]),
    ('Industrial Attachment — Kenya Ports Authority', 'Jan 2023 – Mar 2023', [
        'Installed and configured SAP clients and Office 365 across multiple departments.',
        'Set up networks, troubleshot connectivity issues, and improved system stability.',
        'Performed secure backups and cloud data migrations.',
    ]),
]

for title, dates, bullets in jobs:
    story.append(job_row(title, dates))
    for b in bullets:
        story.append(bullet_item(b))
    story.append(Spacer(1, 3))

# Projects
story += section_header('PROJECTS')

projects = [
    ('Hekima Labs', 'FastAPI • React • Python • AI', '',
     'AI & Automation Studio for African businesses. Full-stack platform connecting SMEs with intelligent workflow '
     'automation and custom AI agents. Founder & Lead Engineer.'),
    ('DukaPOS', 'Electron • FastAPI • React • SQLite',
     'github.com/BillyMwangiDev/DukaPOS',
     'Offline-first Windows desktop POS for Kenyan retail. M-Pesa STK Push, barcode scanning, loyalty points, KRA '
     'eTIMS export, and ESC/POS thermal printing. 60 automated tests on CI.'),
    ('Keja', 'FastAPI • React Native • PostgreSQL • PostGIS',
     'github.com/BillyMwangiDev/Keja',
     'Trust-first property rental app for Nairobi. Zero agent fees, verified landlord badges via National ID + deed '
     'check, M-Pesa STK Push deposits, and PostGIS proximity search.'),
    ('XAU/USD Trading Terminal', 'TypeScript • Node.js • Claude AI • WebSocket',
     'github.com/BillyMwangiDev/Trading-dashboard',
     'Quant trading terminal for Gold/USD — real-time candlestick charts, 7 server-side indicators (RSI, MACD, '
     'Bollinger Bands, ADX, ATR), AI analyst powered by Claude, Kelly Criterion risk calculator, and SQLite trade '
     'journal.'),
    ('Stock Soko', 'FastAPI • React Native • Python • M-Pesa',
     'github.com/BillyMwangiDev/Stock-Soko',
     'Mobile trading platform for the Nairobi Securities Exchange (NSE). Real-time quotes via multi-provider '
     'fallback, AI buy/sell/hold signals, M-Pesa deposits/withdrawals, WebSocket price streaming, and a 24-module '
     'investing education centre.'),
    ('Mifugo (IoT Cattle Platform)', 'FastAPI • Next.js • MQTT • PostGIS',
     'github.com/BillyMwangiDev/MIFUGO-MANAGEMENT',
     'IoT cattle platform for Kenyan pastoralists. ESP32-S3 smart collars publish GPS + temperature + '
     'accelerometer data over MQTT. PostGIS geofencing, theft detection, estrus alerts, and USSD field access via '
     "Africa's Talking."),
    ('Nexus Movie', 'Python • FastAPI • React Native • PostgreSQL',
     'github.com/BillyMwangiDev/nexus-movie-frontend',
     'Full-stack movie platform with a weighted collaborative-content hybrid recommendation engine. ALX capstone — '
     'FastAPI backend, React Native frontend, PostgreSQL graph powering personalised suggestions.'),
    ('PriceChekRider', 'Python • FastAPI • USSD • SMS API',
     'github.com/BillyMwangiDev/Africas-talking_hackathon',
     'USSD + SMS retail price comparison built for the Africa\'s Talking Hackathon. Shoppers dial in, set their '
     'Nairobi location, and receive an SMS comparing prices across major supermarkets.'),
]

for name, tags, link, desc in projects:
    link_part = f'  <font color="#2563eb" size="7.5">{link}</font>' if link else ''
    header = f'<b>{name}</b>  <font color="#555555" size="8">{tags}</font>{link_part}'
    story.append(Paragraph(header, proj_header_style))
    story.append(Paragraph(desc, proj_body_style))

# Education
story += section_header('EDUCATION')
edu_row = Table([
    [
        Paragraph('<b>BSc. Information Technology — Technical University of Mombasa</b>', edu_title_style),
        Paragraph('<i>Aug 2024</i>', date_style),
    ]
], colWidths=[PAGE_W * 0.75, PAGE_W * 0.25])
edu_row.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
    ('TOPPADDING', (0, 0), (-1, -1), 0),
]))
story.append(edu_row)
story.append(Paragraph(
    'Relevant Coursework: Database Systems, Software Engineering, Networking, Web Development',
    body_style))
story.append(Spacer(1, 3))

# Certifications
story += section_header('CERTIFICATIONS')
for cert in [
    'ALX Pro Dev — Backend Development | 2025',
    'Veeam Sales & Technical Sales Professional | 2025',
    'Python Essentials — Cisco Networking Academy | 2024',
]:
    story.append(bullet_item(cert))
story.append(Spacer(1, 3))

# Technical Skills
story += section_header('TECHNICAL SKILLS')
skill_rows = [
    ('Languages', 'Python, TypeScript, JavaScript, SQL'),
    ('Backend', 'FastAPI, Django, Django REST Framework, PostgreSQL, MySQL, SQLite, Redis, REST APIs'),
    ('Frontend', 'React, Next.js, Tailwind CSS, Framer Motion'),
    ('Mobile & Desktop', 'React Native, Expo, Electron'),
    ('IoT & Protocols', 'MQTT, ESP32-S3, PostGIS, GPS/Accelerometer Integration'),
    ('AI & Automation', 'LLM Integration, Prompt Engineering, Workflow Automation, Data Pipelines, Claude AI'),
    ('Payments', "M-Pesa STK Push, Africa's Talking USSD/SMS"),
    ('Infrastructure', 'Docker, Vercel, GitHub Actions, Linux, CI/CD Pipelines'),
    ('Cloud & Admin', 'AWS (EC2, S3), Azure, Active Directory, Group Policy, Microsoft Exchange'),
    ('Methodologies', 'Agile/Scrum, Test-Driven Development, Project Management'),
]
for label, items in skill_rows:
    story.append(Paragraph(f'<b>{label}:</b> {items}', skill_style))

doc.build(story)
print('Resume PDF generated successfully')
