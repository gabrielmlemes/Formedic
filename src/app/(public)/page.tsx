import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <header className="absolute top-0 w-full p-6 flex justify-between items-center z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-formedic.png"
            alt="ForMedic Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-bold text-2xl tracking-tight text-foreground">ForMedic</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Funcionalidades
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Preços
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </Link>
        </nav>
      </header>

      <main className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 mb-6 text-sm font-medium text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          ✨ Gestão médica simplificada para o seu consultório
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
          Sua clínica, <span className="text-primary">organizada</span> e{' '}
          <span className="text-primary">eficiente</span>.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          A plataforma completa para médicos que buscam otimizar agendamentos, prontuários e a
          gestão financeira em um só lugar.
        </p>

        <div className="w-full sm:w-auto">
          <Button
            size="lg"
            className="text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/20"
            asChild
          >
            <Link href="/dashboard">Ir para o Dashboard</Link>
          </Button>
        </div>
      </main>

      <footer className="absolute bottom-0 w-full p-8 text-center text-sm text-muted-foreground z-10">
        © {new Date().getFullYear()} ForMedic. Todos os direitos reservados.
      </footer>
    </div>
  );
}
