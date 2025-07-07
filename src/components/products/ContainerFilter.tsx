import { Separator } from '../shared/Separator';

const availableBrands = [
  'Samsung',
  'Apple',
  'Huawei',
  'Xiaomi',
  'Realme',
  'Honor',
];

interface Props {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
}

// This component renders a filter container for selecting product brands.
// It displays a list of available brands with checkboxes.
// When a brand is selected or deselected, it updates the state of selected brands.
// The component is styled with Tailwind CSS for a clean and modern look.
// The `selectedBrands` prop holds the currently selected brands,
// and the `setSelectedBrands` prop is a function to update the selected brands state.
// The component is designed to be reusable, allowing different sets of brands to be passed as props.
// The `handleBrandChange` function toggles the selection of a brand when its checkbox is clicked.
// If the brand is already selected, it removes it from the list; otherwise, it adds it to the list.
// The component is responsive, adapting to different screen sizes with appropriate styling.
// The `Separator` component is used to visually separate the filter section from other content.
// The brands are displayed in a vertical list, making it easy for users to select multiple options.
export const ContainerFilter = ({
  selectedBrands,
  setSelectedBrands,
}: Props) => {
  const handleBrandChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="p-5 border border-slate-200 rounded-lg h-fit col-span-2 lg:col-span-1">
      <h3 className="font-semibold text-xl mb-4">Filtros</h3>

      {/* Separador  */}
      <Separator />

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-medium text-black">Marcas</h3>

        <div className="flex flex-col gap-2">
          {availableBrands.map((brand) => (
            <label key={brand} className="inline-flex items-center">
              <input
                type="checkbox"
                className="text-black border-black focus:ring-black accent-black"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span className="ml-2 text-black text-sm cursor-pointer">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
