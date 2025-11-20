import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileDown, Moon, Sun, Menu } from "lucide-react";
import clarinsLogo from "@/assets/clarins-logo.svg";
import { Badge } from "@/components/ui/badge";

export const StickyNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(scrollPercentage, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavigate = (sectionId: string) => {
    const isOnReferencesPage = location.pathname === '/references';
    
    if (isOnReferencesPage) {
      // Navigate back to main dashboard first
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // Already on main page, just scroll
      scrollToSection(sectionId);
    }
  };

  const handleExportPDF = () => {
    navigate('/print-all');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border transition-all duration-300 no-print ${
          isSticky ? "shadow-lg" : ""
        }`}
      >
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-150" style={{ width: `${progress}%` }} />

        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img src={clarinsLogo} alt="Clarins" className="h-8" />
              {isSticky && (
                <Badge variant="outline" className="hidden md:flex text-xs">
                  Strategic Decision Intelligence
                </Badge>
              )}
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNavigate("executive-summary")}
                className="text-sm"
              >
                Summary
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNavigate("kpi-overview")}
                className="text-sm"
              >
                KPIs
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNavigate("roi-analysis")}
                className="text-sm"
              >
                ROI Analysis
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNavigate("competitive")}
                className="text-sm"
              >
                Competitive
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNavigate("innovation-strengths")}
                className="text-sm"
              >
                Innovation
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNavigate("alternative")}
                className="text-sm"
              >
                Alternative
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/references')}
                className="text-sm"
              >
                References
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportPDF}
                className="hidden md:flex items-center gap-2"
              >
                <FileDown className="h-4 w-4" />
                Export PDF
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="hidden md:flex"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
