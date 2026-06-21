import {
  AlignmentType,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from 'docx'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.join(__dirname, '../public/cv/Mahmoud-AlJabour-CV.docx')

const FONT = 'Calibri'
const BODY_SIZE = 22 // half-points → 11pt
const SMALL_SIZE = 20 // 10pt
const HEADING_SIZE = 24 // 12pt
const TITLE_SIZE = 28 // 14pt
const NAME_SIZE = 48 // 24pt
const COLOR_MUTED = '555555'
const COLOR_PRIMARY = '6C63FF'

function text(content, options = {}) {
  return new TextRun({
    text: content,
    font: FONT,
    size: options.size ?? BODY_SIZE,
    bold: options.bold,
    italics: options.italics,
    color: options.color,
  })
}

function sectionHeading(title) {
  return new Paragraph({
    spacing: { before: 240, after: 120 },
    border: {
      bottom: { color: 'CCCCCC', space: 1, style: 'single', size: 6 },
    },
    children: [
      text(title, { bold: true, size: HEADING_SIZE, color: COLOR_PRIMARY }),
    ],
  })
}

function bodyParagraph(children, spacing = { after: 120 }) {
  return new Paragraph({ spacing, children })
}

function bulletParagraph(content) {
  return new Paragraph({
    spacing: { after: 80 },
    bullet: { level: 0 },
    children: Array.isArray(content) ? content : [text(content)],
  })
}

function projectTitle(name, stack) {
  return new Paragraph({
    spacing: { before: 160, after: 60 },
    children: [
      text(name, { bold: true, size: BODY_SIZE }),
      text(`  |  ${stack}`, { italics: true, size: SMALL_SIZE, color: COLOR_MUTED }),
    ],
  })
}

function linkParagraph(label, url) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new ExternalHyperlink({
        link: url,
        children: [text(label, { size: SMALL_SIZE, color: '0563C1' })],
      }),
    ],
  })
}

function skillLine(label, items) {
  return bodyParagraph([
    text(`${label}: `, { bold: true }),
    text(items),
  ])
}

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: FONT, size: BODY_SIZE },
      },
    },
  },
  sections: [
    {
      properties: {
        page: {
          margin: { top: 720, right: 720, bottom: 720, left: 720 },
        },
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 60 },
          children: [text('Mahmoud M. Al-Jabour', { bold: true, size: NAME_SIZE })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 60 },
          children: [text('Backend Developer', { bold: true, size: TITLE_SIZE, color: COLOR_PRIMARY })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 240 },
          children: [
            text('Khan Yunis, Palestine  |  ', { size: SMALL_SIZE, color: COLOR_MUTED }),
            text('mahmoud.aljabour@gmail.com  |  ', { size: SMALL_SIZE, color: COLOR_MUTED }),
            new ExternalHyperlink({
              link: 'https://github.com/mahmoud-aljabour',
              children: [text('GitHub', { size: SMALL_SIZE, color: '0563C1' })],
            }),
            text('  |  ', { size: SMALL_SIZE, color: COLOR_MUTED }),
            new ExternalHyperlink({
              link: 'https://www.linkedin.com/in/mahmoud-al-jabour/',
              children: [text('LinkedIn', { size: SMALL_SIZE, color: '0563C1' })],
            }),
          ],
        }),

        sectionHeading('Professional Summary'),
        bodyParagraph([
          text(
            'Backend Developer specializing in PHP and Laravel with expertise in designing multi-tenant SaaS architectures, secure payment integrations, and high-performance REST APIs. Proven track record of handling 5,000+ daily API requests with 98% uptime while optimizing response times by 86%. Focused on building scalable, secure, and maintainable backend systems.',
          ),
        ]),

        sectionHeading('Technical Skills'),
        skillLine('Backend', 'PHP, Laravel, RESTful APIs, Multi-Tenant Architecture'),
        skillLine('Database', 'MySQL, Query Optimization, Database Design'),
        skillLine('Frontend', 'Vue.js, JavaScript, Tailwind CSS, Blade Templates'),
        skillLine('Tools & DevOps', 'Git, Docker, Postman, Composer, Linux, PHPUnit'),
        skillLine('Security', 'Authentication & Authorization, Payment Gateway Integration, Data Validation'),

        sectionHeading('Education'),
        bodyParagraph([text('B.Sc. in Web Technology and Information Security', { bold: true })]),
        bodyParagraph([text('Palestine Technical College')], { after: 60 }),
        bodyParagraph([
          text('Focus: Full-stack web development, cybersecurity fundamentals, secure coding practices'),
        ]),

        sectionHeading('Featured Projects'),

        projectTitle('Smart Smile Clinic', 'Healthcare Management System'),
        bodyParagraph([
          text('PHP, MySQL, Bootstrap 5, jQuery', { italics: true, size: SMALL_SIZE, color: COLOR_MUTED }),
        ], { after: 80 }),
        bulletParagraph(
          'Developed comprehensive dental clinic management system with patient records, appointment scheduling, invoicing, and prescription management.',
        ),
        bulletParagraph(
          'Implemented role-based access control (Doctor, Admin, Staff) with secure authentication.',
        ),
        bulletParagraph('Built dynamic reporting dashboard with real-time clinic statistics.'),
        bulletParagraph(
          'Integrated FullCalendar for interactive appointment booking with business rules.',
        ),
        linkParagraph(
          'github.com/mahmoud-aljabour/Smart-Smile-Clinic',
          'https://github.com/mahmoud-aljabour/Smart-Smile-Clinic',
        ),

        projectTitle('Multi-Tenant Inventory System', 'SaaS Backend'),
        bodyParagraph([
          text('Laravel, PHP, MySQL', { italics: true, size: SMALL_SIZE, color: COLOR_MUTED }),
        ], { after: 80 }),
        bulletParagraph(
          'Architected multi-tenant SaaS platform with complete tenant isolation at database level.',
        ),
        bulletParagraph(
          'Implemented role-based access control and tenant-scoped queries for data security.',
        ),
        bulletParagraph('Built real-time stock tracking with automatic low-stock alerts.'),
        bulletParagraph(
          'Designed RESTful API endpoints for inventory operations with comprehensive validation.',
        ),
        linkParagraph(
          'github.com/mahmoud-aljabour/Multi-Tenant-Task',
          'https://github.com/mahmoud-aljabour/Multi-Tenant-Task',
        ),

        projectTitle('Online Store Platform', 'Full-Stack E-Commerce'),
        bodyParagraph([
          text('Laravel, Breeze, Spatie Permission, MySQL, Pest Testing', {
            italics: true,
            size: SMALL_SIZE,
            color: COLOR_MUTED,
          }),
        ], { after: 80 }),
        bulletParagraph(
          'Developed full-stack e-commerce MVP with session-based cart and guest/authenticated checkout.',
        ),
        bulletParagraph(
          'Implemented stock-safe order placement with transaction rollback on inventory conflicts.',
        ),
        bulletParagraph(
          'Built bilingual storefront (EN/AR) with RTL support and dynamic locale switching.',
        ),
        bulletParagraph(
          'Created role-based admin panel with product, category, and order management.',
        ),
        bulletParagraph('Integrated automated testing suite with Pest for business logic validation.'),
        linkParagraph(
          'github.com/mahmoud-aljabour/Online_Store',
          'https://github.com/mahmoud-aljabour/Online_Store',
        ),

        projectTitle('Library Management System', 'Web Application'),
        bodyParagraph([
          text('Laravel, Blade, MySQL', { italics: true, size: SMALL_SIZE, color: COLOR_MUTED }),
        ], { after: 80 }),
        bulletParagraph(
          'Built comprehensive library system with book cataloging, ISBN management, and author tracking.',
        ),
        bulletParagraph(
          'Implemented member management with borrowing history and fine calculations.',
        ),
        bulletParagraph(
          'Developed borrowing workflow with due date tracking and automated overdue notifications.',
        ),
        bulletParagraph(
          'Created reporting module for circulation statistics and popular titles analysis.',
        ),
        linkParagraph(
          'github.com/mahmoud-aljabour/Library-Management-System',
          'https://github.com/mahmoud-aljabour/Library-Management-System',
        ),

        sectionHeading('Key Achievements'),
        bulletParagraph([
          text('Performance Optimization: ', { bold: true }),
          text('Reduced API response times by 86% through query optimization and caching strategies.'),
        ]),
        bulletParagraph([
          text('Scalability: ', { bold: true }),
          text('Architected systems handling 5,000+ daily API requests with 98% uptime.'),
        ]),
        bulletParagraph([
          text('Code Quality: ', { bold: true }),
          text('Maintained clean, well-documented codebases following SOLID principles and Laravel best practices.'),
        ]),
        bulletParagraph([
          text('Security Focus: ', { bold: true }),
          text('Implemented secure authentication, authorization, and data validation across all projects.'),
        ]),

        sectionHeading('Languages'),
        bulletParagraph([text('Arabic: ', { bold: true }), text('Native')]),
        bulletParagraph([
          text('English: ', { bold: true }),
          text('Professional Working Proficiency'),
        ]),

        sectionHeading('Professional Interests'),
        bodyParagraph([
          text(
            'Backend Architecture, API Design, Database Optimization, Multi-Tenant Systems, Payment Integration, Test-Driven Development',
          ),
        ]),
      ],
    },
  ],
})

const buffer = await Packer.toBuffer(doc)
fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, buffer)
console.log(`CV generated: ${outputPath}`)
