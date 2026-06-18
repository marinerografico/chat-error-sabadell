import AppHeader from "./app-header";

// Estado de carga de Inicio: reusa la barra superior real y muestra bloques
// "shimmer" (clase .skeleton-shimmer de tailwind.css) imitando la estructura
// del Inicio mientras se "cargan" los datos. Se muestra ~2 s al entrar.

function Bar({ className }: { className: string }) {
  return <div className={`skeleton-shimmer rounded-[8px] ${className}`} />;
}

function QuickAction() {
  return (
    <div className="flex flex-col items-center gap-[8px] shrink-0">
      <div className="skeleton-shimmer rounded-full size-[52px]" />
      <div className="skeleton-shimmer rounded-[6px] h-[10px] w-[48px]" />
    </div>
  );
}

function ListRow() {
  return (
    <div className="flex items-center gap-[12px] py-[12px]">
      <div className="skeleton-shimmer rounded-full size-[40px] shrink-0" />
      <div className="flex-1 flex flex-col gap-[8px]">
        <Bar className="h-[12px] w-[60%]" />
        <Bar className="h-[10px] w-[40%]" />
      </div>
      <Bar className="h-[14px] w-[64px]" />
    </div>
  );
}

export default function InicioSkeleton() {
  return (
    <div className="bg-[#fafafa] flex flex-col h-full w-full overflow-hidden">
      <AppHeader />

      <div className="flex-1 px-[16px] pt-[8px] flex flex-col gap-[24px] overflow-hidden">
        {/* Saludo */}
        <Bar className="h-[22px] w-[160px] mt-[8px]" />

        {/* Tarjeta de cuenta / saldo */}
        <div className="skeleton-shimmer rounded-[16px] h-[150px] w-full" />

        {/* Acciones rápidas */}
        <div className="flex items-start justify-between">
          <QuickAction />
          <QuickAction />
          <QuickAction />
          <QuickAction />
        </div>

        {/* Lista de productos / movimientos */}
        <div className="flex flex-col">
          <Bar className="h-[14px] w-[120px] mb-[8px]" />
          <ListRow />
          <ListRow />
          <ListRow />
        </div>

        {/* Carrusel "Te puede interesar" */}
        <div className="flex gap-[12px]">
          <div className="skeleton-shimmer rounded-[16px] h-[120px] w-[260px] shrink-0" />
          <div className="skeleton-shimmer rounded-[16px] h-[120px] w-[80px] shrink-0" />
        </div>
      </div>
    </div>
  );
}
