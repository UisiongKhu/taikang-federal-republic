# Tai Kang Federal Republic (台江聯邦共和國) Official Website

Welcome to the official website repository of the **Tai Kang Federal Republic** (Tâi-kang Liân-pang Kiōng-hô-kok / 台江聯邦共和國). This project serves as the digital portal for the nation, featuring an official government-archive aesthetic, rich historical context, and comprehensive trilingual support.

## 🌟 Key Features

* **Trilingual Interface (多語系支援)**
  Fully localized in three languages, allowing users to seamlessly switch between:
  * **English** (國際通用語言)
  * **Hanzi (漢字)** (台語漢字)
  * **Pe̍h-ōe-jī (白話字 / POJ)** (台語羅馬拼音)
* **Retro Government Aesthetic (復古官方風格)**
  The UI is designed with a 1980s official archive vibe, utilizing a carefully curated color palette (Navy Blue, Brass Gold, Sand White) and classic typography.
* **Custom Typography (專屬字型)**
  Integrates multiple custom font faces to ensure perfect rendering across all supported languages:
  * *Crimson Pro* for English serif headings.
  * *Iansui (芫荽體)* for the main body text.
  * *POJ Garamond* & *POJ Phiaute* for elegant Pe̍h-ōe-jī typography.
  * *GenRyuMin (源流明體)* & *GenSekiGothic (源石黑體)* for traditional Hanzi characters.
* **Modern Stack (現代化技術架構)**
  Built as a fast, responsive Single Page Application (SPA).

## 🚀 Technology Stack

* **Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **Routing**: [React Router v7](https://reactrouter.com/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Internationalization**: [react-i18next](https://react.i18next.com/)
* **Icons**: Custom SVG assets & Phosphor Icons

## 📂 Project Structure

```text
src/
├── assets/       # Static assets including national flags, emblems, and custom fonts
├── components/   # Reusable UI components (Header, Footer, Sidebar, ArticleContent)
├── locale/       # i18n translation JSON files (en.json, tg_HL.json, tg_POJ.json)
├── pages/        # Page components (Homepage, NationalOverview, etc.)
├── App.tsx       # Main application routing and layout wrapper
├── i18n.ts       # i18next configuration
└── index.css     # Global styles and font-face declarations
```

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/UisiongKhu/taikang-federal-republic.git
   ```
2. Navigate to the project directory:
   ```bash
   cd taikang-federal-republic
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

## 📜 License
MIT License
