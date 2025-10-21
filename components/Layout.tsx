import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function Layout({ 
  children, 
  currentPage,
  showHeader = true,
  showFooter = true 
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header currentPage={currentPage} />}
      
      <main className="flex-1">
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
}