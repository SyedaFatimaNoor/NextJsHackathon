import { Check } from 'lucide-react';

interface FilterGroupProps {
  title: string;
  options: { label: string; checked?: boolean }[];
  onChange: (label: string) => void;
}

const FilterGroup = ({ title, options, onChange }: FilterGroupProps) => (
  <div className="space-y-5">
    <h3 className="text-base font-normal text-[#2A254B] font-clash">
      {title}
    </h3>
    <div className="space-y-3">
      {options.map((option) => (
        <label key={option.label} className="flex items-center gap-3 cursor-pointer">
          <div 
            className={`w-4 h-4 border flex items-center justify-center
              ${option.checked 
                ? 'border-[#4E4D93] bg-[#4E4D93]' 
                : 'border-[#DBDBDB]'
              }`}
          >
            {option.checked && <Check className="w-3 h-3 text-white" />}
          </div>
          <span className="text-base text-[#2A254B]">{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);

const FilterSection = () => {
  const productTypes = [
    { label: 'Furniture', checked: false },
    { label: 'Homeware', checked: true },
    { label: 'Sofas', checked: false },
    { label: 'Light fittings', checked: false },
    { label: 'Accessories', checked: false }
  ];

  const priceRanges = [
    { label: '0 - 100', checked: false },
    { label: '101 - 250', checked: false },
    { label: '250 +', checked: false }
  ];

  const designers = [
    { label: 'Robert Smith', checked: false },
    { label: 'Liam Gallagher', checked: false },
    { label: 'Biggie Smalls', checked: false },
    { label: 'Thom Yorke', checked: false }
  ];

  const handleFilterChange = (label: string) => {
    // Implement filter logic here
    console.log('Filter changed:', label);
  };

  return (
    <aside className="w-full max-w-[385px] space-y-12 p-8">
      <FilterGroup 
        title="Product type" 
        options={productTypes} 
        onChange={handleFilterChange}
      />
      <FilterGroup 
        title="Price" 
        options={priceRanges} 
        onChange={handleFilterChange}
      />
      <FilterGroup 
        title="Designer" 
        options={designers} 
        onChange={handleFilterChange}
      />
    </aside>
  );
};

export default FilterSection;