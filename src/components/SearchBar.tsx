import { SlidersHorizontal, X } from 'lucide-react';
import { useMemo } from 'react';
import { vehicles } from '@/data/vehicles';

export interface VehicleFilters {
  brand: string;
  category: string;
  transmission: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
  maxMileage: string;
}

export const emptyFilters: VehicleFilters = {
  brand: '',
  category: '',
  transmission: '',
  minPrice: '',
  maxPrice: '',
  minYear: '',
  maxYear: '',
  maxMileage: '',
};

interface SearchBarProps {
  filters: VehicleFilters;
  onFilterChange: (filters: VehicleFilters) => void;
  onClear: () => void;
}

export const quickShortcuts = [
  { label: 'SUVs', filters: { ...emptyFilters, category: 'SUV' } },
  { label: 'Até R$ 60 mil', filters: { ...emptyFilters, maxPrice: '60000' } },
  { label: 'Automáticos', filters: { ...emptyFilters, transmission: 'Automatico' } },
  { label: 'Mais recentes', filters: { ...emptyFilters, minYear: '2023' } },
];

export default function SearchBar({
  filters,
  onFilterChange,
  onClear,
}: SearchBarProps) {
  const brands = useMemo(
    () => Array.from(new Set(vehicles.map((v) => v.brand))).sort(),
    []
  );
  const categories = useMemo(
    () => Array.from(new Set(vehicles.map((v) => v.category))).sort(),
    []
  );
  const transmissions = useMemo(
    () => Array.from(new Set(vehicles.map((v) => v.transmission))).sort(),
    []
  );

  const update = (key: keyof VehicleFilters, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== '');

  return (
    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-100/50 sm:p-6">
      {/* Header da busca */}
      <div className="mb-5 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
          <SlidersHorizontal className="h-5 w-5 text-accent-500" />
          Buscar veículos
        </h3>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="inline-flex items-center gap-1 text-xs font-semibold text-ink-600 hover:text-accent-600"
          >
            <X className="h-3.5 w-3.5" />
            Limpar filtros
          </button>
        )}
      </div>

      {/* Grid de filtros */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Marca">
          <Select
            value={filters.brand}
            onChange={(v) => update('brand', v)}
            options={brands}
            placeholder="Todas as marcas"
          />
        </Field>

        <Field label="Categoria">
          <Select
            value={filters.category}
            onChange={(v) => update('category', v)}
            options={categories}
            placeholder="Todas as categorias"
          />
        </Field>

        <Field label="Câmbio">
          <Select
            value={filters.transmission}
            onChange={(v) => update('transmission', v)}
            options={transmissions}
            placeholder="Todos os câmbios"
          />
        </Field>

        <Field label="Quilometragem máx.">
          <input
            type="number"
            min={0}
            value={filters.maxMileage}
            onChange={(e) => update('maxMileage', e.target.value)}
            placeholder="Ex.: 50000"
            className="form-input"
          />
        </Field>

        <Field label="Preço mínimo (R$)">
          <input
            type="number"
            min={0}
            value={filters.minPrice}
            onChange={(e) => update('minPrice', e.target.value)}
            placeholder="Ex.: 50000"
            className="form-input"
          />
        </Field>

        <Field label="Preço máximo (R$)">
          <input
            type="number"
            min={0}
            value={filters.maxPrice}
            onChange={(e) => update('maxPrice', e.target.value)}
            placeholder="Ex.: 150000"
            className="form-input"
          />
        </Field>

        <Field label="Ano mínimo">
          <input
            type="number"
            min={1990}
            max={2030}
            value={filters.minYear}
            onChange={(e) => update('minYear', e.target.value)}
            placeholder="Ex.: 2020"
            className="form-input"
          />
        </Field>

        <Field label="Ano máximo">
          <input
            type="number"
            min={1990}
            max={2030}
            value={filters.maxYear}
            onChange={(e) => update('maxYear', e.target.value)}
            placeholder="Ex.: 2024"
            className="form-input"
          />
        </Field>
      </div>

      {/* Atalhos */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
          Atalhos:
        </span>
        {quickShortcuts.map((shortcut) => (
          <button
            key={shortcut.label}
            onClick={() => onFilterChange(shortcut.filters)}
            className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700 transition-all hover:border-accent-400 hover:bg-accent-50 hover:text-accent-700"
          >
            {shortcut.label}
          </button>
        ))}
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #e2e2e4;
          background: #fafafa;
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          color: #1b1e24;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: #e11d2a;
          box-shadow: 0 0 0 3px rgba(225,29,42,0.12);
          background: #fff;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="form-input cursor-pointer"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
