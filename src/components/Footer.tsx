import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import NationalFlag from "../assets/Flag_of_TaiKangState.png";

const Footer = () => {
  const { i18n } = useTranslation();
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`TST ${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getDateString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const huaZhanYear = year - 1988;
    const monthNum = now.getMonth() + 1;
    const day = now.getDate();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const getOrdinalSuffix = (d: number) => {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    const englishDate = `${months[now.getMonth()]} ${day}${getOrdinalSuffix(day)}, ${year}`;

    switch (i18n.language) {
      case 'tg_HL':
        return `${year}（華占 ${huaZhanYear} 年）${monthNum} 月 ${day}`;
      case 'tg_POJ':
        return `${year} (Hôa chiàm ${huaZhanYear}) ${monthNum} goe̍h ${day}`;
      case 'en':
      default:
        return englishDate;
    }
  };

  return (
    <footer className="bg-navy py-4 border-t-4 border-brass">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[10px] text-brass uppercase tracking-widest">
        <span>{getDateString()}</span>
        <img src={NationalFlag} alt="Flag of Tai Kang State" className="h-7 object-contain border border-gray-500" />
        <span>{timeStr}</span>
      </div>
    </footer>
  );
};

export default Footer;
