import { useMemo, useState } from 'react';
import { Car, ArrowUpDown, SearchX, Loader2 } from 'lucide-react';
import { vehicles as allVehicles } from '@/data/vehicles';
import type { Vehicle } from '@/data/vehicles';
import SearchBar, {
  emptyFilters,
  type VehicleFilters,
} from './SearchBar';
import VehicleCard from './VehicleCard';

type SortKey = 'price-asc' | 'price-desc' | 'year-desc' | 'mileage-asc';

const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'price-asc', label: 'Menor preço' },
  { key: 'price-desc', label: 'Maior preço' },
  { key: 'year-desc', label: 'Ano mais recente' },
  { key: 'mileage-asc', label: 'Menor quilometragem' },
];

const PAGE_SIZE = 6;

interface CatalogProps {
  onViewDetails: (vehicle: Vehicle) => void;
}

export default function VehicleCatalog({ onViewDetails }: CatalogProps) {
  const [filters, setFilters] = useState<VehicleFilters>(emptyFilters);
  const [sort, setSort] = useState<SortKey>('price-asc');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let result = allVehicles.filter((v) => {
      if (filters.brand && v.brand !== filters.brand) return false;
      if (filters.category && v.category !== filters.category) return false;
      if (filters.transmission && v.transmission !== filters.transmission)
        return false;
      if (filters.minPrice && v.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && v.price > Number(filters.maxPrice)) return false;
      if (filters.minYear && v.yearModel < Number(filters.minYear)) return false;
      if (filters.maxYear && v.yearModel > Number(filters.maxYear)) return false;
      if (filters.maxMileage && v.mileage > Number(filters.maxMileage))
        return false;
      return true;
    });

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'year-desc':
        result = [...result].sort((a, b) => b.yearModel - a.yearModel);
        break;
      case 'mileage-asc':
        result = [...result].sort((a, b) => a.mileage - b.mileage);
        break;
    }

    return result;
  }, [filters, sort]);

  const visibleVehicles = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleFilterChange = (newFilters: VehicleFilters) => {
    setFilters(newFilters);
    setVisible(PAGE_SIZE);
  };

  const handleClear = () => {
    setFilters(emptyFilters);
    setVisible(PAGE_SIZE);
  };

  return (
    <section id="estoque" className="scroll-mt-20 bg-ink-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700">
            <Car className="h-3.5 w-3.5" />
            Estoque
          </span>
          <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Encontre seu próximo veículo
          </h2>
          <p className="mt-3 max-w-xl text-ink-600">
            Use os filtros para refinar a busca. Os veículos abaixo são de
            demonstração e não representam o estoque real.
          </p>
        </div>

        {/* Barra de busca */}
        <SearchBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClear={handleClear}
        />

        {/* Controles de resultado */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-ink-600">
            <span className="font-bold text-ink-900">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}
          </p>
          <div className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4 text-ink-500" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm font-semibold text-ink-800 cursor-pointer transition-colors hover:border-ink-300 focus:border-accent-500 focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.key} value={opt.key}>
                  Ordenar: {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid de veículos */}
        {visibleVehicles.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-ink-100">
            <SearchX className="h-12 w-12 text-ink-300" />
            <h3 className="mt-4 font-display text-lg font-bold text-ink-800">
              Nenhum veículo encontrado
            </h3>
            <p className="mt-2 max-w-sm text-sm text-ink-500">
              Tente ajustar os filtros de busca para ver mais opções.
            </p>
            <button
              onClick={handleClear}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-600"
            >
              Limpar pesquisa
            </button>
          </div>
        )}

        {/* Carregar mais */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-ink-300 bg-white px-6 py-3 text-sm font-bold text-ink-800 transition-all hover:border-accent-500 hover:bg-accent-50 hover:text-accent-700"
            >
              <Loader2 className="h-4 w-4" />
              Carregar mais veículos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
