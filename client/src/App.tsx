import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SpecificPages from "./pages/SpecificPages";
import IPTVBlogPage from "./pages/IPTVBlogPage";

type PageType = 'install-newbraz' | 'football' | 'movies' | 'series' | 'trial' | 'plans' | 'subscribe' | 'activation' | 'renew' | 'payment' | 'invoice' | 'channels' | 'install-smart-tv' | 'install-tv-box' | 'install-firestick' | 'tv-brasil' | 'newbraz' | 'assistir' | 'canal-brasil';

const PageWrapper = ({ pageType }: { pageType: PageType }) => (
  <SpecificPages pageType={pageType} />
);

function Router() {
  return (
    <Switch>
      {/* Portuguese (PT-BR) - Root paths */}
      <Route path={"/"} component={Home} />
      <Route path={"/watch-live-tv-online.html"} component={Home} />
      <Route path={"/teste-gratis.html"} component={Home} />
      <Route path={"/planos.html"} component={Home} />
      <Route path={"/assinar.html"} component={Home} />
      <Route path={"/ativacao.html"} component={Home} />
      <Route path={"/pagar-plano.html"} component={Home} />
      <Route path={"/segunda-via.html"} component={Home} />
      <Route path={"/tv-online-brasil.html"} component={Home} />
      <Route path={"/free-streaming-app.html"} component={Home} />
      <Route path={"/watch-live-sports-free.html"} component={Home} />
      <Route path={"/watch-tv-online-free.html"} component={Home} />
      <Route path={"/blog/"} component={Home} />
      <Route path={"/blog/como-assistir-tv-online.html"} component={Home} />
      <Route path={"/blog/melhor-streaming-2026.html"} component={Home} />
      <Route path={"/blog/como-ver-futebol-ao-vivo.html"} component={Home} />
      <Route path={"/blog/como-instalar-na-smart-tv.html"} component={Home} />
      <Route path={"/blog/app-para-tv-box.html"} component={Home} />
      <Route path={"/blog/guia-iptv-2026.html"} component={IPTVBlogPage} />

      {/* Portuguese Specific Pages */}
      <Route path={"/instalar-newbraz.html"} component={() => <PageWrapper pageType="install-newbraz" />} />
      <Route path={"/futebol-ao-vivo.html"} component={() => <PageWrapper pageType="football" />} />
      <Route path={"/filmes-online.html"} component={() => <PageWrapper pageType="movies" />} />
      <Route path={"/series-online.html"} component={() => <PageWrapper pageType="series" />} />
      <Route path={"/newbraz-teste-gratis.html"} component={() => <PageWrapper pageType="trial" />} />
      <Route path={"/new-braz-planos.html"} component={() => <PageWrapper pageType="plans" />} />
      <Route path={"/assinar-newbraz.html"} component={() => <PageWrapper pageType="subscribe" />} />
      <Route path={"/newbraz-ativacao.html"} component={() => <PageWrapper pageType="activation" />} />
      <Route path={"/new-braz-ativacao.html"} component={() => <PageWrapper pageType="activation" />} />
      <Route path={"/renovar-smart-tv.html"} component={() => <PageWrapper pageType="renew" />} />
      <Route path={"/renovar-tv-box.html"} component={() => <PageWrapper pageType="renew" />} />
      <Route path={"/renovar-app.html"} component={() => <PageWrapper pageType="renew" />} />
      <Route path={"/renovar-new-braz.html"} component={() => <PageWrapper pageType="renew" />} />
      <Route path={"/canais-ao-vivo.html"} component={() => <PageWrapper pageType="channels" />} />
      <Route path={"/instalar-smart-tv.html"} component={() => <PageWrapper pageType="install-smart-tv" />} />
      <Route path={"/instalar-tv-box.html"} component={() => <PageWrapper pageType="install-tv-box" />} />
      <Route path={"/instalar-firestick.html"} component={() => <PageWrapper pageType="install-firestick" />} />
      <Route path={"/newbraz.html"} component={() => <PageWrapper pageType="newbraz" />} />
      <Route path={"/renovar-newbraz.html"} component={() => <PageWrapper pageType="renew" />} />
      <Route path={"/assistir-brasil.html"} component={() => <PageWrapper pageType="assistir" />} />
      <Route path={"/assistir-canal-brasil.html"} component={() => <PageWrapper pageType="canal-brasil" />} />

      {/* English (EN) - /en/ paths */}
      <Route path={"/en/"} component={Home} />
      <Route path={"/en/watch-live-tv.html"} component={Home} />
      <Route path={"/en/live-sports.html"} component={Home} />
      <Route path={"/en/movies-online.html"} component={Home} />
      <Route path={"/en/series-online.html"} component={Home} />
      <Route path={"/en/free-trial.html"} component={Home} />
      <Route path={"/en/plans.html"} component={Home} />
      <Route path={"/en/subscribe.html"} component={Home} />
      <Route path={"/en/activation.html"} component={Home} />
      <Route path={"/en/renew-smart-tv.html"} component={Home} />
      <Route path={"/en/renew-tv-box.html"} component={Home} />
      <Route path={"/en/renew-app.html"} component={Home} />
      <Route path={"/en/pay-plan.html"} component={Home} />
      <Route path={"/en/renew-new-braz.html"} component={Home} />
      <Route path={"/en/invoice.html"} component={Home} />
      <Route path={"/en/live-channels.html"} component={Home} />
      <Route path={"/en/install-smart-tv.html"} component={Home} />
      <Route path={"/en/install-tv-box.html"} component={Home} />
      <Route path={"/en/install-firestick.html"} component={Home} />
      <Route path={"/en/tv-online-brazil.html"} component={Home} />
      <Route path={"/en/free-streaming-app.html"} component={Home} />
      <Route path={"/en/watch-live-sports-free.html"} component={Home} />
      <Route path={"/en/watch-tv-online-free.html"} component={Home} />
      <Route path={"/en/blog/"} component={Home} />
      <Route path={"/en/blog/how-to-watch-live-tv-online.html"} component={Home} />
      <Route path={"/en/blog/best-streaming-platforms-2026.html"} component={Home} />
      <Route path={"/en/blog/watch-football-online.html"} component={Home} />
      <Route path={"/en/blog/how-to-install-on-smart-tv.html"} component={Home} />
      <Route path={"/en/blog/best-app-for-tv-box.html"} component={Home} />
      <Route path={"/en/blog/iptv-guide-2026.html"} component={IPTVBlogPage} />

      {/* Spanish (ES) - /es/ paths */}
      <Route path={"/es/"} component={Home} />
      <Route path={"/es/tv-online.html"} component={Home} />
      <Route path={"/es/futbol-en-vivo.html"} component={Home} />
      <Route path={"/es/peliculas.html"} component={Home} />
      <Route path={"/es/series-online.html"} component={Home} />
      <Route path={"/es/prueba-gratis.html"} component={Home} />
      <Route path={"/es/planes.html"} component={Home} />
      <Route path={"/es/suscribirse.html"} component={Home} />
      <Route path={"/es/activacion.html"} component={Home} />
      <Route path={"/es/renovar-smart-tv.html"} component={Home} />
      <Route path={"/es/renovar-tv-box.html"} component={Home} />
      <Route path={"/es/renovar-app.html"} component={Home} />
      <Route path={"/es/pagar-plan.html"} component={Home} />
      <Route path={"/es/renovar-new-braz.html"} component={Home} />
      <Route path={"/es/segunda-via.html"} component={Home} />
      <Route path={"/es/canales-en-vivo.html"} component={Home} />
      <Route path={"/es/instalar-smart-tv.html"} component={Home} />
      <Route path={"/es/instalar-tv-box.html"} component={Home} />
      <Route path={"/es/instalar-firestick.html"} component={Home} />
      <Route path={"/es/tv-online-brasil.html"} component={Home} />
      <Route path={"/es/app-streaming-gratis.html"} component={Home} />
      <Route path={"/es/ver-deportes-en-vivo-gratis.html"} component={Home} />
      <Route path={"/es/ver-tv-online-gratis.html"} component={Home} />
      <Route path={"/es/blog/"} component={Home} />
      <Route path={"/es/blog/ver-tv-online.html"} component={Home} />
      <Route path={"/es/blog/ver-futbol-en-vivo.html"} component={Home} />
      <Route path={"/es/blog/mejor-streaming-2026.html"} component={Home} />
      <Route path={"/es/blog/como-instalar-en-smart-tv.html"} component={Home} />
      <Route path={"/es/blog/mejor-app-para-tv-box.html"} component={Home} />
      <Route path={"/es/blog/guia-iptv-2026.html"} component={IPTVBlogPage} />

      {/* 404 */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Remove "Made with Manus" element
    const removeManusBranding = () => {
      const divs = document.querySelectorAll('div');
      divs.forEach(div => {
        if (div.textContent && div.textContent.includes('Made with Manus')) {
          div.style.display = 'none';
          div.style.visibility = 'hidden';
          div.style.height = '0';
          div.style.width = '0';
          div.style.overflow = 'hidden';
        }
      });
    };

    // Run immediately and after a short delay to catch dynamically added elements
    removeManusBranding();
    const timer = setInterval(removeManusBranding, 500);
    const timeout = setTimeout(() => clearInterval(timer), 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
